let raceNumber = Math.floor(Math.random() * 1000); // give everyone a random number

let registeredEarly = true;

let age = 49;

if (age > 18 && registeredEarly){
  console.log(`this is your number ${raceNumber} and your race time will be at 9.30`)
} else if(age > 18 && !registeredEarly){
  console.log(`this is your number ${raceNumber} and your race time will be at 11.00`)
} else if(age < 18){
  console.log(`this is your number ${raceNumber} and your race time is 12.30`)
} else {
  console.log("see the registratioin desk")
}