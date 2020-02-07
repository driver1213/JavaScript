
// #1 Positive Numbers
// var arrNums = [5, -9, 2, -7, 4, 8]

// let newNums = arrNums.filter(function(pos){
//     return pos > 0
// })

// console.log(newNums)


//#2 Even Numbers 
// var arrNums = [33, 4, 21, 6, 13]

// let newNums = arrNums.filter(function(even){
//     return even %2 == 0
// })

// console.log(newNums)

//#3 Squared
// var arrNums = [2, 3, 4, 5]

// let newNums = arrNums.map(function(squared){
//     return squared**2
// })

// console.log(newNums)


// #4 Cities 1
// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];

// let newCities = cities.filter(function(cooler){
//     return cooler.temperature < 70.0
// })
// console.log(newCities)


//#5 Cities 2
// var cities = [
//         { name: 'Los Angeles', temperature: 60.0},
//         { name: 'Atlanta', temperature: 52.0 },
//         { name: 'Detroit', temperature: 48.0 },
//         { name: 'New York', temperature: 80.0 } ];

// let newCities = cities.forEach(function(names){
//     console.log(names.name)
// })


//#6 Good Job!
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// let allPeople = people.forEach(function(all){
//     console.log('Good Job, ' + all + '!')
// })


//#7 Sort an array
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// var sortedNames = people.sort(function (a, b) {
//     if (a < b) return -1;
//     else if (a > b) return 1;
//     return 0;
//   });
// console.log(sortedNames);


//#8 Sort an array 2
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// var sortedNames = people.sort(function (a, b) {
//     if (a.length < b.length) return -1;
//     else if (a.length > b.length) return 1;
//     return 0;
//   });
// console.log(sortedNames);


//#9 Sort an array 3
// var arr = [
//     [1, 3, 4],
//     [2, 4, 6, 8],
//     [3, 6] ];

    
// for (var i = 0; i < arr.length; i++) {
//     total += array[i]
// }
// console.log(total)


//#10 3 Times
// function call3Times(fun) { 
//     fun(); 
//     fun(); 
//     fun(); 
// }
// function hiii() {console.log("Hello, world!")}

// call3Times(hiii)



//#11 n times

// function hiii() {console.log("Hello, world!")}

// function callNTimes(j, phrase){
//     for (var i=0; i<j;i++)
//     {
//         phrase();
//     }
// }

// callNTimes(5, hiii)




//#12 Sum an array

// var nums = ([1, 2, 5])

//     var sum = nums.reduce( function(total, amount){
//         return total + amount
//     });

//     console.log(sum)



//#13 Acronym

