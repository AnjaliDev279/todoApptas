const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/tasks");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
const pool = require("./db");
// const express = require('express');
// const cors = require('cors');
// const taskRoutes = require('./routes/tasks');

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use('/api/tasks', taskRoutes);

// module.exports = app;


//commented code only used for unit tests and integration tests