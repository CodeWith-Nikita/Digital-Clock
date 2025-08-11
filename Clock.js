
// const date = new Date();
// console.log(date);


// // NESTED OBJECTS IN JS

// class Person{
//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }


// }

// class Address{
//     constructor(street, city, country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new Person("Spongebob", 32, "128 conch St.",
//                                             "Bikni Bottom",
//                                             "Int. Waters"
// );


// const person2 = new Person("Mark Zukerberg", 40, "120 conch St.",
//                                             "Bikni Bottom",
//                                             "Int. Waters"
// );


// const person3 = new Person("Elon musk", 42, "135 conch St.",
//                                             "Bikni Bottom",
//                                             "Int. Waters"
// );

// console.log(person2.address);



//----------------- DIGITAL CLOCK PROGRAM -------------------

function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours%12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);;
    const seconds = now.getSeconds().toString().padStart(2,0);;
    const timeStrings = `${hours} : ${minutes} : ${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeStrings;
}

updateClock();
setInterval(updateClock, 1000);