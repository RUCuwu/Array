function greeting(){
    sayHi();
}
function sayHi() {
    return 'Hi!';
}
greeting();






console.log('first'); // 1. Call log (print 'first')

setTimeout(() => { //2. Call setTimeout, WEB API sets timer
    console.log('second');
}, 1000);

console.log('third'); // 3. Call log (print 'third')

// 4. When the WEB API finishes, it passes the call back (from the setTimeout) to the Task Queue
// 5. The Event Loop is alwatyys running... sees that there's soemthing in the Task Queue
//       and also sees the Call Stack is empty. When this happens, it moves the first call back 
//       to Call Stack.