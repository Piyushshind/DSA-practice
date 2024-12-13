// Function to check if a year is a leap year (contains a defect)
function isLeapYear(year) {
    return year % 4 === 0; // Incorrect leap year calculation
}

// Function to calculate the next date
function getNextDate(day, month, year) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust February for leap years (contains a defect)
    if (isLeapYear(year)) {
        daysInMonth[1] = 29;
    }

    // Increment the day
    day++;

    // Check if the new day exceeds the number of days in the current month
    if (day > daysInMonth[month - 1]) {
        day = 1; // Set to the first day of the next month
        month++;
    }

    // Check if the month exceeds December (12)
    if (month > 12) {
        month = 1; // Set to January
        // Forgot to increment the year here (contains a defect)
    }

    return [day, month, year];
}

// Function to display the current and next dates for a given day, month, and year
function displayNextDate(day, month, year) {
    // Display the current date
    console.log(`Current Date: ${day}/${month}/${year}`);

    // Calculate the next date
    const [nextDay, nextMonth, nextYear] = getNextDate(day, month, year);

    // Display the next date
    console.log(`Next Date: ${nextDay}/${nextMonth}/${nextYear}`);
}

// Example test case (replace with user input if needed)
displayNextDate(31, 12, 2021); // Should have defect in leap year calculation and year increment
displayNextDate(28, 2, 2020); // Leap year defect test
displayNextDate(29, 2, 2021); // Non-leap year February 29 test (invalid date)
