// 1

// var number = 0;

// while (number < 20) {
//     console.log(number);
//     number++
//     if (number > 12) {
//         break;
//     }
// }

// 2

// for (var i = 0; i < 20; i++) {
//     console.log(i);
//     if (i >= 11) {
//         break;
//     }
// }

// var numbers = [10, 12, 15, 22, 27, 34, 39, 45, 57, 89, 100, 140, 160, 200, 230,]

// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     console.log(number);
//     if (number > 100) {
//         break;
//     }
// }


// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     if (number > 80) {
//         continue;
//     }
//     console.log(number);

// }



// copied from programming hero
// 54, 35, 21, 98, 23, 101, 45, 67
var numbers = [100, 120, 30, 40, 50, 60, 70, 80, 90, 115, 80, 70, 60, 40, 20];
// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     console.log(number);
//     if (number > 90) {
//         break;
//     }
// }


for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 90) {
        continue;
    }
    console.log(number);
}