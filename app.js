const express = require('express')
const app = express();
const router = express.Router();

const path = __dirname + '/views/'
const port = 8080;

app.get('/', (req, res) => { res.send('Hello World!') })

app.listen(port, () => {
    console.log("App listening on port ", port)
})
