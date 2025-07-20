const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoutes = require('./routes/auth.route'); 

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Our app is running');
});

app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
        console.error('MongoDB connection error');
    });

