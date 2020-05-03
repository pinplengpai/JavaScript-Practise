const getSleepHours = day => {
    if(day === 'monday'){
      return 8;
    } else if (day === 'tuesday') {
      return 6;
    } else if (day === 'wednesday'){
      return 5;
    } else if (day === 'thursday'){
      return 9;
    } else if (day === 'friday'){
      return 9;
    } else if (day === 'saturday'){
      return 7;
    } else if (day === 'sunday'){
      return 6;
    } else {
      return "error!";
    }
  };
  
  const getActualSleepHours = () => 
    getSleepHours('monday') + 
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday')
  
  
  const getIdealSleepHours = idealHours => {
   idealHours * 7
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = 
  getActualSleepHours();
    const idealSleepHours = 
  getIdealSleepHours();
    if (actualSleepHours === idealSleepHours){
      return console.log("you got perfect amount of sleep.")
    } else if (actualSleepHours > idealSleepHours){
      return console.log("you got more sleep than needed")
    } else if (actualSleepHours < idealSleepHours){
      return console.log("you should get some rest!")
    }
  }; 
  calculateSleepDebt();
  
  
  