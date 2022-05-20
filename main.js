let i= 0

function createMonsters() {

 
        let enemyZone = document.querySelector("#enemyZone")
        let monster = document.createElement("div")
        monster.className = "enemy"
        i++

         if(i < 20) {
            setTimeout(createMonsters, 2000)
             }
             else {
                 clearTimeout(createMonsters)
             }
       
        enemyZone.appendChild(monster)
        
    /* 
    let arr = []
    arr.push(monster)
    arr[0].id = "enemy1"
    arr[1].id = "enemy2"
    arr[2].id = "enemy3"
    arr[3].id = "enemy4"
    arr[4].id = "enemy5"
    arr[0].id = "enemy1"
    arr[0].id = "enemy1"
    arr[0].id = "enemy1"
    console.log(arr)
    */
    
}
let startGame = document.querySelector("#start").addEventListener("click", createMonsters)

