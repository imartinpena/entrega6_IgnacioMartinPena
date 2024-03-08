const express = require('express');
const fs = require('fs');
const { XMLParser } = require('fast-xml-parser');
const app = express();

app.use(express.static('public'));

app.get('/libros', (req, res) => {
    const xmlData = fs.readFileSync('public/libros.xml', 'utf-8');
    const parser = new XMLParser();
    const jsonObj = parser.parse(xmlData);
    res.json(jsonObj);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
