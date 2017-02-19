// // 同步
// [1, 2, 3, 4].forEach((v) => {
//     console.log(v);
//     delay(10000);
// });

// console.log('123');

// 异步
function asyncForEach(array, callback) {
    array.forEach((v) => {
        console.log(`function ${v}`);
        setTimeout(callback, 100);
    })
}

asyncForEach([1, 2, 3, 4], (i) => {
    console.log(`call ${i}`);
    // delay(1000);
});

console.log('123');
