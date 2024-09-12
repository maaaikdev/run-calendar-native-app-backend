const express = require('express');
const app = express();
const port = 5001;


app.use(express.json());

//ROUTES
app.get('/', (req, res) => {
    res.send('API works success')
});

//Get List events
const eventsCalendar = require('./events');

app.get('/event-list', (req, res) => {
    res.send(eventsCalendar)
})

app.listen(port, () => {
    console.log(`Server run in http://locahost:${port}`);
})



