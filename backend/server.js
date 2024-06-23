const express = require("express");
const app = express();
require("dotenv").config();
const { MongoClient } = require("mongodb");
const port = process.env.PORT || 5000;

app.use(express.json());

MongoClient.connect(process.env.DB_URL)
  .then(client => {
    const nextskilldb = client.db("nextskilldb");
    const usercollection = nextskilldb.collection("usercollection");
    const productcollection = nextskilldb.collection("productcollection");
    const othercollection = nextskilldb.collection("othercollection");
    const admincollection = nextskilldb.collection("admincollection");
    const customercollection=nextskilldb.collection("customercollection");

    app.set('usercollection', usercollection);
    app.set('productcollection', productcollection);
    app.set('othercollection', othercollection);
    app.set('customercollection', customercollection);
    app.set('admincollection', admincollection);
    console.log("Connected to database");
  })
  .catch(err => {
    console.log("Failed to connect to database", err);
  });

//const userApp = require("./api/userapi");
const otherApp = require("./api/otherapi");
//const productApp = require("./api/productapi");

const adminApp = require("./api/adminapi");


//app.use("/userapi", userApp);
app.use("/adminapi", adminApp);

app.use("/otherapi", otherApp);
//app.use("/productapi", productApp);


app.use((err, req, res, next) => {
  res.status(500).send({ message: "Error", payload: err.message });
});

app.listen(port, () => {
  console.log('Web server running on port', port);
});