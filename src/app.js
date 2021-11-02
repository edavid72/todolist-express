const express = require('express');
const errorHandler = require('./middlewares/error.middleware');
const tasksRoutes = require('./routes/tasks.routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(tasksRoutes);

//middleware para el manejo de errores
app.use(errorHandler);

module.exports = app;
