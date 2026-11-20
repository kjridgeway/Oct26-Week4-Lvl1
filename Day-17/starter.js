const activityName = "Drawing practice";
const capacity = 16;
let registered = 9;
let seatsLeft = capacity - registered; // 7 should be the value of seatsLeft

console.log(activityName);
console.log("Before:", seatsLeft);
registered = registered + 2; // 11 should be the value of registered
console.log("Registered:", registered);
seatsLeft = capacity - registered; // Recalculate seatsLeft
console.log("After:", seatsLeft); // 5 should be the value of seatsLeft, 7 was before because were were not calulating seatsLeft after changing the value of registered


