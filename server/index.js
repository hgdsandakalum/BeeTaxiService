const express = require('express')
require('dotenv').config()

const app = express();

app.get('/', (req, res) => (
    res.send('Hello World 2!')
))

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server started on port $(PORT)`));