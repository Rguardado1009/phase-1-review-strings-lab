// Write your code in this file!
let currentUser = 'Ronald';

let welcomeMessage = `Welcome to Flatbook, ${currentUser} !` ;

let excitedWelcomeMessage = welcomeMessage.toUpperCase();

let firstInitial = currentUser[0];
let restOfName = currentUser.slice(1);

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;