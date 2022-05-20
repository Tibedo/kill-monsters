let i = 0

function createMonsters() {


	let enemyZone = document.querySelector("#enemyZone")
	//let monster = document.createElement("div")
	let monster = document.createElement("img")
	monster.src = "zombie.png"
	monster.className = "monster"
	//zombie.className = "enemy"
	i++

	if (i < 20) {
		setTimeout(createMonsters, 2000)
	}
	else {
		clearTimeout(createMonsters)
	}

	enemyZone.appendChild(monster)
	//monster.appendChild(zombie)

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

let monster = document.querySelectorAll(".monster")


// ******* HEALTH ****** //
let healthPoints = 50;

function updateHealthPoints(points) {

	healthPoints = points;
	let health = document.querySelector("#health");
	health.style.width = points + "%";

	if (healthPoints < 1) {
		alert("Game over!");
		window.location.reload();
	}
}


function livingEnemies() {
	return document.querySelectorAll(".monster:not(.dead)");
}

// ****** SHOOT ****** //
function shoot(monster) {

	monster.classList.add("dead");
	

	if (!livingEnemies().length) {
		alert("You win!");
		window.location.reload();
	}

}



function monsterAttacksMe(monster) {

	if (healthPoints > 0) {

		monster.classList.add("showing");

		setTimeout(() => {
			monsterShootsMe(monster);
		}, 1000);

		setTimeout(() => {
			monster.classList.remove("showing");
		}, 3000);

	}


}


function monsterShootsMe(monster) {

	if (!monster.classList.contains("dead")) {

		monster.classList.add("shooting");
		updateHealthPoints(healthPoints - 5);

		setTimeout(() => {
			monster.classList.remove("shooting");
		}, 200);

	}

}


function randomMonsterAttacks() {

	let randomMonsterNo = Math.random() * livingEnemies().length;
	randomMonsterNo = Math.floor(randomMonsterNo);
	let monster = livingEnemies()[randomMonsterNo];

	let randomDelay = Math.random() * 2000 + 1000;

	setTimeout(() => {
		monsterAttacksMe(monster);
		randomMonsterAttacks();
	}, randomDelay);

}

monster.addEventListener("click", shoot(monster))
document.querySelector("#start").addEventListener("click", randomMonsterAttacks)
