// {<script>
//     document.body.innerHTML = 
//     "Hello World!";
// </script>

// console.log('Hello World');

// "Hello!"
// 'Hello!'
// `Hello
// There!
// `

// "Hello" + " " + "There"

// var veryLongVariableName = "";
// // Yes!
// var very_long_variable_name = "";
// // Nope.

// var hey = "Hello There";
// hey.length
// // 11

// var undefined; //Undefined
// var number = 4;
// var float = 4.1;
// var string = "hello world";

// var number = 4;
// var float = 4.1;

// var emptyString = "";
// var string = 'This is a string';
// var string = "a"; 

// var concat = "hello" + "world"; //helloworld
// var concat2 = 4 + "world"; //4world
// var length = concat2.length; //6
// var indexWorld = concat.indexOf('world'); //5

// console.log(concat);
// console.log(concat.indexOf("world"));

// var boolean = true;
// console.log(boolean);

// var not = !boolean; //false
// console.log(not)

// var and = boolean && false; //false
// console.log(and);

// var or = boolean || false; // true;
// var equals = true == false; //false;

// var age = 20;

// if (age >= 21) {
//     console.log("You get free beer");
// }else if (age < 18){
//     console.log("What are you even doing here?");
// }else{
//     console.log("Sorry no beer for you");
// }

// var a = 4;
// var b = 4;

// if (a == b){
//     console.log("equality")
// }

// expr = "Papayas";
// if(expr == 'Oranges')
// {
//     console.log('Oranges are $0.59 a pound.');
// }
// else if(expr == 'Mangoes')
// {   console.log('I love mangoes')
// }
// else if(expr == 'Papayas')
// {
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
// }
// else
// {
//     console.log('Sorry, we are out of ' + expr + '.');
// }


// var expr = 'Papayas';

// switch(expr){

//     case 'Oranges':
//         console.log('Oranges are $0.59 a pound')
//         break;
    
//     case 'Mangoes':
//         console.log('Mangoes, mangoes, mangoes!')
//         break;

//     case 'Papayas':
//         console.log('Papayas')
//         break;

//     default:
//         console.log('nothing')
//         break;

// }


// var count = 0;

// while(count < 10){
//     console.log(count);
//     //count = count +1;
//     count++;
// }


// var lottoNum = []

// lottoNum.push(3)

// console.log(lottoNum);

// lottoNum.push(34);

// console.log(lottoNum);

// lottoNum.pop();

// console.log(lottoNum);



// var lottoNums = [23, 11, 43, 19, 37, 16];
// //console.log(lottoNums[2]);

// lottoNums.shift() //removes the
// console.log(lottoNums)


// slice
// var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
//  var newAnimals = animals.slice(2, -1);

//  console.log(animals);
//  console.log(newAnimals);


// var words = 'oh hey how is it going';
// newArray = words.split('');

// // var newArray = words.split('is');
// console.log(reverse)
// console.log(newArray);
// var words2 = newArray.join(' ');
// console.log(words2);


// newArray.reverse();


// var characterSheet = {
//     name: 'tim berners-lee',
//     title: 'sir',
//     powers: 'invent the web'
// }

// console.log(characterSheet);

// delete characterSheet["title"];
// console.log(characterSheet);


// var key = 'name';
// console.log(characterSheet[key]);

// var keys = ['name', 'title', 'powers'];
// for (var i=0; i<keys.length; i++){
//     var keyName = keys[i];
//     console.log(characterSheet[keyName]);
// }



// function hello (name) {
//     var output = 'Hello ' + name;
//     console.log(output);
//     return output;
//     }

//     function hello(){
//         console.log('hello')
//     }

// hello()





// function createlink(textContentt,theClassname,site){
//     var link= document.createElement('a');
//     link.textContent= textContentt;
//     link.classname= theClassname;
//     link.setAttribute("href",site);
//     return link
// }

// var info = createlink("Alex", "DC", "google.com")
// console.log(info)


// function link1(theContent, theclassName, site){
//     var link = document.createElement('a');
//     link.textContent = theContent;
//     link.className = theclassName;
//     link.setAttribute("href", site):
//     return link
// }

// var info = createLink("HighOnCoding", "nav-item nav-link active", )




// var x = 1;

// var x = 1;
// if (x === 1) {
//   var x = 2;
//   console.log(x);
//   // expected output: 2
// }
// console.log(x);
// // expected output: 1

/////////

// function varTest() {
//     var x = 1;
//     if (x===1) {
//       var x = 2;  // same variable!
//       console.log(x);  // 2
//     }
//     console.log(x);  // 2
//   }
//   varTest()

  ////////////

//   function letTest() {
//     let x = 1;
//     if (x === 1) {
//       let x = 2;  // different variable
//       console.log(x);  // 2
//     }
//     console.log(x);  // 1
//   }
//////////////////////


// function greeting (name){
    
//     return "what's up " + name

// }

// let result = greeting("Kazim");
// console.log(result);


// var add = function(num1, num2){
//     return num1 + num2
// }

// var subtract = function(num1, num2){
//     return num1 - num2
// }

// let calc = function(num1, num2, opFunction){
//     return opFunction(num1, num2)
// }

// let result = calc(3, 4, subtract)

// console.log(result)
/////////////////////


// let arr = [2, 5, 6, 8, 9];

// for (let index = 0; index < arr.length; index++){

// }
/////////

// let arr = [0, 1, 2, 3, 4, 5]
// // let newArr = []
// let newArr = arr.map(function(element){
//     return 2* element;
// })
// console.log(newArr)

////////////////////
// const companies = [
//     {name: "Company One", category: "Finance", start: 1981, end: 2003},
//     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//     {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//     {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//     {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//     {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//     {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
//     ];
//     const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

    // companies.forEach(function(company){
    //     console.log(company.name)
    // })
///////////////
    
    // let arr = [1981, 1992, 1999, 1989, 2009, 1987, 1986, 2011, 1981]
    // let newArr = arr.map(function(year){
    //     return year-6;
    // })
    // console.log(newArr)
///////////////////

    // let newCompanyList = companies.map(function(company){
    //     company["start"] = company.start - 5;
    //     return company
    // })
    // console.log(newCompanyList)
//////////////////////////////

// let arr = [45, 1, 23, -3, 4, -5];

// let newArr = arr.filter(function(arrElement){
//     return arrElement < 10
// })

// console.log(newArr)
///////////////////////

// let newCompany = companies.filter(function(company){

//     return company.category = "Retail";

// })

// console.log(newCompany)

/////////////////////////

// let arr = [2, 5, 6, 8, 9]

// let myBoolean = arr.some(function(num){

//         return num < 5
// })

// console.log(myBoolean)