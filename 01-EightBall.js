let userName = '';

userName ? `hello ${userName}` : "hello Stranger :)"; 

let userQuestion = `Will I become a werewolf tonight ${userName} ?`;

console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = randomNumber;

switch (eightBall){
  case 1 : console.log('It is certain');
    break;
  case 2 : console.log('It is decidedly so');
    break;
  case 3 : console.log('Reply hazy try again');
    break;
  case 4 : console.log('Cannot predict now'); 
    break;
  case 5 : console.log('Do not cout on it');
    break;
  case 6 : console.log('My sources say no');
    break;
  case 7 : console.log('Outlook not so good');
    break;
  case 8 : console.log('Signs point to yes');
    break;
  default : console.log('eightBall');
    break;
}

console.log(eightBall);