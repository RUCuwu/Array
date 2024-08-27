let arr = new Array(2, 3, 4);
let arr2 = Array(5, 6, 7);
let arr3 = [8, 9, 10];

console.log(arr);
console.log(arr2);
console.log(arr3);

let movies = ['Beauty and The Beast', 'Deadpool 2', 'How to Train a Dragon', 'Spice'];

let movies2 = ['Up', "All Dogs Go to Heaven", 'Norbit'];

let movieString = movies.join(". ")

let movieArr = movieString.split(". ")

movies.push('Peral', 'Train to Busan')

movies.unshift('The Shining')

console.log(movies)

let removedElement = movies.pop()
console.log(removedElement)

console.log('before splice:')
console.log(movies)

movies.splice(4, 2, 'Cars 2', 'Deadpool 3', 'Planes')

// console.log(splicedElements)
 
console.log('After Splice')
console.log(movies)

let array1 = [5, "hello", true, null, undefined,[]];

let numArray = [
    [
        [7,8,9],
        [10,11,12],
        [13,14,15],

    ]
];

console.log(numArray[0][2][2])
let twoD = numArray.flat(2)
console.log(twoD);
console.log(twoD[8])

movies2.forEach((movie, i) => {
    // console.log(i +  ')'+ movie)
    console.log(movie + ' ' + movie.length);
})

for(let movie of movies2) {
    console.log(movie + ' ' + movie.length);
}

let brandNewMoviesArr = ["", ...movies2]

console.log(movies2)
console.log(brandNewMoviesArr)

// Object Oriented Programming (OOP) *May show up in interviews*

let myObj = {
    Hint: "Main Character",
    Hint2: 10,
    Hint3: false,
    Hintt4: [5, 6, 7],
}

const vehicle = {
    color: "green",
    hp: 400,
    year: 2000,
    "active registration": "May 8, 2000"
}

// for in loop, good for objects
for(let key in vehicle){
    console.log(key);
    console.log(vehicle[key])
}

console.log(vehicle)

delete vehicle.year

// access value of an object 
console.log(vehicle['year'])
console.log(vehicle["active registration"])

// another way
console.log(vehicle.year)
console.log(vehicle.year + vehicle.hp)

const vehicle2 = {
    color: "orange",
    year: 2015,
    make: "Mitsubishi",
    engine: {
        cylinders: 4,
        hp: 300,
        size: 3.2
    }
}

console.log(vehicle2.engine.hp)
console.log(vehicle2['engine']['hp'])

let newArr = [1]
let newArr2 = [1]

let cat = {
    name:"Kenobi",
    age: 2,
    favoriteHobby: ["Sleeping"],
    canChillwhenDinnertime: false,
    canMeowinMyface: true,
 }

// cat.canChillwhenDinnertime = true

console.log(cat.whiskers)

if(cat.whiskers){
    console.log('None');
} else {
    console.log("no whiskers")
}

console.log(cat.canChillwhenDinnertime)