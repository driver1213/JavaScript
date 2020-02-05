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



function hello (name) {
    var output = 'Hello ' + name;
    console.log(output);
    return output;
    }

    function hello(){
        console.log('hello')
    }

hello()