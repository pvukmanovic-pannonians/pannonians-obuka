/**SECTION: Budget tracker */
//
// We often lose ourselves in our budget. There's a rule of saving: 50/30/20.
// Here's a non-related cool article to explain: https://www.investopedia.com/ask/answers/022916/what-502030-budget-rule.asp
// However, to sum up: We wanna know if based on our spendings and incomes, we're saving
// our money properly.
//
// The "Task data" section gives you an overlay of your expanses.
// You also have a schema of what's considered an expanse, and what's an income.
//
// The task is simple:
//    1. Based on the income of 3 months period given in the Task data area,
//       calculate how much of savings you should have.
//    2. Ticket to Mars price is, on our current predictions, around 35000 cosmic credits.
//       Please console.log us the result if you have enough savings to go to Mars or not.
//       Please note that the data is dynamic, so you might go in some scenarios, some not.
//       Now that we know that information, please tell us as well total savings (which is 20% of your
//       monthly income) for your every month.
//       To sum up: you will need at least 2 console.logs to finish this properly
//
/**!SECTION */

/**SECTION: Data prep. section */
// DO NOT CHANGE ANYTHING IN THIS SECTION

// function to generate 50/50 split
const incomeProbability = () => {
    return Math.random() < 0.2;
  };
  
  // generate our random number
  const income = {
    min: 45000,
    max: 75000,
  };
  
  const expense = {
    min: 1000,
    max: 15000,
  };
  
  function randomNumberIncome() {
    return parseInt(
      (Math.random() * (income.max - income.min) + income.min).toFixed(0)
    );
  }
  
  function randomNumberExpense() {
    return parseInt(
      (Math.random() * (expense.max - expense.min) + expense.min).toFixed(0)
    );
  }
  
  const generateTransaction = () => {
    const income = incomeProbability();
    return {
      income: income,
      amount: income ? randomNumberIncome() : randomNumberExpense(),
    };
  };
  
  const calculateTransactions = () => {
    return [
      generateTransaction(),
      generateTransaction(),
      generateTransaction(),
      generateTransaction(),
      generateTransaction(),
    ];
  };
  
  /**!SECTION */
  
  /**SECTION: Task data */
  const ticketPrice = 35000;
  const expanses = [
    {
      month: 1,
      transactions: calculateTransactions(),
    },
    {
      month: 2,
      transactions: calculateTransactions(),
    },
    {
      month: 3,
      transactions: calculateTransactions(),
    },
  ];
  /**!SECTION */
  
  /** SECTION:  Work area */
  
  // Your answer here. Delete this comment.
  
  /** !SECTION */
  