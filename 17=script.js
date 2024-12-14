//Objects destructuring

const course = {
    courseName: "JavaScript in Hindi",
    price: 999,
    courseTeacher: "Tirth Sorathiya"
};

const {courseTeacher} = course; //It same works as a course.courseTeacher or course["courseTeacher"]
console.log(courseTeacher); //We get the "Tirth Sorathiya" as a answer.

const {price, courseName} = course; //We can destructure the multiple values also from object.
console.log(price);
console.log(courseName);

const{price: p} = course; //We can change the name also by using the colon(:) during the destructuring of the objects.
console.log(p); //999 as a answer.

//Basic concept of APIs.

// JASON formate: 

// {
//     "userName": "Tirth Sorathiya",
//     "userEmail": "tirth@google.com",
//     "userAge": 18
// }

// JASON second formate:

// [
//     {},
//     {},
//     {}
// ]