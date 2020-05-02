const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput ==='paper' || userInput ==='scissors'){
    return userInput;
    } else {
      console.log('Error!');
    }
  };
  
  congst getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
      switch(randomNumber){
        case 0: 
          return 'rock';
        case 1:
          return 'paper';
        case 2:
          return 'scissors';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => { 
    if (userChoice === computerChoice){
      return 'tie'
    };
  
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return "you won";
      } else {
        return "you lose";
      }
    } 
    
    if (userChoice === 'paper'){
      if (computerChoice === 'rock'){
        return "you won";
      }else {
        return "you lose";
      }
    }
  
    if (userChoice === 'scissors'){
      if (computerChoice === 'paper'){
        return "you won";
      } else {
        return "you lose";
      }
    }
  }
  
  
  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('you threw' + ' ' + userChoice);
    console.log('computer threw' + ' ' + computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
  };
  
  playGame();