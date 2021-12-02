const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('This is HTTP method GET'));
app.get('/firstnumber/:number1/secondnumber/:number2', (req, res) => {
    res.send(req.params);
});

app.get('/:number1/:number2', (req, res) => {
    res.send(req.params);
});

app.get('/sum/firstnumber/:number1/secondnumber/:number2', (req, res) => {
    result=parseInt(req.params.number1)+parseInt(req.params.number2);
    res.json({"data":req.params,"result":result});
});

app.get('/substract/:number1/:number2', (req, res) => {
    result=parseInt(req.params.number1)-parseInt(req.params.number2);
    res.json({"data":req.params,"result":result});
});

app.get('/divide/:number/:number2', (req, res) => {  //number2 is optional
    result=parseInt(req.params.number1)/parseInt(req.params.number2);
    res.json({"data":req.params,"result":result});
});
app.get('/multiply/:number1/:number2', (req, res) => {
    result=parseInt(req.params.number1)*parseInt(req.params.number2);
    res.json({"data":req.params,"result":result});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));