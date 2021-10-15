const express = require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config();
const router = require("./routes/UserRoutes");
const app = express();
app.use(express.json());
const port = 5000;
connectDB();
app.use("/users", router);
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port port!`));