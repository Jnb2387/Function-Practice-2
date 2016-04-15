//Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
// getName({ name: 'Luisa', age: 25 }) should return 'Luisa'
//=======define the object first?=====//
// var women = {name: "Luisa", age: 25};
function getName(arg){
    return arg.name;
}
console.log(getName({name: "Luisa", age: 25}));




//Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
// ====totalLetters(['javascript', 'is', 'awesome']) should return 19.
//==========totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24.
function totalLetters(array){
    var letters=array.splice(",").join('');
    return letters.length;
}
console.log(totalLetters(['javascript', 'is', 'awesome']));





// created function with one parameter(argument), then created new variable which cut the comma out of the array(splice) and linked the array back together.
//returned the new variable with .length to find total number of characters.
function allLetters (again){
    var numOfLetters = again.splice(",").join("");
    return numOfLetters.length;
}
console.log(allLetters(['what','happened','to','my','function']));
console.log(allLetters(['this','i s','to','all','function']));





//Write function called 'keyValue' which takes two arguments and returns a new object with key of the first argument and the value of the second argument. 
//=============keyValue('city', 'Denver') should return Object {city: "Denver"}
function keyValue(arg1, arg2){
//=========need [] on key (first argument in object) to make it dynamic
  var obj={[arg1]:arg2};
    return obj;
}
console.log(keyValue('city', 'Denver'));





// Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, 
// as if the array was circular, i.e. arr.length+num. negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'
// negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'
//======= use array argument to find the length of the array and add the num or negative index to equal the positive value array[5-2=3] so its array[3]
function negativeindex(array, num){
     array=array[array.length+num]
     return array
}
console.log(negativeindex(['a','b','c','d','e'],-2));
console.log(negativeindex(['jerry','sarah','sally'],-1))





// Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string. The function won't actually modify
// removeM('family') should return 'faily'
// removeM('memory') should return 'eory'

function removeM(str){
var newVariableFindingIndexOfStr = str.indexOf('m');
  while(newVariableFindingIndexOfStr != -1){
    str=str.replace('m', '');
     newVariableFindingIndexOfStr = str.indexOf('m');
  }
  return str;
}
console.log(removeM('family'));
console.log(removeM('memory'));

function secondRemoval(str){
   var newVarStr=str.indexOf("r");
    while(newVarStr != -1){
        str=str.replace("r","");
        newVarStr=str.indexOf("r");
    }return str;
}

console.log(secondRemoval("road, golf, brunch, rits"));




//Write a function called 'printObject' which takes a single object argument 
// and console.log's each key-value pair in the format key 
// is value on separate lines.
//  printObject({ a: 10, b: 20, c: 30 }) should print: md a is 10 b is 20 c is 30
//  printObject({ firstName: 'pork', lastName: 'chops' }) 
// should print: md firstName is pork lastName is chops

// function printObject(obj){
//   var keys= Object.keys(obj);
//     for(i=0;i<keys.length)
   
//   console.log(keys+ 'is'+ keys[i])
// }
// console.log(printObject({ a: 10, b: 20, c: 30 }));
//==========skipped 6================//




// Write a function called 'vowels' which takes a string and returns an array of all the vowels in the string, including duplicates.
// vowels('alabama') should return ['a', 'a', 'a', 'a']
// vowels('What evil odd ducks!') should return ['a', 'e', 'i', 'o', 'u']
function vowels(str){
    var vowelsArray=['a','e','i','o','u'];
    str=str.split("");
    var arr=[];
    for(var i=0;i<str.length;i++){
        for(var j=0;j<vowelsArray.length;j++){
            if(str[i]===vowelsArray[j]){
               arr.push(str[i]);
            }
        }
    }return arr;
}
console.log(vowels('alabama'));




// Write a function called 'twins' which takes an array and returns true if every adjacent pair of items in the array is the same.
// twins(['a', 'a', 'b', 'b', 'c', 'c']) should return true
// twins(['a', 'a', 'b', 'c', 'd', 'd']) should return false
// twins(['a', 'a', 'b', 'z']) should return false
// twins(['a', 'a', undefined]) should return false
// var twins=['a', 'a', 'b', 'b', 'c', 'c'];
function twin(array){
    for(var i = 0; i < array.length; i+=2){
        if(array[i]!== array[i+1]){
       return false;}
    }return true;
}

console.log(twin(['a', 'a', 'b', 'b', 'c', 'c']));
console.log(twin(['a', 'a', 'b', 'c', 'd', 'd']));
console.log(twin(['a', 'a', 'b', 'z']));
//====why is this returning true====
console.log(twin(['a', 'a',undefined]));console.log(twin(['a', 'b', 'b', 'b', 'c', 'c']));


// Write a function called 'or' which takes an array of booleans and returns true if any one of them is true. Given an empty array, return false. 
// If you find an item that is true, the function should return true immediately and not continue checking further values.
// or([false, false, true, false]) should return true
// or([false, false, false]) should return false
// or([]) should return false
function or(boo){
    for(var i=0;i<boo.length;i++){
        if(boo[i]=== true){
            return true;
        }
    }return false;
}
console.log(or([false, false, true, false]));
console.log(or([false, false, false]));
console.log(or([]));



// Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).
// unique(['a', 'b', 'a', 'c', 'd', 'd']) should return ['a', 'b', 'c', 'd']
// unique(['todd', 'avery', 'maria', 'avery']) should return ['todd', 'avery', 'maria']
function unique(array){
    var holder=[];  //created empty array to push unique values to.
     array=array.sort();   //sorted array to group same strings next to each other
    for(var i = 0; i < array.length; i++){      // created loop to go through array
        if(array[i]!==array[i+1]){         // if statement to check if the array index is not equal to the next index
         holder.push(array[i])              // if the index is not equal then push it into the empty holder arr created earlier.
        }
    }
    return holder;
}
console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']));
console.log(unique(['todd', 'avery', 'maria', 'avery']));



