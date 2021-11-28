const { model, Schema } = require('mongoose');

const saleSchema = new Schema({
    products: { type: Object, required: true },
    total: { type: Number, required: true },
    date: { type: String, required: true},
    status: { type: String, required: true},
});

const Sale = model('Sales', saleSchema);
module.exports = Sale;
