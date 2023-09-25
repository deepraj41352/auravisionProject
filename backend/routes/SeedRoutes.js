import express from 'express';
import ConfigData from '../models/ConfigDataModule.js';
import data from '../DummyData.js'
const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
    try {
        console.log('After route definition');

        await ConfigData.deleteMany({});
        const createdConfigData = await ConfigData.insertMany(data.configurationData);
        res.send({ createdConfigData });

    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

export default seedRouter;
