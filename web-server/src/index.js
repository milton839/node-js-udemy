const path = require('path');
const express = require('express');
const port = 5000;

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname,'../public'));

const app = express();

// Define paths for express configuration
const publicDirectory = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates')

// Setup handlebars engine and views locations
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectory))//for middleware connections

app.get('/', (req, res)=>{
    res.render('index',{
        title:'Weather app',
        name:'Azizul Milton'
    })
})

app.get('/about', (req, res)=>{
    res.render('about',{
        title:'About Me',
        name:'Azizul Islam Milton'
    })
})

app.get('/help', (req, res)=>{
    res.render('help',{
        title:'About Me',
        name:'Azizul Islam Milton'
    })
})
app.get('/weather', (req, res) => {
    res.send("weather page");
})

app.listen(port, (req, res) => {
    console.log("Server listening on port", port);
})