const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const port = 3000;

//Enable cors
app.use(cors());

//Body parser
app.use(express.json());

//Route the customer API
const customerRoutes = require('./routes/customers');

//Use the route
app.use('/api/customers', customerRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to Customers API');
});


main().catch(error => {console.error(error)});

async function main() {
    const connectionString = 'mongodb+srv://admin:admin%40123@cluster0.ycfxg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    await mongoose.connect(connectionString);
    mongoose.set('strictQuery', true);
}

module.exports = app;