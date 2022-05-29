import express from "express";
const router = express.Router();

const Table = require("../models/Table");

//Wyswietlanie listy wszystkich stolikow

router.get("/", async (req:any, res:any) => {
  try {
    const tables = await Table.find();
    res.json(tables);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Wyswietlenie konkretnego stolika

router.get("/:id", async (req:any, res:any) => {
  try {
    const table = await Table.findById(req.params.id);

    if (!table) throw Error("No table found!");
    res.status(200).json(table);

    console.log(`Table id:${req.params.id} returned from database!`);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Dodawanie stolikow do bazy danych

router.post("/", async (req:any, res:any) => {
  const newTable = new Table({
    nazwa: req.body.nazwa,
    iloscOsob: req.body.iloscOsob,
    status: req.body.status,
  });
  const saveTable = await newTable.save();

  try {
    res.status(200).json(saveTable);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Usuwanie stolika po ID

router.delete("/:id", async (req:any, res:any) => {
  try {
    const table = await Table.findByIdAndDelete(req.params.id);

    if (!table) throw Error("No table found!");
    res.status(200).json({ success: true });

    console.log(`Table id:${req.params.id} deleted from database!`);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Usuwanie wszystkich stolików

router.delete("/", async (req:any, res:any) => {
  try {
    const table = await Table.remove();

    if (!table) throw Error("No table found!");
    res.status(200).json({ success: true });

    console.log(`All tables deleted from database!`);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// Update stolika po ID

router.put("/:id", async (req:any, res:any) => {
    try {
      const table = await Table.findByIdAndUpdate(
        req.params.id,
        req.body
      );
  
      if (!table)
        throw Error("Something went wrong updating the table!");
      res.status(200).json(req.body);
  
      console.log(`Table id:${req.params.id} updated!`);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

module.exports = router;
