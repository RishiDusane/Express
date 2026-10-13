
const express = require('express');

const app = express();

app.use(express.json());

let users = [];

app.get('/products', (req, res) => {
    res.send('Here is the list of all products.');
});

app.post('/products', (req, res) => {
    res.send('A new product has been added.');
});

app.get('/categories', (req, res) => {
    res.send('Here is the list of all categories.');
});

app.post('/categories', (req, res) => {
    res.send('A new category has been created.');
});

app.get('/welcome/:username', (req, res) => {
    const username = req.params.username;
    const role = req.query.role;

    res.send(`Welcome ${username}, your role is ${role}`);
});

app.post('/users', (req, res) => {
    const user = req.body;

    users.push(user);

    res.status(201).send('User created successfully!');
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
