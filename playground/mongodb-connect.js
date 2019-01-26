//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');

// var obj = new ObjectID();
// console.log(obj); 
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDb server');
    const db =client.db('TodoApp');
// db.collection('Todos').insertOne({
//     text: 'Something to do',
//     complted: false
// },(err, result)=>{
//     if(err){
//         return console.log('Unable to insert todo', err);
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));
// });
db.collection('Users').insertOne({
   // _id: 123,
    name: 'Shafi',
    age:26,
    location:'Bhagalpur'
},(err,result)=>{
    if(err){
        console.log('Unable to insert user',err);
    }
    //console.log(result.ops);
    console.log(result.ops[0]._id.getTimestamp());

});
    client.close();
});