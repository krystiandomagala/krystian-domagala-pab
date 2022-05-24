const express = require('express');
const router = express.Router();

const Restaurant = require('../models/Restaurant');
  
router.get('/', function (req, res) {  
    res.send('Restauracja')  
})   

//POST

router.post('/', async (req,res) => {
    const newRestaurant = new Restaurant(req.body)

    try{
        const restaurant = await newRestaurant.save()
        if(!restaurant) throw Error("Something went wrong")

        res.status(200).json(restaurant);
    }catch(err){
        res.status(400).json({message: err})
    }
})

module.exports = router;