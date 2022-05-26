const express = require("express");
const { resourceUsage } = require("process");
const router = express.Router();

const Employee = require("../models/Employee");

//Wyswietlenie listy pracownikow

router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Wyswietlenie konkretnego pracownika

router.get("/:id", async (req, res) => {
    try {
      const employees = await Employee.findById(req.params.id);
  
      if (!employees) throw Error("No employee found!");
      res.status(200).json(employees);
  
      console.log(`Employee id:${req.params.id} returned from database!`);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

//Dodawanie pracownika do bazy danych

router.post("/", async (req, res) => {
  const newEmployee = new Employee({
    imie: req.body.imie,
    nazwisko: req.body.nazwisko
  });
  const saveEmployee = await newEmployee.save();

  try {
    res.status(200).json(saveEmployee);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//Usuwanie pracownika po ID

router.delete("/:id", async (req, res) => {
    try {
      const employees = await Employee.findByIdAndDelete(req.params.id);
  
      if (!employees) throw Error("No employee found!");
      res.status(200).json({ success: true });
  
      console.log(`Employee id:${req.params.id} deleted from database!`);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

// Update pracownika po ID

router.put("/:id", async (req, res) => {
    try {
      const employees = await Employee.findByIdAndUpdate(
        req.params.id,
        req.body
      );
  
      if (!employees)
        throw Error("Something went wrong updating the employee!");
      res.status(200).json(req.body);
  
      console.log(`Employee id:${req.params.id} updated!`);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });

module.exports = router;
