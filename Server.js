const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 2000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

const MONGODB_URI = 'mongodb+srv://nsirullahportfolio:nsirullahportfolio@nasirullahahmadiwebsite.vxzpycs.mongodb.net/NacodeWebsiteDatabase?retryWrites=true&w=majority'

// Connect to MongoDB
mongoose.connect(MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Routes
const MenuList = require('./routes/Service Route');

app.use('/services-list', MenuList);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Running`);

});
