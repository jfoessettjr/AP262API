const express = require('express');
const app = express();

app.use(express.json());

// Array for beers database
const beers = [{
    id: 1,
    beer: 'Amber'
},
{
    id: 2,
    beer: 'Bock'
},
{
    id: 3,
    beer: 'Brown Ale'
},
{
    id: 4,
    beer: 'Cream Ale'
},
{
    id: 5,
    beer: 'Dunkel'
},
{
    id: 6,
    beer: 'Gose'
},
{
    id: 7,
    beer: 'Kolsch'
},
{
    id: 8,
    beer: 'Porter'
},
{
    id: 9,
    beer: 'Stout'
},
{
    id: 10,
    beer: 'Sour'
}];

// Get all beers
app.get('/api/beers', (req, res)=> {
    res.send(beers);
});

// Post
app.post('/api/beers', (req,res)=> {
    const mybeer = {
        id: beers.length + 1,
        beer: req.body.beer
    }

    beers.push(mybeer);
    res.send(mybeer);
})

// Put
app.put('/api/beers/:id', (req, res)=> {
    const mybeer = beers.find(t => t.id === parseInt(req.params.id));
    if (!mybeer) return res.status(404).send('The beer with the ID was not found');

    mybeer.beer = req.body.beer;
    res.send(mybeer);
})

// Delete
app.delete('/api/beers/:id', (req, res)=> {
    const mybeer = beers.find(t => t.id === parseInt(req.params.id));
    if (!mybeer) return res.status(404).send('The beer with the ID was not found');

    const index = beers.indexOf(mybeer);
    beers.splice(index, 1);
    res.send(mybeer);
});


// Configuration
const port = process.env.port || 6006;
app.listen(port,()=> console.log('Listening on port ${port}'));