const {mongoose}= require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {ObjectID}=require('mongodb');
const {users}=require('./../server/models/users');


// Todo.remove({}).then((result)=>{
//     console.log(result);
// });
// Todo.findByIdAndRemove('5c70c2167c41598c923d1b41').then((todo)=>{
//     console.log(todo);
// })
Todo.findOneAndRemove({_id: '5c70c23e7c41598c923d1b42'}).then((todo)=>{
    console.log(todo);
})