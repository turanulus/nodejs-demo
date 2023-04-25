const express = require("express");
const app = express();
const apiRoutes = require("./routes/api");
const port = process.env.PORT || 3000;

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://localhost:27017/your-db-name";

MongoClient.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) throw err;
    console.log("Connected");
  }
);
