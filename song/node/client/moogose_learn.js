var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:32768/students');

// 三步走：Schema注册
var Schema = mongoose.Schema;
var Students = new Schema({
    name: String,
    sexy: String
});
mongoose.model('Student', Students);

// 增加数据
var Student = mongoose.model('Student');
var student = new Student();
student.name = '醒梦';
student.sexy = 'female';
student.save(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Student is saved.');
        mongoose.disconnect();
    }
})

// 查询数据
// var Student = mongoose.model('Student');
// Student.find({ 'name': 'xiaosi' }, function(err, students) {
//     console.log(students);
// });

// 更新数据
// var Student = mongoose.model('Student');
// 5894b64fe141bf259391bade 是xiaosi的_id
// Student.update({ _id: '5894b64fe141bf259391bade' }, { sexy: 'man' }, { multi: false }, function(err, row_update) {
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         console.log(row_update);
//     }
// });

// 删除数据
// var Student = mongoose.model('Student');
// Student.findById('5894b64fe141bf259391bade', function(err, student) {
//     console.log(student);
//     student.remove();
// });
