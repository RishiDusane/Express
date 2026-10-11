const express = require('express');
const app = express();

// Custom Middleware
function userMiddleware(req, res, next) {
    req.user = "Guest";
    next();
}

// Route with Middleware
app.get('/welcome', userMiddleware, (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});