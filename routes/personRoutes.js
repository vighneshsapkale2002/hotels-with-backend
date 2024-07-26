const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');


// This is a post method in mongoose post means send the data to the server. 

router.post('/', async (req, res) => {

    try {
        const data = req.body

        // Create a new person document using the mongoose model.
        const newPerson = new Person(data);

        // This Is Secound Way To Declear Data In Mongoose easy and simple method .

        // Save The new person to the database
        const response = await newPerson.save();
        console.log('Data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
})



// This Is Get Method In Mongoose and get means read the data.
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('Data Fetched');
        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });

    }
})


router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'waiter' || workType == 'manager') {
            const response = await Person.find({ work: workType });
            console.log('response featched');
            res.status(200).json(response);

        } else {
            res.status(404).json({ error: 'Invalid Work type' });

        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });

    }
})

// This is the put method upadate the data to use this code. 
router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // Extract The id form the url paramater.
        const updatePersonData = req.body; // Update Data for the person.

        const response = await Person.findByIdAndUpdate(personId, updatePersonData, {
            new: true, // Return The Update Document.
            runValidators: true, // Run Mongoose Validation.

        })
        if (!response) {
            return res.status(404).json({ error: 'Person not Found' });
        }

        console.log('Data Updated');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });

    }
})

// This is delete method use to delete the data from database to use this command.

router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;

        const response = await Person.findByIdAndDelete(personId);

        if (!response) {
            return res.status(404).json({ error: 'Person not Found' });
        }


        console.log('Data Deleted');
        res.status(200).json({ message: 'Person Data Deleted Successfully.' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });

    }


})


module.exports = router;