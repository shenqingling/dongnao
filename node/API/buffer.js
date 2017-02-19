// node v6.* 有 alloc 这个方法，v4.*没有这个方法
// var buf = Buffer.alloc(10);
var buf1 = new Buffer(10);
var buf2 = new Buffer([10, 20, 30, 40, 50]);
// console.log(buf);
console.log(buf1);
console.log('buf1.length: ' + buf1.length);
console.log(buf2);
console.log('buf2.length: ' + buf2.length);

console.log('=============================');

var b1 = new Buffer('runoob: ');
var b2 = new Buffer('www.runoob.com');
// var b3 = Buffer.concat([b1, b2]);
var b3 = Buffer.concat([b1, b2], 10);
console.log('b3的内容：' + b3.toString());

console.log('=============================');

var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if (result < 0) {
    console.log(buffer1 + " 在 " + buffer2 + "之前");
} else if (result == 0) {
    console.log(buffer1 + " 与 " + buffer2 + "相同");
} else {
    console.log(buffer1 + " 在 " + buffer2 + "之后");
}
