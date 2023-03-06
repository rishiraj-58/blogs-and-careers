import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    sn:{
        type: Number,
        required: true,
    },
    section:{
        type: String,
        required: true,
    },
    subSection:{
        type: String,
        required: true,
    },
    orderBy:{
        type: [String],
    },
    authority:{
        type: String,
        required: true,
    },
    won:{
        type: Boolean,
        default: false,
    },
})

export default mongoose.model("Blog", BlogSchema)