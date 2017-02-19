var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3001, () => {
    console.log('Server is starting on port 3001');
});
