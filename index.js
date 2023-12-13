// code your solution here
const saturdayFun = function(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  };
  

  const mondayWork = function(task = 'go to the office') {
    return `This Monday, I will ${task}.`;
  };
  
  const wrapAdjective = function(flair = '*') {
    return function(adjective = 'special') {
      return `You are ${flair}${adjective}${flair}!`;
    };
  };