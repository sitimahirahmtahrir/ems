const mongoose = require('mongoose');
const express = require('express');
const app = express();
const eventRoutes = require('./routes/eventRoutes');

const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb+srv://sitimahirahmtahrir:<password>@ems.6wm7vqj.mongodb.net/?retryWrites=true&w=majority&appName=EMS';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.use('/api/events', eventRoutes);

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });