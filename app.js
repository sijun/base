const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.end('hello');
});

app.listen(process.env.PORT || 8080);