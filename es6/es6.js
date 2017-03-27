let a = 'q';
console.log(a);

[1, 2, 3].map((v) => {
    console.log(v);
});

console.log('hello world')

document.body.innerText = 'hello'

{
    let fruit = 'apple';
}

// console.log(fruit);

let breakfast = dessert => dessert;
console.log(breakfast('milk'))

/*
对象的属性
 */
console.log(`============= 对象的属性 ===============`)
let bf = {
    getDrink: () => {
        return 'coffee';
    }
}

let dn = {
    getDrink: () => {
        return 'beer';
    }
}

let sunday = Object.create(bf);
console.log(sunday.getDrink());
console.log(sunday);
console.log(Object.getPrototypeOf(sunday) === bf);
Object.setPrototypeOf(sunday, dn);
console.log(sunday);
console.log(sunday.getDrink());

/*
对象的super
 */
console.log(`============= 对象的属性 ===============`)
let monday = {
    __proto__: bf,
    getDrink() {
        return `${super.getDrink()} && milk`;
    }
}
console.log(monday.getDrink());
console.log(monday);

/*
class的继承
 */
console.log(`============= class的继承 ===============`)
class Person {
    constructor(name, birthday) {
        this.name = name;
        this.birthday = birthday;
    }

    intro() {
        console.log(this.name, this.birthday);
    }
}

class Chef extends Person {
    constructor(name, birthday) {
        super(name, birthday);
    }
}

let shen = new Chef('shenqingling', '1992-11-11');
shen.intro();

/*
Iterator 遍历器
 */
console.log(`============= Iterator 遍历器 ===============`)
    // 1. 自定义
function chef(foods) {
    let i = 0;
    return {
        next() {
            let done = (i >= foods.length);
            let value = !done ? foods[i++] : undefined;
            return {
                value,
                done
            }
        }
    }
}

shen = chef(['tomato', 'egg']);
console.log(shen.next());
console.log(shen.next());
console.log(shen.next());


console.log(`============= Symbol.iterator ===============`)
console.log(`============= ex1: Array `)
let arr = ['a', 'b', 'c'];
console.log(arr[Symbol.iterator])
let iter = arr[Symbol.iterator]();
console.log(iter.next()) // { value: 'a', done: false }
console.log(iter.next()) // { value: 'b', done: false }
console.log(iter.next()) // { value: 'c', done: false }
console.log(iter.next()) // { value: undefined, done: true }

console.log(`============= ex2: Object `)
let arr1 = { a: 'a', b: 'b', c: 'c' };
console.log(arr1[Symbol.iterator]) // undefined

console.log(`============= ex3: 类 Array `)
let arr2 = { a: 'a', b: 'b', c: 'c', length: 3 };
console.log(arr2[Symbol.iterator]) //
let iter2 = arr[Symbol.iterator]();
console.log(iter.next()) // { value: undefined, done: true }

console.log(`============= ex4: Set / Map `)
let set = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(set[Symbol.iterator]) //
let iter3 = set[Symbol.iterator]();
console.log(iter3.next()) // { value: 1, done: false }
console.log(iter3.next()) // { value: 2, done: false }
console.log(iter3.next()) // { value: 3, done: false }
console.log(iter3.next()) // { value: 4, done: false }
console.log(iter3.next()) // { value: 5, done: false }
console.log(iter3.next()) // { value: undefined, done: true }

console.log(`============= ex5: String `)
let str = 'hello';
console.log(str[Symbol.iterator]) // 
let iter4 = str[Symbol.iterator]();
console.log(iter4.next()) // { value: 'h', done: false }
console.log(iter4.next()) // { value: 'e', done: false }
console.log(iter4.next()) // { value: 'l', done: false }
console.log(iter4.next()) // { value: 'l', done: false }
console.log(iter4.next()) // { value: 'o', done: false }
console.log(iter4.next()) // { value: undefined, done: true }

console.log(`============= Generator ===============`)

console.log(`============= ex1: Generator: Iterator遍历生成函数的简单实现 `)

function* chef(foods) {
    for (let i = 0; i < foods.length; i++) {
        yield foods[i]
    }
}

shen = chef(['tomato', 'egg']);
console.log(shen.next());
console.log(shen.next());
console.log(shen.next());

let shen1 = chef(['tomato1', 'egg1']);
for (let v of shen1) {
    console.log(v);
}

console.log(`============= ex2 `)

function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hw = helloWorldGenerator();
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
