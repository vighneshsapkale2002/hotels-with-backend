const mongoose = require('mongoose');

// Define The Mongodb Connection URL.
const mongoURL = 'mongodb://localhost:27017/hotels' //Replace 'hotels' with your Database name .

// Setup Mongodb Connection.

// This Is 10 and 11 number line most importent beacuse daily update mongodb version all time during database connection write this 2 line
mongoose.connect(mongoURL, {
    // useNewUrlParser: true, // This Line All Time During Database Connection is mandatory .
    // useUnifiedTopology: true // This Line All Time During Database Connection is mandatory .
})

const db = mongoose.connection;

// Define Event listeners for Database Connection. 

db.on('connected', () => {
    console.log("Connected To Mongo DB Server");
});

db.on('error', (err) => {
    console.error("Mongo DB Connection Error:", err);
});

db.on('disconnected', () => {
    console.log("Mongo DB Disconncted");
});

// Export The Database Connection

module.exports = db;
