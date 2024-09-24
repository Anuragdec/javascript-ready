// prototype use hota power dene ke liye
// object huva. string, array, issme koi bhi ak chiz common krna he to object me prototype dal to, to sb me reflect ho jayega
// object is boss of all 

let animal=["lion","rabbit"]

let power={
    lion:"bite",
    rabbit:"running",
    showpower: function(){
        console.log(`power of both lion and rabbit is ${this.lion}  , ${this.rabbit} is `)
    }

}
Object.prototype.anurag=function(){
    console.log("HE WILL EAT TO ALL");
}
Array.prototype.anu=function(){
    console.log("THEY ARE IN DANGER")
}
animal.anu();
power.anurag();