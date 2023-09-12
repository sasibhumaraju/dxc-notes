// Function to check if two time strings are approximately equal
function areTimesApproximatelyEqual(timeStr1, timeStr2) {
   
    const time1 = new Date(`1970-01-01T${timeStr1}`);
    const time2 = new Date(`1970-01-01T${timeStr2}`);
    const acceptableDifference = 5 * 60 * 1000; 
    const timeDifference = Math.abs(time1 - time2);
    return timeDifference <= acceptableDifference;

  }

  export {areTimesApproximatelyEqual}
  
  // Test the function
//   const time1 = "10:19 PM";
//   const time2 = "8:45 AM";
  
//   if (areTimesApproximatelyEqual(time1, time2)) {
//     console.log("The times are approximately equal.");
//   } else {
//     console.log("The times are not approximately equal.");
//   }
  