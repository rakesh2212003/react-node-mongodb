import mongoose from 'mongoose'

const getConnection = async () => {
    const URI = process.env.MONGO_URL;
    const options = {
        dbName: process.env.DB_NAME
    };
    
    try {
        await mongoose.connect(URI, options);
    }
    catch (error) {
        console.log('Connection Error', error);
    }
}

export { getConnection }