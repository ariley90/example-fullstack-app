const mongoose = require('mongoose');

function ItemSchema() {
    return new mongoose.Schema({
        product_name: String,
        category: String,
        size: Number,
        colour: String,
        status: {
          type: String,
          enum: ['READY_TO_TRY', 'ON_THE_WAY', 'IN_QUEUE','OUT_OF_STOCK']
        },
        customer_initials: String
    });
};

module.exports =ItemSchema;