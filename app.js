const express = require('express')
const app = express();
const router = express.Router();
const path = require('path')
const port = 8080;
const morgan = require('morgan')

app.use(morgan('tiny'))
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, '/public/static/index.html')) 
})

app.listen(port, () => {
    console.log("App listening on port ", port)
})
