const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Todo = require("./models/todo.js");
const todoRoutes = require('./routes/todo.js');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api', todoRoutes)
//connect mongodb
mongoose.connect(process.env.MONGO_URL).then(() => console.log("connected to mongodb")).catch(err => console.log(err.message));
const port = process.env.PORT || 8000;
app.listen(port, () => { console.log("server is connected") });
