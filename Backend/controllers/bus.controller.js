const express = require("express");
const BusModel = require("../models/bus.model");
const router = express.Router();
const app = express.Router();

// Add a new bus
app.post("/addnew", async (req, res) => {
  try {
    let newbus = await BusModel.create({ ...req.body });
    return res.send(newbus);
  } catch (error) {
    return res.send(error.message);
  }
});

// Get all buses based on source and destination
app.get("/getall", async (req, res) => {
  try {
    const { from, to } = req.body;

    if (!from || !to) {
      return res.status(400).send("Source and destination must be provided.");
    }

    let sourceStr = from.trim();
    let destinationStr = to.trim();

    let source = sourceStr.charAt(0).toUpperCase() + sourceStr.slice(1);
    let destination =
      destinationStr.charAt(0).toUpperCase() + destinationStr.slice(1);

    let allbuses = await BusModel.find({
      from: source,
      to: destination,
    });

    return res.send(allbuses);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Get a single bus by ID
app.get("/one", async (req, res) => {
  try {
    let bus = await BusModel.findById(req.body.id);
    return res.send(bus);
  } catch (error) {
    return res.send(error.message);
  }
});

app.get("/search", async (req, res) => {
  const { companyname, route, date } = req.query;

  try {
    const query = {
      $or: [{companyname: companyname}]
    };

    // // Add search criteria to query object
    // if (companyname) {
    //   query.companyname = { $regex: companyname, $options: "i" }; // case-insensitive search on company name
    // }
    // if (route) {
    //   query.route = { $regex: route, $options: "i" }; // case-insensitive search on route
    // }
    // if (date) {
    //   query.date = new Date(date); // exact match on date
    // }
    
    console.log(query); 
    // Search buses based on the query
    const buses = await BusModel.find(query);
    
    if (buses.length === 0) {
      return res.status(404).json({ message: "No buses found" });
    }
    
    return res.status(200).json(buses);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// Delete a bus by ID
app.delete("/delete/:id", async (req, res) => {
  try {
    let deletedBus = await BusModel.findByIdAndDelete(req.params.id);
    if (!deletedBus) {
      return res.status(404).send("Bus not found");
    }
    return res.send("Bus deleted successfully");
  } catch (error) {
    return res.send(error.message);
  }
});

// Edit (update) a bus by ID
app.put("/edit/:id", async (req, res) => {
  try {
    let updatedBus = await BusModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBus) {
      return res.status(404).send("Bus not found");
    }
    return res.send(updatedBus);
  } catch (error) {
    return res.send(error.message);
  }
});

module.exports = app;
