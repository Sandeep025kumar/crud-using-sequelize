const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
var corsOptions = {
    origin: "http://localhost:8081"
  };

const router = require('./app/routes/tutorial.routes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
const db = require('./app/models');


app.get("/", (req, res) => {
    res.json({ message: "Welcome to node js application." });
  });
app.use('/api',router) 

app.listen(PORT,()=>{
    console.log("server is running on port:",PORT);
})