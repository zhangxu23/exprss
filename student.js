
var dbPath='./db.json'
var fs=require('fs');
//findall
exports.find=function(callback){
fs.readFile(dbPath,function(err,data){
    if(err){
        return callback(err)
    }
    callback(null,JSON.parse(data).students)
})
}
exports.save=function(student,callback){
    fs.readFile(dbPath,function(err,data){
        if(err){
            return callback(err)
        }
        var students=JSON.parse(data).students
        student.id=parseInt(students[students.length-1].id)+1
        students.push(student)
        var stus=JSON.stringify({
            students:students
        })
        fs.writeFile(dbPath,stus,function(err){
            if(err){
                return callback(err)
            }
            callback(null)

        })
    })
}
exports.updateById=function(student,callback){
    fs.readFile(dbPath,function(err,data){
        if(err){
            return callback(err)
        }
        var students=JSON.parse(data).students
        stu=students.find(function(item){
            return item.id==student.id
        })
        console.log(stu)
        console.log(student)
        for(key in student){
            stu[key]=student[key]
        }
        var stus=JSON.stringify({
            students:students
        })
        fs.writeFile(dbPath,stus,function(err){
            if(err){
                return callback(err)
            }
            callback(null)

        })
    })
}
/**
 * 根据id获取学生对象
 * @{Number} id 学生 id
 * @{Function} callback 回调函数
 */
exports.findById=function(id,callback){
    fs.readFile(dbPath,function(err,data){
        if(err){
            return callback(err)
        }
        var students=JSON.parse(data).students
        stu=students.find(function(item){
            return item.id==id
        })      
        callback(err,stu)
    })
}
exports.deleteById=function(id,callback){
    fs.readFile(dbPath,function(err,data){
        if(err){
            return callback(err)
        }
        var students=JSON.parse(data).students
        var index=students.findIndex(function(item){
            return item.id==id
        })      
        students.splice(index,1)
        var stus=JSON.stringify({
            students:students
        })
        fs.writeFile(dbPath,stus,function(err){
            if(err){
                return callback(err)
            }
            callback(null)

        })
    })
}