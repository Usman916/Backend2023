//inport express
const express = require('express');
//inport roter
const router = require("./routes/api.js")
// mrmbuat object express
const app = express();
//menggunakan middelware
app.use(express.json());
app.use(express.urlencoded());

//menggunakan routing ruuter
app.use(router);

app.listen(3000);