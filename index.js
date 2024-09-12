const express = require('express');
const app = express();
const cors = require("cors");
const port = 5001;
const path = require("path");


app.use(express.json());
app.use(cors());

//ROUTES
app.get('/', (req, res) => {
    res.send('API works success')
});

//Get List events
const eventsCalendar = require('./events');

app.get('/event-list', (req, res) => {
    res.send(eventsCalendar)
});

app.use('/photos', express.static(path.join(__dirname, 'images-events')));

app.listen(port, () => {
    console.log(`Server run in http://locahost:${port}`);
})



