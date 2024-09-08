const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')


dotenv.config();

const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hilo!');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})