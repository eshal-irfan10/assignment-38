// function power(a, b) {
//     let result = 1;
//     for (let i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }
// console.log(power(2, 3)); 
// console.log(power(5, 4));
// console.log(power(7, 2)); 
// function isLeapYear(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return true;
//             } else {
//                 return false;
//             }
//         } else {
//             return true;
//         }
//     } else {
//         return false;
//     }
// }
// console.log(isLeapYear(2020));
// console.log(isLeapYear(1900)); 
// console.log(isLeapYear(2000)); 
// console.log(isLeapYear(2023)); 
// Function to calculate the semi-perimeter (S)
// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }
// function calculateTriangleArea(a, b, c) {
//     var S = calculateSemiPerimeter(a, b, c);
//     // Using Heron's formula to calculate the area
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }

// // Example usage
// var a = 5;
// var b = 6;
// var c = 7;
// var area = calculateTriangleArea(a, b, c);

// console.log("The area of the triangle is: " + area)
// function calculateAverage(marks) {
//     const total = marks.reduce((sum, mark) => sum + mark, 0);
//     return total / marks.length;
// }


// function calculatePercentage(marks, totalMarks) {
//     const total = marks.reduce((sum, mark) => sum + mark, 0);
//     return (total / totalMarks) * 100;
// }


// function mainFunction(subject1, subject2, subject3) {
//     const marks = [subject1, subject2, subject3];
//     const totalMarks = 300; // Assuming each subject is out of 100 marks

//     const average = calculateAverage(marks);
//     const percentage = calculatePercentage(marks, totalMarks);

//     console.log(`Average Marks: ${average}`);
//     console.log(`Percentage: ${percentage}%`);
// }
// mainFunction(85, 90, 78);
// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1; 
// }
// console.log(customIndexOf('hello', 'e')); // 1
// console.log(customIndexOf('hello', 'l')); // 2
// console.log(customIndexOf('hello', 'z')); // -1
// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1; 
// }
// console.log(customIndexOf('hello', 'e')); // 1
// console.log(customIndexOf('hello', 'l')); // 2
// console.log(customIndexOf('hello', 'z')); // -1
// function countVowelPairs(text) {
//     const vowels = 'aeiou';
//     let count = 0;

//     for (let i = 0; i < text.length - 1; i++) {
//         const currentChar = text[i].toLowerCase();
//         const nextChar = text[i + 1].toLowerCase();

//         switch (true) {
//             case (vowels.includes(currentChar) && vowels.includes(nextChar)):
//                 count++;
//                 break;
//         }
//     }

//     return count;
// }


// console.log(countVowelPairs('This is an example of a sentence with vowel pairs.')); // 3
// console.log(countVowelPairs('Look at these cool vowels.')); // 2
// function kmToMeters(km) {
//     return km * 1000;
// }

// function kmToFeet(km) {
//     return km * 3280.84;
// }

// function kmToInches(km) {
//     return km * 39370.1;
// }

// function kmToCentimeters(km) {
//     return km * 100000;
// }

// function printConversions(km) {
//     console.log(`Distance: ${km} km`);
//     console.log(`In meters: ${kmToMeters(km)} meters`);
//     console.log(`In feet: ${kmToFeet(km)} feet`);
//     console.log(`In inches: ${kmToInches(km)} inches`);
//     console.log(`In centimeters: ${kmToCentimeters(km)} centimeters`);
// }

// const distanceInKm = 5; 
// printConversions(distanceInKm);
// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const overtimeRate = 12.00;

//     if (hoursWorked > regularHours) {
//         const overtimeHours = hoursWorked - regularHours;
//         return overtimeHours * overtimeRate;
//     } else {
//         return 0;
//     }
// }


// const hoursWorked = 45; 
// const overtimePay = calculateOvertimePay(hoursWorked);
// console.log(`Overtime Pay: Rs. ${overtimePay}`);
// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const overtimeRate = 12.00;

//     if (hoursWorked > regularHours) {
//         const overtimeHours = hoursWorked - regularHours;
//         return overtimeHours * overtimeRate;
//     } else {
//         return 0;
//     }
// }


// const hoursWorked = 45; 
// const overtimePay = calculateOvertimePay(hoursWorked);
// console.log(`Overtime Pay: Rs. ${overtimePay}`);
