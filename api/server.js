const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ItemSchema =require('./ItemSchema.js');

const port = 5000;
const mongoDB = 'mongodb://127.0.0.1/my_database';

mongoose.connect(mongoDB, { 
useUnifiedTopology: true,
useNewUrlParser: true
 });

const ItemModel = mongoose.model('ItemModel', ItemSchema());

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/create', (req, res) => {
    const newItem = new ItemModel(req.body);
    newItem.save(err => {
        console.log('CREATEDDDDDDDDDDDDDDDDDDDDDD');
        console.log('CREATEDDDDDDDDDDDDDDDDDDDDDD');
        console.log('CREATEDDDDDDDDDDDDDDDDDDDDDD');
        console.log('CREATEDDDDDDDDDDDDDDDDDDDDDD');
        console.log('CREATEDDDDDDDDDDDDDDDDDDDDDD');
        console.log('CREATEDDDDDDDDDDDDDDDDDDDDDD');
        
        return err ? res.status(400).send(err) : res.sendStatus(201);
    });
});

app.delete('/delete/:id', (req, res) => {
    ItemModel.findByIdAndDelete(req.params.id, (err, deletedItem) => {        
        return !deletedItem ? res.sendStatus(404) : res.sendStatus(200);
    });    
});

app.get('/', (req, res) => {
    ItemModel.find({},(err, items)=> {
        return err ? res.send(err) : res.send(items);
    });    
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));