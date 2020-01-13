// implement your API here
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json('We\'re live and rocking it (o_o)');
})

app.listen(5100, () => {
    console.log('listening on port 5100');
});