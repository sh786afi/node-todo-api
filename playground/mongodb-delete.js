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
    //delete many
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //delete one
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // })

    //find one delete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
        console.log(result);
    });
    //by objectid
    // db.collection('Users').findOneAndDelete({_id: new ObjectID("5c4bf6e8685f8a15db19c0e1")}).then((result)=>{
    //     console.log(JSON.stringify(result,undefined,2));
    // });
  
    client.close();
});