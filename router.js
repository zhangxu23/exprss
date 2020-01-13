
var express=require('express');
var router = express.Router();
//var Student =require('./student');
var Student =require('./studentsdb');

router.get('/student/new',  function (req, res) {
    // fs.readFile('./db.json','utf8',function(err,data){
    //     if(err){
    //         return res.status(500).send('server error')
    //     }
    //     console.log(JSON.parse(data).students);
    //     res.render('index.html',{
    //         fruits:['apple','orange','banner'],
    //         students:JSON.parse(data).students
    //     });
    // })
    res.render('new.html');
});
router.post('/student/new',  function (req, res) {
    console.log(req.body)
    new Student(req.body).save(function(err,syu){
        if(err){
            return res.status(500).send(err+syu)
        }
        res.redirect('/')
    })
});
router.get('/student/edit', function (req, res) {
    Student.findById(req.query.id,function(err,student){
        if(err){
             return res.status(500).send('Server err')
        }
        res.render('edit.html',{
            student:student
        });
    })
});
router.post('/student/edit', function (req, res) {
    Student.findByIdAndUpdate(req.body.id,req.body,function(err){
        if(err){
             return res.status(500).send('Server err')
        }
       res.redirect('/')
    })
});
router.get('/student/delete', function (req, res) {
    Student.findByIdAndRemove(req.query.id,function(err,student){
        if(err){
             return res.status(500).send('Server err')
        }
        res.redirect('/')
    })
});
router.get('/', function (req, res) {
    Student.find(function(err,students){
        if(err){
             return res.status(500).send('Server err')
        }      
        res.render('index.html',{
            fruits:['apple','orange','banner'],
            students:students
        });
    })
    
});
module.exports=router
