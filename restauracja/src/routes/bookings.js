const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");
const Table = require("../models/Table");
const { default: mongoose } = require("mongoose");

//Wyswietlenie listy wszystkich rezerwacji

router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("stolik");
    res.json(bookings);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Wyswietlenie konkretnej rezerwacji

router.get("/:id", async (req, res) => {
  try {
    const bookings = await Booking.findById(req.params.id);

    if (!bookings) throw Error("No booking found!");
    res.status(200).json(bookings);

    console.log(`Booking id:${req.params.id} returned from database!`);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Wyszukiwanie stolikow wolnych danego dnia

router.post("/free", async(req,res) =>{
  const table = await Table.find({status: "wolny",iloscOsob: req.body.iloscOsob});
  const booking = await Booking.find({start: req.body.start, _id: table._id});
  if(booking.length == 0)
    res.json(table)
  else
    res.send('There is free table!')
});

//Usuwanie rezerwacji po ID

router.delete("/:id", async (req, res) => {
  try {
    const bookings = await Booking.findByIdAndDelete(req.params.id);

    if (!bookings) throw Error("No booking found!");
    res.status(200).json({ success: true });

    console.log(`Booking id:${req.params.id} deleted from database!`);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Usuwanie wszystkich rezerwacji

router.delete("/", async (req, res) => {
  try {
    const bookings = await Booking.remove();

    if (!bookings) throw Error("No booking found!");
    res.status(200).json({ success: true });

    console.log(`All bookings deleted from database!`);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// Update stolika po ID

router.put("/:id", async (req, res) => {
  try {
    const bookings = await Booking.findByIdAndUpdate(req.params.id, req.body);

    if (!bookings) throw Error("Something went wrong updating the booking!");
    res.status(200).json(req.body);

    console.log(`Booking id:${req.params.id} updated!`);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
