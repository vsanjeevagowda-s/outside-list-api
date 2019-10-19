const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const items = require('./items');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

const PORT = process.env.PORT || 3001

app.get('/api/items', (req, res) => {
  res.status(200).json({items});
});

app.put('/api/items/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { item } = req.body;
    items[parseInt(id) - 1] = item;
    res.status(200).json({ items });
  } catch (error) {
    res.status(422).json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Express intro running on localhost:${PORT}`);
});