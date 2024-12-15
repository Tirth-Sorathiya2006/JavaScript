//Promises in JavaScript

//Promise : In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to work with asynchronous code in a cleaner and more structured way, avoiding "callback hell."

//Creation of the Promise
// const promise1 = new Promise(function(resolve, reject){
//     //Do an async tasks
//     setTimeout(function(){
//         console.log('Async task is compeleted!!!');
//         resolve();
//     }, 1000);
// });

// //Consuming the Promise
// promise1.then(function(){
//     console.log('Promise consumed');
// }); //then() have a relation with the resolve parameter of the promise.

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Promise2 is completed!!!');
//         resolve();
//     }, 1000);
// }).then(() => {
//     console.log('promise2 is consumed!!!');
// });

// const promise3 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve({userName: 'Tirth', userAge: 18})
//     })
// });

// promise3.then((user) => {
//     console.log(user); //What ever we are passing the resolve it will we get at then

// })

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({ userName: 'Tirth Sorathiya', userAge: 18, userEmail: 'tirth@google.com' });
//         } else {
//             reject('ERROR: Somthing went wrong!!!')
//         }
//     })

// });

// promise4.then((user) => {
//     console.log(user);
//     return user.userName; //What ever the return by the first then it is come to the parameter as a second then.
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log('The promise is either resolved or rejected.');
// });

// const promise5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ userName: 'Tirth Sorathiya', userAge: 18, userEmail: 'tirth@google.com' });
//         } else {
//             reject('ERROR: Somthing went wrong!!!');
//         }
//     }, 1000);
// });

// async function consumePromise5() {
//     try {
//         const response = await promise5;
//         console.log(response);
//     } catch (reject) {
//         console.log(reject);
//     }
// }

// consumePromise5();

// const promise6 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ userName: 'Tirth Sorathiya', userAge: 18 });
//         } else {
//             reject('ERROR is occured!!!');
//         }
//     });
// });

// async function getAllusers() {
//     try {
//         const response = await promise6;
//         console.log(response);

//     } catch (rejectStatment) {
//         console.log(rejectStatment);
//     }
// }

// getAllusers();

// async function getObjectOfGithubApi(){
//         async function getObjectOfGithubApi() {
//             try {
//                 const response = await fetch('http://api.github.com/users/hiteshchoudhary');
//                 const data = await response.json(); // Correctly parse the JSON response
//                 console.log(data);
//             } catch (error) {
//                 console.log(error);
//             }
//         }
// }

fetch('http://api.github.com/users/hiteshchoudhary').then((response) => {
    return (response.json());
}).then((data) => {
    console.log(data);
}).catch(() => {
    console.log('ERROR: Somthing went wrong.');
});