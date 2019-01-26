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
    db.collection('Todos').find().toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined, err));
    },(err)=>{
        console.log('Unable to fetch todos', err);
    });
    client.close();
});