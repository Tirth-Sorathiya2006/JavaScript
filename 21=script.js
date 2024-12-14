//Nested Scope

function one() {
    const userName = "Tirth Sorathiya";

    function two() {
        const userAge = 18;
        console.log(userName);
        console.log(userAge);
    }
    // console.log(userAge); //We can not access the userAge after the scope of the function two();
    two();
}

one();

//Function two can access the variables of the function 1.


if (true) {
    const userName = "Tirth";

    if (userName === "Tirth") {
        const website = "https://m.youtube.com";

        console.log(userName);
        console.log(website);

    }
}

//Similarly like the function the nested if can access the upper variables of if statment.