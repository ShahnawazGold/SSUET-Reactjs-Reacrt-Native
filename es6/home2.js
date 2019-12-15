


// 2) Block Scope
// 3) Arrow Functions
// 4) Extended Parameter Handling
// 5) Template Literals
// 6) Extended Literals
// 7) Enhanced Object Properties
// 8) De-structuring Assignment
// 9) Modules
// 10) Classes
// 11) Iterators
// 12) Generators
// 13) Collections
// 14) New built in methods for various classes
// 15) Promises

var a = 2;

let b = 3

if(true){

 let b = 6

    console.log('apptron');
    
}

console.log(b)

// const d = 4

// let f = 3

// let g = 9


// let h = f +g

// console.log(h);


//======= scope === function ////




function abc() {
    console.log("apptron");
}

abc()

//anonymous 
var f = function () {
    return "heloo"
}

console.log(f());

var f2 = function (n1, n2) {
    return n1*n2
}

function product() {
    var result ;
    result= f2(2,6)

    console.log(result);
}
product()


//Lambda functions

var foo = () => 10

console.log(foo());


var msg = () => {

    console.log("arrow");
}

msg()

var msg2 = x => {
    console.log(x);
}

msg2(200)


//===========//

var person = {
    name : "apptron",
    last :"technologies "
}

console.log(person.name);
console.log(person.last);


//=== map

let map = new Map();

map.set('name', 123)

console.log(map.get('name'))

//console.log(map.delete('name'))
console.log(map.size)




let map2 = new Map([

      [false , 'no'],
      [true , 'yes']

])


map2.forEach( (vale,key) => {
    console.log(vale,key)
})




//================


//=====


class SSUET {

    constructor(){

        console.log('constructor ')
    }


       display(){
           console.log('apptron tech')
       }

}

let obj2 = new SSUET();

obj2.display()

//===========================inhertance 

class Cyber {
      
    constructor(){
         console.log(" constructor Cyber");
    }

}

class Tesla extends Cyber {
          
    constructor(){
        super();
        console.log(" constructor Tesla");
   }
}

let obj3 = new Tesla();




























































































