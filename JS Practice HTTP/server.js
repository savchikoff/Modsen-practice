const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const API_URL = 'https://api.openweathermap.org/data/2.5/onecall';
const LATITUDE = 33.44;
const LONGITUDE = -94.045;
const API_KEY = 'bd5e378503939ddaee76f12ad7a97608';

const getWeatherData = async () => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                lat: LATITUDE,
                lon: LONGITUDE,
                exclude: 'hourly,daily',
                appid: API_KEY
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching weather data');
    }
};

app.get('/1xx', async (req, res) => {
    try {
        const weatherData = await getWeatherData();
        res.status(101).json({ message: '101 Switching Protocols', weatherData });
    } catch (error) {
        res.status(500).send('500 Internal Server Error');
    }
});

app.get('/3xx', async (req, res) => {
    try {
        const weatherData = await getWeatherData();
        res.redirect(301, 'https://example.com');
    } catch (error) {
        res.status(500).send('500 Internal Server Error');
    }
});

app.get('/5xx', async (req, res) => {
    try {
        await getWeatherData();
        res.status(500).send('500 Internal Server Error');
    } catch (error) {
        res.status(500).send('500 Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
