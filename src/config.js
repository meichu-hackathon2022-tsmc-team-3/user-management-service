module.exports = {
    PORT: 3000,
    DB: {
      PROD: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/musika`,
      DEV: `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
      TEST: `mongodb://test-mongo:27017/${process.env.MONGO_DB}`,
    }
};