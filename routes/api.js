const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://localhost:27017/your-db-name";

router.get("/items", (req, res) => {
  MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      if (err) throw err;
      const collection = client.db("your-db-name").collection("items");
      collection.find({}).toArray((err, items) => {
        if (err) throw err;
        res.json(items);
        client.close();
      });
    }
  );
});

// Add more API routes here as needed

module.exports = router;
