// CHOOSE FROM LIKES, v5
// MOSTLY WRITTEN BY I. Matveev of DMTRVK.RU
// License: Creative Commons BYNCSA v3.
// thanks to Anna for the feedback.
// 
// INSTRUCTIONES:
// 
// #1
// PASTE AND RUN THIS SCRIPT IN CONSOLE, 
// THEN SCROLL THE LIST, 
// SO THE SCRIPT WOULD GATHER 
// THE NAMES LIST FROM 
// THE LIKES SECTION OF THE POST 
// UNTIL THE NUMBER OF ADDED USERNAMES STOPS TO INCREASE
// 
// #2
// PRESS ENTER WHEN FINISHED
// 
// 
// SET THESE PARAMETERS ACCORING TO YOUR NEEDS
// 

let myAccoutName = "dmtrvk.ru"; //your account name to exclude from selection, or leave it blank if you wish to have yourself a present just in case
let howManyToSelect = 3; //number of winners

// 
// END OF SETUP, LETS RUN IT.
// 

let nameSet = new Set();
let one = document.body.querySelector('.Nm9Fw');
let two = one.querySelector('.zV_Nj');
let numberOfComments = Number.parseInt(two.querySelector('span').innerText) + 1;



window.alert('Scroll the list while the number in the console doesn\'t match the number of comments. Then click in the comment box free space (somwhere between element, so you don\'t click on a link, and press Enter.');
console.log ('Number of comments to parse:', numberOfComments);
document.addEventListener('wheel', handler = function() { // set the fucking handler for this unnamed fucntion so I can delet the event listener later

    let userNameList = document.body.querySelectorAll('.FPmhX'); // here goes the selector we search for
    

    if (userNameList.length <= 0) {
        console.log("No names found! Program aborted.")
        throw '';
    }

    for (let i = 0; i < userNameList.length; i++) {
        nameSet.add(userNameList[i].firstChild.nodeValue);
    }
    console.log('Number of uiqueueueue names found:', nameSet.size);

    if (nameSet.size >= numberOfComments) {
        document.removeEventListener('wheel', handler);
        window.removeEventListener('keyup', handler2, true);
        main(howManyToSelect, myAccoutName);
    }
});

window.addEventListener('keyup', handler2 = function (e) {
    let text = e.type +
        ' key=' + e.key +
        ' code=' + e.code +
        (e.shiftKey ? ' shiftKey' : '') +
        (e.ctrlKey ? ' ctrlKey' : '') +
        (e.altKey ? ' altKey' : '') +
        (e.metaKey ? ' metaKey' : '') +
        (e.repeat ? ' (repeat)' : '') +
        "\n";
    console.log('Pressed', text);
    if (e.key === 'Enter') {
        document.removeEventListener('wheel', handler);
        window.removeEventListener('keyup', handler2, true);
        main(howManyToSelect, myAccoutName);
    }
}, true);


function main(howManyToSelect, myAccoutName)  {
    console.log('> Number of unique names to choose from:', nameSet.size);
    let keys = Array.from(nameSet.keys());
    let haveIt = [];
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log("Randomly selected ", howManyToSelect, " from ", keys.length, " keys:");
    for (let i = 0; i < howManyToSelect; i++) { //CHANGE THIS TO THE NUMBER OF WINNERS
        //console.log(keys[Math.floor(Math.random() * keys.length)]);
        let randomNumber = generateUniqueRandom(keys.length, haveIt);
        if (keys[randomNumber] == myAccoutName | keys[randomNumber] == undefined) { //CHANGE THIS TO EXCLUDE YOUR ACCOUNT
            i--;
        } else {
            console.log("№", i + 1, " —", "@", keys[randomNumber]);
        }
    }
}

function generateUniqueRandom(maxNr, haveIt) {
    //Generate random number
    let random = (Math.random() * maxNr).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if (!haveIt.includes(random)) {
        haveIt.push(random);
        return random;
    } else {
        if (haveIt.length < maxNr) {
            //Recursively generate number
            return generateUniqueRandom(maxNr);
        } else {
            console.log('No more numbers available.')
            return false;
        }
    }
}