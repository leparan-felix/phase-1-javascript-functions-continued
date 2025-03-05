// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
console.log(saturdayFun("watch movies")); // "This Saturday, I want to watch movies!"

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  console.log(mondayWork()); // "This Monday, I will go to the office."
  console.log(mondayWork("work from home")); // "This Monday, I will work from home."
  function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }

  const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer"));
// "You are !!!a dedicated programmer!!!"

console.log(wrapAdjective("%")("an awesome coder"));
// "You are %an awesome coder%!"

