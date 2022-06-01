import express from "express";
const router = express.Router();

const Product = require("../models/Product");

//Wyswietlenie listy wszystkich produktow z sortowaniem i paginacją "?page=1&limit=2" - paginacja "?page=1&limit=2&sort=1" - paginacja i sortowanie

router.get("/", async (req:any, res:any) => {

    const page = req.query.page
    const limit = req.query.limit
    const sort = req.query.sort

    try {
      const products = await Product.find().skip((page-1)*limit).limit(limit).sort({ "nazwa": sort });
      res.json(products);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

//Wyswietlenie konkretnego produktu

router.get("/:id", async (req:any, res:any) => {
  try {
    const products = await Product.findById(req.params.id);

    if (!products) throw Error("No product found!");
    res.status(200).json(products);

    console.log(`Product id:${req.params.id} returned from database!`);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Dodawanie produktów do bazy danych

router.post("/", async (req:any, res:any) => {
    const newProduct = new Product({
      nazwa: req.body.nazwa,
      cena: req.body.cena,
      ilosc: req.body.ilosc,
      jednostkaMiary: req.body.jednostkaMiary
    });
    const saveProduct = await newProduct.save();
  
    try {
      res.status(200).json(saveProduct);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

//Zglaszanie zapotrzebowania na produkty

router.post("/to-buy", async (req:any, res:any) => {
  const newProduct = new Product({
    nazwa: req.body.nazwa,
    cena: req.body.cena,
    ilosc: req.body.ilosc,
    jednostkaMiary: req.body.jednostkaMiary
  });
  const saveProduct = await newProduct.save();

  try {
    res.status(200).json(saveProduct);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Usuwanie produktu po ID

router.delete("/:id", async (req:any, res:any) => {
    try {
      const products = await Product.findByIdAndDelete(req.params.id);
  
      if (!products) throw Error("No product found!");
      res.status(200).json({ success: true });
  
      console.log(`Product id:${req.params.id} deleted from database!`);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });
  
//Usuwanie wszystkich produktów

router.delete("/", async (req:any, res:any) => {
  try {
    const products = await Product.remove();

    if (!products) throw Error("No product found!");
    res.status(200).json({ success: true });

    console.log(`All products deleted from database!`);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// Update produktu po ID

router.put("/:id", async (req:any, res:any) => {
    try {
      const products = await Product.findByIdAndUpdate(
        req.params.id,
        req.body
      );
  
      if (!products)
        throw Error("Something went wrong updating the product!");
      res.status(200).json(req.body);
  
      console.log(`Product id:${req.params.id} updated!`);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

module.exports = router;
