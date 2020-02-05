//#1
// function madlib(name, subject){
//     var output = name + "'s favorite subject in school is " + subject +'.';
//     console.log(output);
//     return output;
// }
// madlib('Jean', 'math')



//#2
// var billAmount;
// var levelOfService;

// function tipAmount(billAmount, levelOfService){


//     switch (levelOfService){
//         case 'good': tipPercent = 0.2;
//             break;
//         case 'fair': tipPercent = 0.15;
//             break;
//         case 'bad': tipPercent = 0.1;
//             break;
        
//     }

// totalTip = billAmount*tipPercent;
// console.log(totalTip);
// }
// tipAmount(100, 'good')




//#3
// var billAmount;
// var levelOfService;

// function totalAmount(billAmount, levelOfService){


//     switch (levelOfService){
//         case 'good': tipPercent = 0.2;
//             break;
//         case 'fair': tipPercent = 0.15;
//             break;
//         case 'bad': tipPercent = 0.1;
//             break;
        
//     }

// totalAmount = billAmount*tipPercent+billAmount;

// console.log(totalAmount);
// }
// totalAmount(100, 'good')




//#4

// function printNumbers(start, end){
//     if (start <= end) {
//         console.log(start);
//         start++;
//         printNumbers(start, end);
//     }
// }
// printNumbers(1,10)

// var count = 0;
// while (count < 10){
//     count = count + 1;
//     console.log(count);
// }

// var count = 0;
// while (count < 10) {
//     console.log(count);
//     //count = count + 1;
//     count++;
// }

// for (var count=0; count < 10; count ++)
// {
//     console.log(count);
// }



//#5

// function printSquare (size){
//     var square="";
//     for(i=0;i<size;i++){    

//     for (j=0; j<size;j++) {
//     square+="*";    
//     }
//     console.log(square);
//     square="";     
// }
// }
// printSquare(5)


//#6
// function printBox(width, height){
//     console.log("*".repeat(width));
//     for (let i = 0; i < height - 2; i++) {
//     console.log('*' + ' '.repeat(width - 2) + '*');
// }
//     console.log('*'.repeat(width));
    
// }
// printBox(6, 4)


//#7
// function printBanner(text){
//     length = text.length;
//     console.log('*'.repeat(length + 4));
//     console.log('* ' + text + ' *');
//     console.log('*'.repeat(length + 4));

// }
// printBanner("Welcome to DigitalCrafts")


//#8
//function leetspeak(string) {
//         let leetphrase = string
//             .toUpperCase()
//             .replace(/a/gi, '4')
//             .replace(/e/gi, '3')
//             .replace(/g/gi, '6')
//             .replace(/i/gi, '1')
//             .replace(/o/gi, '0')
//             .replace(/s/gi, '5')
//             .replace(/t/gi, '7');
        
//         return leetphrase;
//     }
// console.log(leetspeak('I seriously do not know what I am doing'));


//#9
// function longLongVowels(string) {
//         let vowels = string
//         .replace(/aa/gi, 'aaaaa')
//         .replace(/ee/gi, 'eeeee')
//         .replace(/oo/gi, 'ooooo')
//         .replace(/ii/gi, 'iiiii')
//         .replace(/uu/gi, 'uuuuu');
//         return vowels;
//     }
//     console.log(longLongVowels('feed'));


//#10
// function positiveNumbers(array) {
//     newArray = array.sort();
//     while (true) {
//     if (newArray[0] < 0) {
//         newArray.shift();
//     } else {
//         break;
//     }
//     }
//         console.log(newArray);
//     return newArray;
// }

// positiveNumbers([-4, 4, 6, -3, 1, -9]);

