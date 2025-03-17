const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// GET: list
router.get('/', async(req, res) => {
    try{
        const customers = await Customer.find();
        res.status(200).json(customers);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

// GET: by id
router.get('/:id', async(req, res) => {
    try{
        const customer = await Customer.findById(req.params.id);
        res.status(200).json(customer);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
});

// POST: create
router.post('/', async(req, res) => {
    const customer = new Customer({
        date: req.body.date,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
    });
    try{
        const newCustomer = await customer.save();
        res.status(201).json(newCustomer);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
});

// PUT: update
router.put('/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const customer = req.body;
        const updatedCustomer = await Customer.findOneAndUpdate(
            {
                _id: id
            },
            {
                $set: customer
            },
            {
                new: true
            }
        );
        res.status(200).json(updatedCustomer);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

// DELETE: by id
router.delete('/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const customer = await Customer.findByIdAndDelete(id);
        res.status(200).json(customer);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
});

module.exports = router;