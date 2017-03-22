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

console.log(`============= Generator ===============`)

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
