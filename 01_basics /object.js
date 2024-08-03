/*const mysymb= Symbol("key1")
const person ={
    name: "Anurag",
    age:24,
    days:["monday","wed"],
    "fullname": "Anurag Chaudhary",
    [mysymb]:"key2"

}


console.log(person.name)
console.log(person["name"])
//console.log(person.typeof[mysymb]) syntax error
console.log(typeof person[mysymb])
Object.freeze(person)
person.age=25;
console.log(person)
*/
//*********************************** */
//singleton vala objects discuss

/*
const user=new Object();

user.id=123;
user.name="anurag";
user.day=["wed","frid"];
user.p1={
    name1:"yogi",
    id:321, 

}
//console.log(user)
console.log(user.flat[Infinity])
*/

const sale ={
    discount:12,
    product:"bags",
    price:500
}

const {price:p}= sale

console.log(p)
