import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created_on: { type: Date, default: Date.now },
    deleted: { type: Number, default: 0}
})

export default mongoose.model("users", userSchema);