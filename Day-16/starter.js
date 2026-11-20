console.log(typeof 12); // "number"
console.log(typeof 7); // "string", replaced "12" with 7, will return "number" not "string"
console.log(typeof false); // "boolean"
console.log(typeof "false"); // "string"

// Even though false and "false" appear to be the same word, JavaScript treats them differently 
// because of the quotation marks. Without quotes, false is a boolean keyword representing a 
// logical true/false statement. Putting quotes around "false" tells JavaScript to ignore 
// the logical meaning and treat it purely as plain text, which will make it a string.