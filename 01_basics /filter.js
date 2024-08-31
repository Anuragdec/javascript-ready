const anime = [
    { title:'death note', genure:'thiller'},
    
    { title:'horemiya  ', genure:'romance'},
    
    { title:'my hero acedemy', genure:'action'},
    
    { title:'attack of titan', genure:'action'},
    
    { title:'slime', genure:'action'},
    
    { title:'i love your panciase', genure:'romance'}
]

const recanime= anime.filter((anime)=> anime.genure==='romance')

console.log(recanime);