const express = require("express");
const app = express();
const port = 3000;

const connectDB = require("./db/db");

try {
  connectDB();
} catch (error) {
  console.log("Something went wrong with DB");
}
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log(`Listening on port ${port}`);
});
