function getLabelTotal(kitCount, spareCount) {
  // This prints a total but fails to give that value back to the call site.
  return kitCount + spareCount; //changed console.log(kitCount + spareCount); to return kitCount + spareCount;
}

//predictions
//7,2 returned value 9, one additional spare 10 /*in practice returned 9*/
//7,0 returned value 7, one additional spare 8 /*in practice returned 7*/
// 4,3 returned value 7, one additional spare 8 /*in practice returned 7*/
const labels = getLabelTotal(4, 3);
console.log("Labels to prepare:", labels);
console.log("If one more spare is needed:", labels + 1);

//There is no return statement and the function does not return any value
//this is why there is undefined values.
//to fix this we need to add a return statement to the function

//the function returns the sum of kitCount + spareCount using the return statement
//which calls display the value? console.log("labels to prepare", labels) displays the returned total
//console.log("If one more spare is needed:", labels+1) displays the returned total plus one

//Why can parameter names change?
//Parameter names are local variables and used inside of a function. they are placeholders that receive the arguments passed by the caller
/* 
These two variables function the same despite parameter names being different because the arguments are still passed in the same
order by the caller (getLabelTotals(7,2);

function getLabelTotal(kitCount, spareCount) {
  return kitCount + spareCount;
}
function getLabelTotal(numberOfKits, extraLabels) {
  return numberOfKits + extraLabels;
}

Javascript will assign the first argument 7 to the first parameter and the second argument 2 to the second parameter. Parameter names
determine how values are referenced inside the function, while arguments determine which actual values are passed into it.

Javascript doesn't care what you name the parameters and cares about their position. Names can be changed
because they are just names to identify values being passed to it inside the function. Changing the names doesn't change the arguments
because Javascript assigns arguments to parameters based on their order, not names. Parameter names are just labels or boxes
Arguments are the atual items inside the boxes
 */