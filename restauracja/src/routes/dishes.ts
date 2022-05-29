const express = require("express");
const router = express.Router();

const Dish = require("../models/Dish");

//Wyswietlanie listy wszystkich dań

router.get("/", async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Wyswietlenie konkretnego dania

router.get("/:id", async (req, res) => {
  try {
    const dishes = await Dish.findById(req.params.id);

    if (!dishes) throw Error("No dish found!");
    res.status(200).json(dishes);

    console.log(`Dish id:${req.params.id} returned from database!`);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Dodawanie dań do bazy danych

router.post("/", async (req, res) => {
    const newDish = new Dish({
      nazwa: req.body.nazwa,
      cena: req.body.cena,
      kategoria: req.body.kategoria
    });
    const saveDish = await newDish.save();
  
    try {
      res.status(200).json(saveDish);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

//Usuwanie dania po ID

router.delete("/:id", async (req, res) => {
    try {
      const dishes = await Dish.findByIdAndDelete(req.params.id);
  
      if (!dishes) throw Error("No dish found!");
      res.status(200).json({ success: true });
  
      console.log(`Dish id:${req.params.id} deleted from database!`);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

//Usuwanie wszystkich dan

router.delete("/", async (req, res) => {
  try {
    const dishes = await Dish.remove();

    if (!dishes) throw Error("No dish found!");
    res.status(200).json({ success: true });

    console.log(`All dishes deleted from database!`);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
  
// Update dania po ID

router.put("/:id", async (req, res) => {
    try {
      const dishes = await Dish.findByIdAndUpdate(
        req.params.id,
        req.body
      );
  
      if (!dishes)
        throw Error("Something went wrong updating the dish!");
      res.status(200).json(req.body);
  
      console.log(`Dish id:${req.params.id} updated!`);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });


module.exports = router;
