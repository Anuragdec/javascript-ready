function raja(script){
this.script=script;
console.log(script);
}

function bahubali(hero,script){
    this.hero=hero;
    raja.call(this,script); // yha per this ko bhi call kr rhe he kyu ki jb bhi call stack me ye ja rha he vo apna element kho de rhha he
    // isliye ye vale function ka reference dene ke liye or element ko rokne ke liye apna this de rha he.
}

var movie= new bahubali("prabhas","RRR")
console.log(movie);