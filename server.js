const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { List } = require('./model');

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

const PORT = process.env.PORT || 3001;

app.get('/api/items', async (req, res) => {
  try {
    const listItems = await List.find({});
    res.status(200).json({ listItems });
  } catch (error) {
    res.status(422).json(error);
  }
});

app.put('/api/items/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { checked, title } = req.body;
    // items[parseInt(id) - 1] = item;
    const item = items.find(i => i.id == id);
    item.
      res.status(200).json({ item });
  } catch (error) {
    res.status(422).json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Express intro running on localhost:${PORT}`);
});