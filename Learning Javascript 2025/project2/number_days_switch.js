//get the number from the user
const prompt = require('prompt-sync')()

const dayNum = prompt("Enter the Number of the day of the week: ")

//check its which day

switch (dayNum) {
    case '1':
        console.log('Sunday')
        break;
    case '2':
        console.log('Monday')
        break;
    case '3':
        console.log('Tuesday')
        break;
    case '4':
        console.log('Wednesday')
        break;
    case '5':
        console.log('Thursday')
        break;
    case '6':
        console.log('Friday')
        break;
    case '7':
        console.log('Saturday')
        break;
    default:
        console.log("Invalid Day!!")
        break;
}