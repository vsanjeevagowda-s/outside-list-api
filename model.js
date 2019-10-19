const mongoose = require('mongoose');
const { Schema } = mongoose;

require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.Promise = global.Promise;
mongoose.connect(`${DATABASE_URL}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;

db.on('connected', () => {
  console.log(`Mongoose connected`);
});

const listSchema = new Schema({
  title: { type: String, required: true },
  checked: { type: Boolean, default: false },
  created_date: { type: Date, default: Date.now }
});

listSchema.set('toJSON', { virtuals: true });
const List = mongoose.model('List', listSchema);

module.exports = {
  List
}
