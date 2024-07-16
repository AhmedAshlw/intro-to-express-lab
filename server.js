const express = require('express');

const app = express()


app.listen(3000, () => {
    console.log('Listening on port 3000')
  })

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/greetings/:name', (req, res) => {
    res.send(`<h1>Hello there, ${req.params.name} !</h1>`);
  });


app.get('/roll/:numpara', (req, res) => {
    if(isNaN(req.params.numpara)){
        res.send("You must specify a number.")
    } else {
        res.send(`<h1>Roll Number ${req.params.numpara}</h1>`);    }
});

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectible/:numInArray', (req, res) => {
    const name = collectibles[req.params.numInArray].name
    const price = collectibles[req.params.numInArray].price
    for(let i=0; i < collectibles.length; i++){
    if(collectibles.indexOf(req.params.numInArray) ){
        res.send(`So, you want the ${name}? For ${price}, it can be yours!`)
    } else {
        res.send("This item is not yet in stock. Check back soon!");   
    }
  }
});

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


app.get('/shoes', (req, res) => {
  const minPrice = req.query
  const maxPrice = req.query
  const type = req.query

  let arr = shoes
  if(minPrice){
    arr = arr.filter((shoe)=> shoe.price >= minPrice)
  }
  if(maxPrice){
    arr = arr.filter((shoe)=> shoe.price <= maxPrice)
  }
  if(type){
    arr = arr.filter((shoe)=> shoe.type === type)
  }
  res.send(arr);
});

//I wrote the code ,but still not viewing in browser ..