const express = require('express');
const privatePackage = require('@RutvikChandla/my-github-package');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`Hello from Cypress test app! Private package says: ${privatePackage.greet("rutvik")}`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});