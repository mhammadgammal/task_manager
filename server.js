const express = require('express');
const Cors = require('cors');
const tasksRoute = require('./routes/tasksRoute');
// connect to db
require('./config/db.config');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(Cors('*'))
app.use(express.static('public')); // Serve static files from the 'public' directory
app.use(
    '/api/v1/tasks',
    tasksRoute
)

app.get('/', (req, res) => {
    res.send('public/index.html');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});