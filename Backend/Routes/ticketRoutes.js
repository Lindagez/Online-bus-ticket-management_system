const express = require("express");
const router = express.Router();
const {createTicket,updateTicket,editUserDetails,getTicketStatus,getOpenTickets, getClosedTickets,resetTickets ,viewPersonDetails,searchTickets}= require("../controllers/ticket")

router.post('/ticket', createTicket);
router.put('/ticket/:ticket_id', updateTicket);
router.put('/user/:ticket_id', editUserDetails);
router.get('/ticket/:ticket_id', getTicketStatus);
router.get('/tickets/open', getOpenTickets);
router.get('/tickets/closed', getClosedTickets);
router.get('/ticket/details/:ticket_id', viewPersonDetails);
router.get('/search/tickets', searchTickets);
router.post('/tickets/reset', resetTickets);

module.exports = router;