//Pratice about the acync and await

function endMessage(){
    console.log('### The End ###');
}

 function getDataApi(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 3000)
    })
}

async function waitForApi(){
    let data = await getDataApi(3);
    console.log(`We get the data from api is : ${data}`);
    endMessage();
}

waitForApi();