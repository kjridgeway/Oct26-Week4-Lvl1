const activityName = "Drawing practice";
const capacity = 16;
let registered = 9;
let seatsLeft = capacity - registered; // 7 should be the value of seatsLeft

console.log(activityName);
console.log("Before:", seatsLeft);
registered = registered + 2; // 11 should be the value of registered
console.log("Registered:", registered);
console.log("After:", seatsLeft - registered); // 5 should be the value of seatsLeft, but it is still 7 because we did not update the value of seatsLeft after changing registered. 
// We need to recalculate seatsLeft after updating registered.

