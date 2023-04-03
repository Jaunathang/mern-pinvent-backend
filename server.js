const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// TODO Add variable to .env
const SERVER_PORT = process.env.SERVER_PORT;

const startServer = async () => {
    /**
     * We want to make sure that the DB is connected before starting the server. Otherwiser, we risk sending
     * queries to MongoDB before it's ready.
     */

    try {
        dbConnection = await mongoose.connect(process.env.MONGO_URI);
        console.info(`MongoDB connected: ${dbConnection.connection.host}`);
        app.listen(SERVER_PORT, () => {
            console.info(`Server running on port ${SERVER_PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
}

startServer();