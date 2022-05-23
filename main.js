let i = 0

function createZombies() {

	let enemyZone = document.querySelector("#enemyZone")
	let Zombie = document.createElement("img")
	Zombie.src = "zombie.png"
	Zombie.className = "Zombie"
	i++

	if (i < 20) {
		setTimeout(createZombies, 2000)
	}
	else {
		clearTimeout(createZombies)
	}

	enemyZone.appendChild(Zombie)
	//Zombie.appendChild(zombie)

	
}
let startGame = document.querySelector("#start").addEventListener("click", createZombies)

let Zombie = document.querySelectorAll(".Zombie")


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

// ****** LIFE Zombie ****** //
function livingZombie() {
	return document.querySelectorAll("img.Zombie:not(.dead)");
}




// ****** SHOOT ****** //
function shoot(Zombie) {
	
	Zombie.classList.add("dead");

	if (!livingZombie().length) {
		alert("You win!");
		window.location.reload();
	}	
}

//Zombie.addEventListener("click", () => shoot(Zombie))




// ****** Zombie ATTAK ******* //
function ZombieAttacksMe(Zombie) {

	if (healthPoints > 0) {

		Zombie.classList.add("showing");

		setTimeout(() => {
			ZombieShootsMe(Zombie);
		}, 1000);

		setTimeout(() => {
			Zombie.classList.remove("showing");
		}, 3000);
	}
}




// ****** Zombie SHOOT ******** //
function ZombieShootsMe(Zombie) {
	let main = document.querySelector("#killBoxGame")
	if (!Zombie.classList.contains("dead")) {

		main.classList.add("shooting");
		updateHealthPoints(healthPoints - 5);

		setTimeout(() => {
			main.classList.remove("shooting");
		}, 100);
	}
}




// ******* RANDOM ATTAK ******* //
function randomZombieAttacks() {

	let randomZombieNo = Math.random() * livingZombie().length;
	randomZombieNo = Math.floor(randomZombieNo);
	let Zombie = livingZombie()[randomZombieNo];

	let randomDelay = Math.random() * 2000 + 1000;

	setTimeout(() => {
		ZombieAttacksMe(Zombie);
		randomZombieAttacks();
	}, randomDelay);
}
document.querySelector("#start").addEventListener("click", randomZombieAttacks)
