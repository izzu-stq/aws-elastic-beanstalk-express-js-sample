const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello this is a test for git repo AWS!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
