// 1) Show a result of Josephus Problem for 7 soldiers.
// 	a. 1 Kills 2
// 	b. 3 Kills 4
// 	c. 5 Kills 6
// 	d. 7 Kills 1
// 	e. 3 Kills 5
// 	f. 7 Kills 3
// 	g. 7 Remains alive

class Soldier {
  constructor(id) {
    this.id = id;
  }
}

class JosephusProblem {
  constructor(soldiersCount, whoStarts) {
    this.soldiersCount = soldiersCount;
    this.whoStarts = whoStarts;
  }

  resolve() {
    let soldiers = [];

    for (let i = 0; i < this.soldiersCount; i++) {
      soldiers.push(new Soldier(i + 1));
    }

    let swordIndex = this.whoStarts;

    while (soldiers.length > 1) {
      let deathIndex = (swordIndex + 1) % soldiers.length;

      let killer = soldiers[swordIndex];
      let killedSoldier = soldiers[deathIndex];

      console.log(killer.id, "kills", killedSoldier.id);
      soldiers.splice(deathIndex, 1);
      swordIndex = deathIndex % soldiers.length;
    }

    console.log("Soldier", soldiers[0].id, "wins!");
  }
}

let soldiersCount = 7;
let whoStarts = 0; // Index żołnierza w tablciy, a nie jego id!!!

let josephusProblem = new JosephusProblem(soldiersCount, whoStarts);

josephusProblem.resolve();
