const express = require('express');
const { resourceUsage } = require('process');
const router = express.Router();

const Restaurant = require('../models/Restaurant');
  
router.get('/', function (req, res) {  
    res.send('Restauracja')  
})   

//POST

router.post('/', async (req,res) => {
    const newRestaurant = new Restaurant({
        nazwa: req.body.nazwa,
        adres: req.body.adres,
        telefon: req.body.telefon,
        NIP: req.body.NIP,
        email: req.body.email,
        www: req.body.www
    })
    const saveRestaurant = await newRestaurant.save()

    try{
        res.status(200).json(saveRestaurant)
    }catch(error)
    {
        res.status(400).json({message: error})
    }
})

module.exports = router;