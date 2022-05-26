const express = require("express");
const router = express.Router();

const Order = require("../models/Order");
const { default: mongoose } = require("mongoose");

//Wyswietlanie listy wszystkich zamowien

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find()
    .populate("pracownik")
    .populate("pozycje")
    .populate("stolik");
    res.json(orders);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Wyswietlenie konkretnego zamowienia

router.get("/:id", async (req, res) => {
  try {
    const orders = await Order.findById(req.params.id);

    if (!orders) throw Error("No order found!");
    res.status(200).json(orders);

    console.log(`Order id:${req.params.id} returned from database!`);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Dodawanie zamowienia do bazy danych

router.post("/", async (req, res) => {
  const newOrder = new Order({
    pracownik: new mongoose.Types.ObjectId(req.body.pracownik),
    pozycje: req.body.pozycje,
    statusZamowienia: req.body.statusZamowienia,
    stolik: new mongoose.Types.ObjectId(req.body.stolik),
    kwota: req.body.kwota
  });
  const saveOrder = await newOrder.save();

  try {
    res.status(200).json(saveOrder);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Usuwanie zamowienia po ID

router.delete("/:id", async (req, res) => {
  try {
    const orders = await Order.findByIdAndDelete(req.params.id);

    if (!order) throw Error("No order found!");
    res.status(200).json({ success: true });

    console.log(`Order id:${req.params.id} deleted from database!`);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Usuwanie wszystkich zamowien

router.delete("/", async (req, res) => {
  try {
    const orders = await Order.remove();

    if (!orders) throw Error("No order found!");
    res.status(200).json({ success: true });

    console.log(`All orders deleted from database!`);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// Update zamowienia po ID

router.put("/:id", async (req, res) => {
  try {
    const orders = await Order.findByIdAndUpdate(req.params.id, req.body);

    if (!orders) throw Error("Something went wrong updating the order!");
    res.status(200).json(req.body);

    console.log(`Order id:${req.params.id} updated!`);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
