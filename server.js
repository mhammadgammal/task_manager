const express = require('express');
const tasksRoute = require('./routes/tasksRoute');
// connect to db
require('./config/db.config');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.use(
    '/api/v1/tasks',
    tasksRoute
)

app.get('/', (req, res) => {
    res.send('Welcome to the Task API');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});