const readlineSync = require('readline-sync'); // Imports the readline Sync module

function isValidPassword(password) {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    
    if (password.length < minLength) { // Check if password is less than 8 characters
        console.log("Password must be at least 8 characters long."); // Message if less than 8 characters
        return false; // exit the function early and Print message
    }
    if (!hasUppercase) { // checks to see if password has an uppercase letter
        console.log("Password must contain at least one uppercase letter."); // Message if no uppercase letter
        return false; // exit the function early and Print message
    }
    if (!hasNumber) { // checks to see if password has a number
        console.log("Password must contain at least one number."); // Message if no number
        return false; // exit the function early and Print message
    }
    return true;  // If all conditions are met, return true
}

let password; // Declare password variable
do { // do while loop
    password = readlineSync.question('Enter a password: ', { hideEchoBack: true }); // Prompt user to enter password while hiding it
} while (!isValidPassword(password)); // Loop until password is valide
 
console.log('Password is valid! You have been successful!'); // Print message if password is valid