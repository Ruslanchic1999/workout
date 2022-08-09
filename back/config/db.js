import mongoose from 'mongoose'


export const connectDb = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            }
        )
       console.log(`mongo db connected ${conn.connection.host}`)
    }
    catch(error){
        console.log(`error ${error.message}`)
    }
}












// export const mongoClient = (process.env.MONGO_URI, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// });
//
// mongoClient.connect(function(err, client){
//
//     const db = client.db("usersdb");
//     const collection = db.collection("users");
//     let user = {name: "Ruslan", age: 23};
//     collection.insertOne(user, function(err, result){
//
//         if(err){
//             return console.log(err);
//         }
//         console.log(result);
//         console.log(user);
//         client.close();
//     })}