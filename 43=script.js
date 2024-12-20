//Pratice of promise

//Promises are use to overcome the problem of callbacck hell

//Creation of promise
const p1 = new Promise((resolve, rejected) => {
    const randamNum = Math.random();

    if (randamNum < 0.5) {
        console.log(`The random number is : ${randamNum}`);
        resolve('Sucess');
    } else{
        rejected('Somthing went wrong!!!');
    }
});

//Handling the promise

p1
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })