const express = require("express");
const { resourceUsage } = require("process");
const router = express.Router();

const Restaurant = require("../models/Restaurant");

// Wyświetlenie restauracji

router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Dodawanie restauracji do bazy danych

router.post("/", async (req, res) => {
  const restaurant = await Restaurant.find();
  if (restaurant.length != 0) 
  {
      res.send("Restaurant already exists!");
      console.log("Restaurant already exists!");
  }
  else {
    const newRestaurant = new Restaurant({
      nazwa: req.body.nazwa,
      adres: req.body.adres,
      telefon: req.body.telefon,
      NIP: req.body.NIP,
      email: req.body.email,
      www: req.body.www,
    });
    const saveRestaurant = await newRestaurant.save();

    try {
      res.status(200).json(saveRestaurant);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
});

// Usuwanie restauracji po ID

router.delete("/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id);

    if (!restaurant) throw Error("No restaurant found!");
    res.status(200).json({ success: true });

    console.log(`Restaurant id:${req.params.id} deleted from database!`);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// Update restauracji po ID

router.put("/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    if (!restaurant)
      throw Error("Something went wrong updating the restaurant!");
    res.status(200).json(req.body);

    console.log(`Restaurant id:${req.params.id} updated!`);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
