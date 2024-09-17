const express = require('express')
const app = express();
const userRouter = require('./src/routes/user.route')
const bodyParser = require('body-parser')

require('dotenv').config();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hilo!');
})

app.use('/v1',userRouter);

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})