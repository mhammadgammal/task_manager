const express = require('express');
const Cors = require('cors');
const tasksRoute = require('./routes/tasksRoute');
const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');
const notFoundMiddleware = require('./middleware/notFoundMiddleware');
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

app.use(notFoundMiddleware); // Middleware for handling 404 errors
app.use(errorHandlerMiddleware)
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});