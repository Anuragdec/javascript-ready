//ak object banate he

let obj1= {
     email:"anu@gmail.com",
     password: 300
}

let obj2= obj1;
obj2.password=99;
let obj3=obj1;
obj3.password=77;

console.log(obj1.password)

console.log(obj2.password)

console.log(obj3.password)