const promiseOne= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("data manupulatuon ")
        resolve()
    },1000)
 
})

promiseOne.then(function(){
    console.log("this is completed")
})

console.log("   _________");

const promiseTwo= new Promise(function(resolve,reject){
    setTimeout(function(){// ak function run karane diya he
        console.log("Data 2 update")
        let error=true;
        if(!error){// suppose koi erroe ni he
    resolve({name: "Anurag",age:15})//resolve
        } 
        else{ reject('spotted error') }// reject
    },1000)
}).then(function(user){
    console.log(user)
    return user.name;
}).then(function(name){
    console.log(name)
}).catch(function(ERROR){
    console.log(ERROR);
})
    
