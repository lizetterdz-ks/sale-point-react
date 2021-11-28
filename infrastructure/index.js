const { mongoClient } = require('./mongo/MongoClientFactory');

async function initializeDataBases(){
    try {
      await Promise.all([
        mongoClient.init()
      ]);
      console.log('Database initialized correctly');
    } catch (error) {
      console.log(error);
      throw new Error('Databases could not initialize correctly');
    }
};

module.exports = initializeDataBases;