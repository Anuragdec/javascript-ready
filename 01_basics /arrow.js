const user={
    name:"anurag",
    age:25,

    withlogin: function message()
    {
         console.log(`${this.name}, hello sir`);
    }
}
// user.withlogin()
// user.name="vidhi"
// user.withlogin()
//*************************************************** */
// so yha per hum dekh shakte he ki this keyword ka use hum funtion me ni kr shakte he 
// abhi to object me kr rhe he 
const date= () => 
{
    let  day="monday"
    console.log(this.day)
}
date()

//arrow function ke under bhi this ni chala
