var express = require('express');
var bodyParser=require('body-parser');
var {mongoose}= require('./db/mongoose');
var {Todo}=require('./models/todo');
var {users}=require('./models/users');

var app=express();
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
    //console.log(req.body);
    var todo=new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});
app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.status(400).send(e);
    })
});

app.listen(3000, ()=>{
    console.log('Started on port 3000');
});
module.exports={app};






// mongoose.Promise=global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');

// var Todo=mongoose.model('Todo',new mongoose.Schema({
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     }
// },{
//     completed:{
//         type:Boolean,
//         default: false
//     }
// },{
//     completedAt:  {
//         type: Number,
//         default: null
//     }
// }));
// var newTodo=new Todo({
//     text: 'Cook Dinner'
// });
// newTodo.save().then((doc)=>{
//     console.log('save Todo',doc);
// },(e)=>{
//     console.log('Unable to save Todo');
// });

// var otherTodo=new Todo({
//     text: 'hey',
//     completed:true,
//     completedAt:123
// });
// otherTodo.save().then((doc)=>{
//     console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//     console.log('Unable to save',e);
// });

// var Users=mongoose.model('Users',mongoose.Schema({
//     email:{
//         type: String,
//         required:true,
//         minlength: 1,
//         trim: true
//     }
// }));
// var newUsers= new Users({
//     email: 'sh786afi@gmail.com'
// });
// newUsers.save().then((doc)=>{
//     console.log('User Saved',doc);
// },(e)=>{
//     console.log('Unable to save Users',e);
// });
