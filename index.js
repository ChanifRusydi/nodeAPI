const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('This is HTTP method GET'));
app.post('/', (req, res) => res.send('This is HTTP method POST'));
app.put('/', (req, res) => res.send('This is HTTP method PUT'));
app.delete('/', (req, res) => res.send('This is HTTP method DELETE'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
