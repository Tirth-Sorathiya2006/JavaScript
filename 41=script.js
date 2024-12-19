//fetch in JavaScript

fetch('http://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return (response.json());
}).catch((err) => {
    console.log(err);
});

//fatch done two work

//1. It reserv the Data field in the memory and also reserv onfulfield[] and onRejection[] array which is not accessabale
//2. It is also send the network request to browser or server if it get any reply then it is stored in onfulfield[] array and if request is not found to server then it is provide the massage onRejection[] array so we get the answer as a data (either responce or rejectioni in reserved data field and by using the variable on fetch we get this data).Here note that data, onfulfield[] and onRejecction are not accessable.
//3. 404 responce is also the part of onfulfield[] meaning it is a proper survar risponce it is not a rejection.