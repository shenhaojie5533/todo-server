var express = require('express');
var router = express.Router();
var todolist= require("../database/model/todolist")
/* GET home page. */
router.get('/todo', function(req, res, next) {
  todolist.find({}).then(data =>{
    res.json({
        code:200,
        data
    })
  })
});
router.post('/todo', function(req, res) {
  let todo =req.body;
  todo.isDone=false;
    todolist.create(todo).then(data =>{
        res.json({
            code:200,
            msg:'success'
        })
    })
});
router.patch('/todo/:id',(req,res) =>{
    let id = req.params.id;
    let isDone =req.body.isDone ==1?true:false;
    todolist.update({_id:id},{isDone}).then(data=>{
        res.json({
            code:200,
            msg:"修改成功"
        })
    })
});

router.delete("/todo/:id",(req,res)=>{
    let id= req.params.id;
    console.log(id);
    todolist.remove({_id:id}).then(data=>{
        res.json({
            code:200,
            msg:"删除成功！"
        })
    })
})
module.exports = router;
