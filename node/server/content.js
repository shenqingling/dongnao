// 函数传递

// function say(world) {
//     console.log('sql: ' + world + '.');
// }

// function execute(someFunction, value) {
//     someFunction(value);
// }

// execute(say, 'Hello world');

// function eat(food){
// 	console.log('sql: ' + food + '.');
// }

// execute(eat, 'apple');

function execute(someFunction, value) {
    someFunction(value);
}

// 匿名函数用法
execute(function(word){
	console.log('sql: ' + word + '.');
}, 'Hello world');

execute(function(food){
	console.log('sql: ' + food + '.');
}, 'apple');