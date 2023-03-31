const express = require('express');
const app = express();

const path = require(`path`);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send(`<a href="/form">form</a>`).end();
});

app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/form.html'));
});

app.post('/submit', (req, res) => {
  const {name ,message} = req.body;
  res.send(`
    Thanks for your message! <br/>
    name: ${name} <br/>
    message: ${message} <br/>
  `);
});

const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});

module.exports = app;
