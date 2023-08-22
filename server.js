const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const PORT = 8000;
require('dotenv').config();

let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = 'toDos';

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
  .then(client => {
    console.log(`Connected to ${dbName} Database`);
    db = client.db(dbName);
  })
  .catch(err => console.error(err));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.post('/todos', (req, res) => {
  console.log(req.body.todo);
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}.`);
});
