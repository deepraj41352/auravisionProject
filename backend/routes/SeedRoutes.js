import express from 'express';
import ConfigData from '../models/ConfigDataModule.js';
import data from '../DummyData.js'
const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
    await Product.deleteMany({});
    const createdConfigData = await ConfigData.insertMany(data.configurationData);

    res.send({ createdConfigData });

});
export default seedRouter;