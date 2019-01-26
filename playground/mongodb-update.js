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
    // db.collection('Users').findOneAndUpdate({_id: new ObjectID("5c4bf8f8797bcd15ea9efb08")},
    // {
    //     $set:{
    //         completed: true
    //     } 
    // }, {
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });
    db.collection('Users').findOneAndUpdate({_id: new ObjectID("5c4bf8f8797bcd15ea9efb08")},
    {
        $set:{
            name: 'Irfan'
        },
        $inc:{
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });
    client.close();
});