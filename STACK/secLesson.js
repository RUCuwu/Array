// let person = {
//     eyeColor: 'brown',
//     legs: 2,
//     age: 50,
//     talk: function() {
//         console.log('Hello')

//     },
//     walk: () => {
//         console.log('...')
//     },
//     run(){
//         console.log('...')
//     }
// }

// person.age
// person['age']
// person.talk()

const person = {
    name: {
      first: 'Elyan',
      last: 'Kemble',
    },
    age: 32,
    location: {
      city: 'Garland',
      state: 'Texas',
      zip: 75040
    },
    occupation: 'Front-End Developer'
  }
  
  function introduce() {
    console.log('')
    console.log(`Hello, my name is' {this.name.first} + {this.name.last}, 'and I'm a' + {this.age}'-years-old' + {this.occupation} 'from' + {this.location.city}, + {this.location.state}'!`);
  }

  person.introduce = introduce

  person.introduce()