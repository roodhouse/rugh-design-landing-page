const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
recordRoutes.route("/record").get(async function (req, res) {
  let db_connect = dbo.getDb("blog");
  db_connect
    .collection("wpblog")
    .find({})
    .toArray()
    .then((data) => {
      res.json(data);
    });
});

// This section will help you get a list of all the tags.
recordRoutes.route("/tags").get(async function (req, res) {
  let db_connect = dbo.getDb("blog");
  db_connect
    .collection("tags")
    .find({})
    .toArray()
    .then((data) => {
      res.json(data);
    });
});

// This section will help you get a single record by id <--- old section that retreives by _id
// recordRoutes.route("/record/:id").get(function (req, res) {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId( req.params.id )};
//   db_connect
//       .collection("wpblog")
//       .findOne(myquery, function (err, result) {
//         if (err) throw err;
//         res.json(result);
//         console.log(result.slug)
//         console.log(req.params.id)
//       });
// });

// This section will help you get a single record by slug
recordRoutes.route("/record/:slug").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { slug: req.params.slug};
  db_connect
      .collection("wpblog")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    title: req.body.title,
    content: req.body.content,
    excerpt: req.body.excerpt,
    author: req.body.author,
    image: req.body.image,
  };
  db_connect.collection("wpblog").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you create a subscription.
recordRoutes.route("/record/sub").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  };
  db_connect.collection("subscribers").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      title: req.body.title,
      content: req.body.content,
      excerpt: req.body.excerpt,
      author: req.body.author,
      image: req.body.image,
    },
  };
  db_connect
    .collection("wpblog")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("wpblog").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;
