// CHOOSE FROM COMMENTS, v1
// MOSTLY WRITTEN BY I. Matveev of DMTRVK.RU
// THANKS TO GeorgeCrisan from https://forum.freecodecamp.org/t/how-to-make-math-random-not-repeat-same-numbers/417973/3 for the generateUniqueRandom function
// License: Creative Commons BYNCSA v3.

// here you can set it up:

let myAccoutName = "dmtrvk.ru"; //your account name to exclude from selection
let howManyToSelect = 5; //number of winners
let numberOfCommentPagesToOpen = 100; // number times to click on the button
let timeToWaitBetweenClicks = 500; // in milliseconds, set this according to your connection speed, so the browser would have time to load the button to expand the comments list.

// end of setup, lets run it.
let haveIt = [];
(function myLoop(i) {
    setTimeout(function() {
        try {
            document.querySelector('.dCJp8.afkep').click();
            console.log('>')
        } catch (e) {
            console.log('Can find any button to click, moving on.')
            mainProcess(howManyToSelect); //how many to select
            return;
        }
        console.log('>'); //  your code here                
        if (--i) myLoop(i); //  decrement i and call myLoop again if i > 0
    }, timeToWaitBetweenClicks)
})(numberOfCommentPagesToOpen); //  pass the number of iterations as an argument


function generateUniqueRandom(maxNr) {
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

function mainProcess(howManyToSelect) {

    let userNameList = document.querySelectorAll(".sqdOP.yWX7d._8A5w5.ZIAjV "); // here goes the selector we search for
    console.log(userNameList.length);
    nameSet = new Set();

    if (userNameList.length <= 0) {
        console.log("no names found! program aborted")
        throw '';
    }

    for (let i = 0; i < userNameList.length; i++) {
        nameSet.add(userNameList[i].firstChild.nodeValue);
        console.log(userNameList[i].firstChild.nodeValue);
    }

    console.log(nameSet.size);
    let keys = Array.from(nameSet.keys());

    console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log("Selected randomly:");

    for (i = 0; i < howManyToSelect; i++) { //CHANGE THIS TO THE NUMBER OF WINNERS
        //console.log(keys[Math.floor(Math.random() * keys.length)]);
        randomNumber = generateUniqueRandom(keys.length);
        if (keys[randomNumber] == myAccoutName | keys[randomNumber] == undefined) { //CHANGE THIS TO EXCLUDE YOUR ACCOUNT
            i--;
        } else {
            console.log("№", i + 1, " —", "@", keys[randomNumber]);
        }
    }
}
