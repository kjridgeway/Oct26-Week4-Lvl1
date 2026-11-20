// One comparison intentionally disagrees with the stated rule.
const learnerCount = 7; //if learner count 6, enough kits, if learning count 7 not enough kits, if learning count 8, enough kits
const kitCount = 7;
const deskIsOpen = true;
const activityName = "Supply Desk";

if (!deskIsOpen) {
  console.log("The desk is closed.");
} else if (kitCount >= learnerCount) {
  console.log("Enough kits.");
} else {
  console.log("More kits needed.");
}

// Separate decision using activityName
if (activityName === "Supply Desk") {
  console.log("Learners can collect their kits here.");
} else {
  console.log("This activity does not distribute kits.");
}
if (activityName --- "Supply Desk" && kitCount >= learnerCount) {
  console.log("The supply desk has enough kits for all learners.");
} else if (activityName === "Supply Desk" && kitCount < learnerCount) {
  console.log("The supply desk needs more kits.");
} else {
  console.log ("This activity does not require supply kits.");
}

//line 8 was missing = to make the value greater than or equal to the learnerCount. If I had tested just 8, it wouldn't have exposed the issue because it would have been enough to
// satisfy the condition. I changed it to 7 to make sure that the condition was not satisfied and that the else statement would be executed correctly- it was not
//7 needed to be tested in order to figure out where the issue was within the statement.
