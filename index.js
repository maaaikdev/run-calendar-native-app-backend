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

app.get('/events', (req, res) => {
    res.send(eventsCalendar)
});

// Get specific event by ID
app.get('/events/:id', (req, res) => {
    const eventId = req.params.id;
    const event = eventsCalendar.find(e => e.id === parseInt(eventId));
    
    if (event) {
        res.send(event);
    } else {
        res.status(404).send({ error: 'Event not found' });
    }
});

app.use('/images-events', express.static(path.join(__dirname, 'images-events')));

app.listen(port, () => {
    console.log(`Server run in http://locahost:${port}`);
})



