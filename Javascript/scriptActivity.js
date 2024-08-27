// console.log("Hello Wrld");

// let num = 10;
// if (num>18){
//     alert("Access Granted");
// } else{
//     alert('Acess Denied')
// }

let data = 'global';

function demo() {

   console.log(data);

   let data = 'local';

}

demo();