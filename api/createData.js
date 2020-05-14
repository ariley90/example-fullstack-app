const mongoose = require('mongoose');
const ItemSchema =require('./ItemSchema.js');

const mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { 
  useUnifiedTopology: true,
  useNewUrlParser: true
   });

const ItemModel = mongoose.model('ItemModel', ItemSchema());

const data = require('./mockData.json');

ItemModel.insertMany(data).then(()=> process.exit(0));