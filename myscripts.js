
//random da 1 a 100
var rnd = Math.ceil(Math.random() * 100);

//print random number
console.log(rnd);

//conditions
if (rnd % 3 === 0 && rnd % 5 === 0){
    console.log("FizzBuzz")
}else if (rnd % 3 === 0) {
    console.log("Fizz")
} else if (rnd % 5 === 0) {
    console.log("Buzz")
} else {
    console.log("Nada")
}