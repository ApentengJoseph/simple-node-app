const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/dogs', async (req, res) => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random/27');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch dog images' });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
