const express = require('express');
const app = express();

app.use(express.static('public'));

const PORT = 3005;
const server = app.listen(PORT, () => {
  console.log("==========================================");
  console.log("     Portfolio running on Port: ", PORT);
  console.log("==========================================");
})
