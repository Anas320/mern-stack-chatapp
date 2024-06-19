require("module-alias/register");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { app, server } = require("./src/app/socket/index");

require("dotenv").config();

app.use(cors());

app.use(bodyParser.json());

require("./src/utils/route.utils")(app);

app.get("/", (req, res) => {
  res.send("Server is running ");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Export the io object for use in the controllers
// console.log(" io : ", io);
