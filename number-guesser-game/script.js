let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = () =>{
    return Math.floor(Math.random()*10);
  }
  /*const getAbsoluteDistance = (user, comp, target) =>{
    let userDifference = Math.abs (target - user);
    let compDifference = Math.abs (target - comp);
  }*/
  
  const compareGuesses = (user, comp, target) =>{
    let userDifference = Math.abs (target - user);
    let compDifference = Math.abs (target - comp);  
    if(userDifference === compDifference){
      return true;
     }else if(userDifference < compDifference){
       return true;
     }else{
       return false;
    }
  } 
  
  const updateScore = (who) =>{
    if(who === 'human'){
      humanScore++;
    }else{
      computerScore++;
    }
  }
  
  const advanceRound = () => currentRoundNumber++;
  
  const checkUserInput = () =>{
    if(user >10){
       return window.alert('Your number is out of range, choose a number from 0-9');
    }
  } 
  
  console.log(generateTarget());
  console.log(compareGuesses(12, 5, 4));
  console.log(checkUserInput());
  