let centre={
    police:true,
    CBI:true,
    ED:true,
    power:"full"
}
let state={
    daru:true,
    name:"state_name"
}
let district={
    follow:"it will follow all "
} 
state.__proto__=centre;// yha per inheritance ha concept use ho rha he
//console.log(state.power);
Object.setPrototypeOf(district,state);// here is also an inheritance .
console.log(district.name);