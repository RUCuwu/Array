sayHello()

function sayHello() {
    console.log('Hello! (form declaration)')
}

// a & b are parameters
function add(a,b){
    return a + b
}

// 5 and 10 are arguements
let sum = add(5,10) // order matters. each number will represent an input.

const sayHello2 = function(){
    console.log('Hello! (form expression')
}

sayHello2()

// arrow functions
const sayHello3 = (a, b) => {
    return a + b
}

// or you can do this ...

// const sayHello3 = (a, b) => a + b

//////////////////////////////////////////

// let sum = add(5,10) 

function computeArea (width, height) {
    let area = width*height;
    console.log('The area of a rectangle with a width of ' 
        + width + ' and a height of ' + height + ' is ' + area + ' square units.');
}

computeArea(2, 5);

// log(5, 10, 4, 70, 100, 11000, 1)



const test = (test1, ...arr) => {
    console.log(arr)
    return {
      name: test1,
      skills: arr
    }
  }

  let result = test(1, 2, 3, 4, 5, 6, 7, 89);


  console.log(result);
 
  function test1(test2, ...arrow) {
    return {
      name: test2,
      skills: arrow
    }
  }

  let must = test1(5, 10, 15, 20, 25, 30, 35, 40, 45, 89);

console.log(must);

let array = ['blue', 'orange', 'white'];

array.forEach (function(color) {
    console.log(color);
});
