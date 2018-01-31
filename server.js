const express = require('express');
const app = express();
// const angular = require('angular');
// const angularRoute = require('angular-route');
// const jquery = require('jquery');

app.use(express.static('public'));

const PORT = process.env.PORT || 3005;
const server = app.listen(PORT, () => {
  console.log("==========================================");
  console.log("     Portfolio running on Port: ", PORT);
  console.log("==========================================");
})
