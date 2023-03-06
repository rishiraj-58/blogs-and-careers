import mongoose from 'mongoose';

const logoSchema = new mongoose.Schema({
    name: String,
    url: String
})

const CareerSchema = new mongoose.Schema({
    sn:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    qualification:{
        type: [String],
        required: true,
    },
    skills:{
        type: [logoSchema]
    },
    internOrJob:{
        type: String,
        required: true,
    },
    photo:{
        type: String,
    },
    attachment:{
        type: String
    },
    aadharNo:{
        type: Number,
        required: true,
    },
    panNumber:{
        type: Number,
        required: true,
    },
})

export default mongoose.model("Career", CareerSchema)