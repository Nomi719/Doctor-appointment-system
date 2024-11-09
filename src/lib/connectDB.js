import mongoose from "mongoose"

export default async function connectDB() {


    let connection;
    if(connection?.connection?.readyState !=1){
        connection = await mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.error(err));
        console.log("Db connected", connection)
    }

}