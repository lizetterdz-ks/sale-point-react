const { connect } = require('mongoose');
// import { ClientFactory } from '../ClientFactory';

class MongoClientFactory {  
  constructor(url) {
      this.url = url;
  };

  async init(){
    try {
      await connect(this.url);
    } catch (error) {
      console.log(error);
      throw new Error("Error in the Mongo DB setup")
    }
  }
}

const mongoClient = new MongoClientFactory('mongodb+srv://mongoUser:9dBFpMJvWLM2dha@cluster0.adw50.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

module.exports = {
  MongoClientFactory,
  mongoClient
}
