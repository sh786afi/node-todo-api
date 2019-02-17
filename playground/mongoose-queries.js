const {mongoose}= require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {ObjectID}=require('mongodb');
const {users}=require('./../server/models/users');

// var id ='5c62ece8425e6a06d163b8860';
// if(!ObjectID.isValid(id)){
//     console.log('Id is not valid');
// }
//  Todo.find({
//      _id: id
//  }).then((todos)=>{
//      console.log('Todos', todos);
//  });

//  Todo.findOne({
//      _id:id
//  }).then((todo)=>{
//      console.log('Todo',todo);
//  });
//  Todo.findById(id).then((todo)=>{
//      if(!todo){
//          return console.log('Id not found');
//      }
//      console.log('Todo by Id ', todo);
//  }).catch((e)=>console.log(e));
users.findById('5c4bf8f8797bcd15ea9efb08').then((users)=>{
    if(!users){
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(users,undefined,2));
},(e)=>{
    console.log(e);
});