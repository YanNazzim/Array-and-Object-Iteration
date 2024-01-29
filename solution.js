// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt',
    'ice cream', 'milkshake']

function logDairy() {
    for (var item of dairy) {
        console.log(item)
    }
}
console.log("Logging Dairy: \n")
logDairy()
console.log() // empty space
// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan(){
    for (var trait of Object.keys(bird)) {
    console.log(trait + ": " + bird[trait])
    }
}
console.log("Iterating over bird object: \n")
birdCan()
// Task 3
function animalCan() {
    for (var trait in bird) {
        console.log(trait + ": " + bird[trait])
    }
}
console.log("\nIterating over both bird and animal objects: \n")
animalCan()
