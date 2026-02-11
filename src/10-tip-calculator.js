/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {

  let obj = {};

  if(billAmount <= 0 | serviceRating < 1 || serviceRating > 5 || !Number.isInteger(serviceRating)){
    return null;
  }

  function tipAmountCalc(tipPercentage, billAmount ){
    return (tipPercentage*billAmount)/100
  }

  function totalAmounts(billAmount, tipAmount){
    return (billAmount+tipAmount);
  }

  if(serviceRating == 1){
    const tipAmount = tipAmountCalc(5, billAmount);
    obj = {tipPercentage:5, tipAmount:tipAmount, totalAmount:totalAmounts(billAmount, tipAmount)} ;
  } else if(serviceRating == 2){
    const tipAmount = tipAmountCalc(10, billAmount);
    obj = {tipPercentage:10, tipAmount:tipAmount, totalAmount:totalAmounts(billAmount, tipAmount)} ;
  } else if(serviceRating == 3){
    const tipAmount = tipAmountCalc(15, billAmount);
    obj = {tipPercentage:15, tipAmount:tipAmount, totalAmount:totalAmounts(billAmount, tipAmount)} ;
  } else if(serviceRating == 4){
    const tipAmount = tipAmountCalc(20, billAmount);
    obj = {tipPercentage:20, tipAmount:tipAmount, totalAmount:totalAmounts(billAmount, tipAmount)} ;
  } else if(serviceRating == 5){
    const tipAmount = tipAmountCalc(25, billAmount);
    obj = {tipPercentage:25, tipAmount:tipAmount, totalAmount:totalAmounts(billAmount, tipAmount)} ;
  }
  
  return obj;
}
