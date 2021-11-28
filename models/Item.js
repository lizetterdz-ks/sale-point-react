const { model, Schema } = require('mongoose');

const itemSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    timesSold: { type: Number, required: true },
});

const Item = model('Items', itemSchema);
module.exports = Item;
