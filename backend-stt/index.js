const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

// const MongoClient = require('mongodb').MongoClient
const { MongoClient } = require("mongodb")
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/test'

const client = new MongoClient(mongoUrl)
const database = client.db('rick_and_morty')
const comments = database.collection('comments')

app.use(express.json())
app.use(cors())


app.get('/', async (req, res) => {
  const comment = await comments.findOne({});
  res.json('Hola amigo');
});


app.get('/characters/:id/comments', async (req, res) => {
  const characterId = req.params.id
  const comment = await comments.find({characterId});
  res.json(await comment.toArray());
});

app.post('/characters/:id/comments', async (req, res) => {
  const characterId = req.params.id
  const createdAt = new Date().toISOString()
  user = req.body.user || "Anonymous"
  console.log(req.body);
  // console.log(await comments.insertOne({...req.body, user, characterId, createdAt}));
  res.send(await comments.insertOne({...req.body, user, characterId, createdAt}));
});

app.listen(port, () => console.log(`Server listening on port ${port}!`))