const express = require("express");
const app = express();

// load config from env file
require("dotenv").config(); 
const PORT = process.env.PORT || 4000;

// middlerware to parse json request body
app.use(express.json());

// import routes for TODO API
const todoRoutes = require("./routes/todos");

// mount or add after this line '/api/v1/' in the todo API routes
app.use("/api/v1",todoRoutes);

// start server
app.listen(PORT, ()=> {
    console.log(`server started successfully at ${PORT}`);
})


// connect to the database
const dbConnect = require("./config/database");
dbConnect();


// default Routes
app.get("/", (req,res) => {
    res.send(`<h1> This is HomePage Gays </h1>`);
} )

