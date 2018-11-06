const express = require("express");

const routes = express.Router();

const TweetController = require("./controllers/TweetController");
const LikesController = require("./controllers/LikesController");

routes.get('/tweets',TweetController.index);
routes.post('/tweets',TweetController.store);

routes.post('/likes/:id',LikesController.store);

// routes.get("/",(req,res) => {
//     return res.send("Hello World");
// });

module.exports = routes;