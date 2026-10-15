const express = require('express');

const app = express();

const routes = require('./routes/routes');

app.use((req, res, next) => {
console.log(`${req.method} request made to ${req.url}`);
next();
});

app.use('/', routes);

app.listen(4000, () => {
console.log('Server is running on port 4000');
});
