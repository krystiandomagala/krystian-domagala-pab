const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");

//Wyswietlenie listy wszystkich rezerwacji

router.get("/", async (req, res) => {
    try {
      const bookings = await Booking.find();
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

//Dodawanie stolikow do bazy danych

// ################ TO DO

router.post("/", async (req, res) => {
    const newBooking = new Booking({
      stolik: req.body.stolik,
      start: req.body.start,
      koniec: req.body.koniec,
      klient: req.body.klient
    });
    const saveBooking = await newBooking.save();
  
    try {
      res.status(200).json(saveBooking);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });
  
  //Usuwanie stolika po ID

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

// Update stolika po ID

router.put("/:id", async (req, res) => {
    try {
      const bookings = await Booking.findByIdAndUpdate(
        req.params.id,
        req.body
      );
  
      if (!bookings)
        throw Error("Something went wrong updating the booking!");
      res.status(200).json(req.body);
  
      console.log(`Booking id:${req.params.id} updated!`);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

module.exports = router;
