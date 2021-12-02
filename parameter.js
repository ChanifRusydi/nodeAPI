const express = require('express');
const app = express();
const port = 3000;


app.get('/firstnumber/:number1/secondnumber/:number2', (req, res) => {
    res.send(req.params);
});

app.get('/:number1/:number2', (req, res) => {
    res.send(req.params);
});

app.get('/firstnumber/:number1/secondnumber/:number2/thirdnumber/:number3/fourthnumber/:number4', (req, res) => {
    result=parseInt(req.params.number1)+parseInt(req.params.number2);
    res.json({"data":req.params,"result":result});
}