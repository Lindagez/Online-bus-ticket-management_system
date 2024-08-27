const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');
const User = require('../models/user.model');
const BusModel = require('../models/bus.model'); // Import the Bus model
const validation = require('../Middleware/validation/validation');
const bcrypt = require('bcrypt');
const userValidation = validation.userValidation;
const openTicket = validation.openTicket;

// Define routes

// Create a ticket and update the bus model
router.post('/ticket', async (req, res) => {
    try {
        const [result, data] = userValidation(req.body.passenger);
        if (!result) return res.status(404).json({ message: data });

        const ticket = new Ticket({ seat_number: req.body.seat_number });
        const user = new User(req.body.passenger);

        const savedUser = await user.save();
        if (savedUser) {
            ticket.passenger = savedUser._id;
            const savedTicket = await ticket.save();

            // Update the bus model
            const ticketdata = req.body.ticketSummary.date +
                "@" +
                req.body.ticketSummary.ticket +
                "@" +
                req.body.userDetails.gender;
            const filter = { _id: req.body.bus };
            const update = { $push: { seats: ticketdata } };
            await BusModel.findOneAndUpdate(filter, update);

            res.status(200).json(savedTicket);
        }
    } catch (err) {
        res.status(500).json({ message: "Internal server error!" });
    }
});

// Update a ticket
router.put('/ticket/:ticket_id', async (req, res) => {
    const { ticket_id } = req.params;
    const payload = req.body;
    let passenger = null;

    try {
        if ('passenger' in payload) {
            passenger = payload.passenger;
        }

        const ticket = await Ticket.findById(ticket_id);
        if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

        if (payload.is_booked === true) {
            const user_id = ticket.passenger;
            await User.findByIdAndRemove(user_id);
            ticket.is_booked = payload.is_booked;
            const updatedTicket = await ticket.save();
            res.status(200).json(updatedTicket);
        } else if (payload.is_booked === false && passenger) {
            const user = new User(passenger);
            const savedUser = await user.save();
            ticket.passenger = savedUser._id;
            ticket.is_booked = payload.is_booked;
            const updatedTicket = await ticket.save();
            res.status(200).json(updatedTicket);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Edit user details for a ticket
router.put('/user/:ticket_id', async (req, res) => {
    const { ticket_id } = req.params;
    const payload = req.body;

    try {
        const ticket = await Ticket.findById(ticket_id);
        if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

        const user_id = ticket.passenger;
        const user = await User.findById(user_id);
        if (user) {
            if ('name' in payload) user.name = payload.name;
            if ('sex' in payload) user.sex = payload.sex;
            if ('email' in payload) user.email = payload.email;
            if ('phone' in payload) user.phone = payload.phone;
            if ('age' in payload) user.age = payload.age;
            const updatedUser = await user.save();
            res.status(202).json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get the status of a ticket
router.get('/ticket/:ticket_id', async (req, res) => {
    const { ticket_id } = req.params;
    try {
        const ticket = await Ticket.findById(ticket_id);
        if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
        res.status(200).json({ status: ticket.is_booked });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get list of all open tickets
router.get('/tickets/open', async (req, res) => {
    try {
        const tickets = await Ticket.find({ is_booked: false });
        res.status(200).json(tickets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get list of all closed tickets
router.get('/tickets/closed', async (req, res) => {
    try {
        const tickets = await Ticket.find({ is_booked: true });
        res.status(200).json(tickets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// View person details of a ticket
router.get('/ticket/details/:ticket_id', async (req, res) => {
    const { ticket_id } = req.params;
    try {
        const ticket = await Ticket.findById(ticket_id);
        if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

        const user = await User.findById(ticket.passenger);
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
// search by tickets
router.get('/search/tickets', async (req, res) => {
    const { query } = req.query;
    
    try {
        // Search for tickets based on seat number or other criteria
        const tickets = await Ticket.find({
            $or: [
                { seat_number: { $regex: query, $options: 'i' } }, // case-insensitive search
                { is_booked: { $regex: query, $options: 'i' } }
            ]
        });
        
        if (tickets.length === 0) {
            return res.status(404).json({ message: 'No tickets found' });
        }
        
        res.status(200).json(tickets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



// Reset tickets
router.post('/tickets/reset', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "username and password are needed in the request body" });
    }

    if (!bcrypt.compareSync(password, process.env.PASSWORD_HASH)) {
        return res.status(400).json({ message: "Incorrect password" });
    }

    if (username !== process.env.USER) {
        return res.status(400).json({ message: "Incorrect username" });
    }

    try {
        const tickets = await Ticket.find({});
        tickets.forEach(openTicket); // Assuming openTicket is a function that processes tickets
        res.status(200).json({ message: "success" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
