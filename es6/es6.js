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
