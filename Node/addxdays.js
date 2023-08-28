const  {addDays}  = require('date-fns');

// Current date
const currentDate = new Date();

// Number of days to add
const daysToAdd = 100;

// Calculate the new date after adding days
const newDate = addDays(currentDate, daysToAdd);

console.log('Current Date:', currentDate);
console.log(`Date after ${daysToAdd} days:`, newDate);

