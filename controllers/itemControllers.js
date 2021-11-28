const {Item} = require('../models');
const {Sale} = require('../models');

const getAll = (req, res) => {
  async function getItems() {
    try {
      const items = await Item.find({});
      if(items.length === 0) {
        return res.status(200).send("There are no items yet");
      }
      return res.status(200).json(items);
    } catch (error) {
      return res.status(500).json({message: 'Error getting items'});
    }
  } 
  getItems();
}

const getById = (req, res) => {
  const { id } = req.params;
  async function getItemById() {
    try {
      const item = await Item.findById(id);
      if (item === null) {
        return res.status(404).send("There's no match for that ID")
      }
      return res.status(200).json(item);
    } catch (error) {
      return res.status(500).json({message: 'Error getting item'});
    }
  } 
  getItemById();
}

const postItem = (req, res) => {
  const { name, price, stock, timesSold } = req.body
  async function addItem() {
    try {
      const item = await Item.create({name, price, stock, timesSold});
      return res.status(200).json(item);
    } catch (error) {
      return res.status(500).json({message: 'Error creating item'});
    }
  }
  addItem();
}

const removeItem = (req, res) => {
  const { id } = req.params;
  async function deleteItem() {
    try {
      const item = await Item.findByIdAndDelete(id);
      if (item === null) {
        return res.status(404).send("There's no match for that ID")
      }
      return res.status(204).json(item);
    } catch (error) {
      return res.status(500).json({message: 'Error deleting item'});
    }
  }
  deleteItem()
}

const putItem = (req, res) => {
  const { id } = req.params;
  const { name, price, stock, timesSold } = req.body;
  async function updateItem() {
    try {
      const item = await Item.findByIdAndUpdate(
          id,
          { name, price, stock, timesSold }
      );
      if (item === null) {
        return res.status(404).send("There's no match for that ID")
      }
      return res.status(200).json(item);
    } catch (error) {
      return res.status(500).json({message: 'Error updating item'});
    }
  }
  updateItem();
}

const getAllSales = (req, res) => {
  async function getSales() {
    try {
      const sales = await Sale.find({});
      if(sales.length === 0) {
        return res.status(200).send("There are no sales yet");
      }
      return res.status(200).json(sales);
    } catch (error) {
      return res.status(500).json({message: 'Error getting sales'});
    }
  } 
  getSales();
}

const postSale = (req, res) => {
  const { products, total, date, status } = req.body
  async function addSale() {
    try {
      const sale = await Sale.create({products, total, date, status});
      return res.status(200).json(sale);
    } catch (error) {
      return res.status(500).json({message: 'Error creating sale'});
    }
  }
  addSale();
}

const putSale = (req, res) => {
  const { id } = req.params;
  const { products, total, date, status } = req.body;
  async function updateSale() {
    try {
      const sale = await Sale.findByIdAndUpdate(
          id,
          { products, total, date, status }
      );
      if (sale === null) {
        return res.status(404).send("There's no match for that ID")
      }
      return res.status(200).json(sale);
    } catch (error) {
      return res.status(500).json({message: 'Error updating sale'});
    }
  }
  updateSale();
}

module.exports = {
  getAll,
  getById,
  putItem,
  postItem,
  removeItem,
  getAllSales,
  postSale,
  putSale,
}
