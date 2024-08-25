//arithmetic operations
console.log("sum=",10+5)
console.log("sub=",10-5)
console.log("multi=",10*5)
console.log("division=",10/5)
console.log("power=",10**5)
console.log("reminder=",10%5)

//comparison operators
console.log(5 == 5);  // true
console.log(2 == "2");  // true
console.log("hello" == "Hello");  // false

console.log(2 != 2);  // false
console.log(2 != "2");  // false
console.log(2 != 3);  // true

console.log(2 === 2);  // true
console.log(2 === "2");  // false

console.log(3 > 2);  // true
console.log(4 > 4);  // false
console.log(2 > 5);  // false

console.log(2 < 5);  // true
console.log(4 < 4);  // false
console.log(3 < 2);  // false

console.log(2 <= 5);  // true
console.log(4 <= 4);  // true
console.log(3 <= 2);  // false

//comparison with null
//mostly avoid these type of comparisons
console.log(null<0)                 //the reason is that equality checks == and comparisons
console.log(null>0)                //> < <= >= work differently. 
console.log(null>=0)              //comparisons converted null to a number, treating it as 0.
console.log(null==0)             //Thats why null>=0 is true and null>0 is false.

//logical operators
const x = 5, y = 3;
console.log((x < 6) && (y < 5));        // Output: true
console.log((x < 4) || (4 >= x));      // false


