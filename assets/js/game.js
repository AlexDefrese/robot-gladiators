// Game states
// "WIN" - Player robot has defeated all enemy robots
//         *Fight all enemy robots
//          *Defeat all enemy robots
//  "Lose" - Player robot has zero or less health 



var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// you can log  multiple values at once like this
 console.log(playerName, playerAttack, playerHealth);

for(var i=0; i < enemyNames.length; i++) {
    // console.log(enemyNames[i]);
    // console.log(i);
    // console.log(enemyNames[i] + " is at " + i + " index");
}

var fight = function(enemyName) {
    // repeat and execute as long as the enemy has health
    while(playerHealth > 0 && enemyHealth > 0) {
    // Alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'SKIP' to choose.")

    // if player chooses to skip
 if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm if player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes (true), leave fight
    if (confirmSkip) {
    window.alert(playerName + " has chosen to skip the fight! Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney);
    break;
    } 
}

    // if player chooses to fight, then fight
    // if(promptFight=== "fight" || promptFight === "FIGHT"){
    
    // Subtract the value of the 'playerAttack' from the value of 'enemyHealth' and us that result to update the value in the 'enemyHealth' varible
    enemyHealth = enemyHealth - playerAttack;
    
    // Log the resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    
    // check enemy health
    if(enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    
        // award player money for winning
    playerMoney = playerMoney + 20;
    // leave while() loop since enemy is dead
    break; 
   
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.")
    }
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' varible
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
   
    // check player health
    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
        // leave while() loop if player is dead
        break;
    
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    }
};
    
    
        // if no (false), ask question again by running fight() again
        // else {
            fight();
        // }
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
