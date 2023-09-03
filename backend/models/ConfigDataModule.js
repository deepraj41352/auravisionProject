import mongoose from 'mongoose';
// review table create
const configData = new mongoose.Schema(
    {
        category: { type: String },
        description: { type: String },
        model: { type: String },
        pixelPitch: { type: String },
        ledType: { type: String },
        brightness: { type: String },
        cabinetSizeW: { type: String },
        cabinetSizeH: { type: String },
        cabinetResW: { type: String },
        cabinetResH: { type: String },
        moduleSizeW: { type: String },
        moduleSizeH: { type: String },
        moduleResW: { type: String },
        moduleResH: { type: String },
        moduleConfig: { type: String },
        weight: { type: String },
        maxPower: { type: String },
        avgPower: { type: String },
        pdf: { type: String },
        status: { type: String }
    },
    {
        timestamps: true,
    }
)

// model created
const ConfigData = mongoose.model('ConfigData', configData);
export default ConfigData; 