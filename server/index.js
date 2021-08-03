require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express();
const knex = require("knex")(require("../knexfile"));
const port = process.env.PORT || 3000

// setup
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, "../dist")))


// routes
app.get("/api/test", (req, res) => {
    res.send("Hello from API")
});


// knex
(async () => {
  console.log("Running migrations");
  await knex.migrate.latest();

  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  }); 
})();