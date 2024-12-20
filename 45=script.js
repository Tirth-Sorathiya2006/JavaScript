//fetch the API.

console.log('Task 1...');

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await x.json();
    console.log(data);

    console.log('Task 2...');
    console.log('Task 3...');
}

getData();

console.log('Task 4...');