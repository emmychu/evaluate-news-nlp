const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const fetch = require("node-fetch");
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const sentimentalAPI = require('./sentimentalAPI')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

var textapi = {
    apiKey: process.env.API_KEY
};

app.post('/submission', getURL);
function getURL(request, response){
    sentimentalAPI(textapi["apiKey"],request.body)
    .then((data) =>{
        response.send(data)
    })
}

