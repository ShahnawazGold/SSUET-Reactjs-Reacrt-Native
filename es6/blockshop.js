
const a = 1
let b = 'foo'

if (true) {
    let b = 'shah'
}

console.log(b);
const arr = ['one!', 'two!', 'three!', 'four!']
const [...rest] = arr

console.log(arr);


class Home {

    constructor(v1, v2){
          this.v1=v1
          this.v2= v2


    }

    static multiple(v1, v2){
       return v1 * v2
    }

    sum (){
        return this.v1 +this.v2
    }




}

const obj = new Home(2,4)

console.log(obj.sum());
console.log(Home.multiple(2,4));

const foo = ['a', 'b', 'c']
const bar = ['d', 'e', 'f']

console.log(...foo)



const defaultStyle = {
    color: 'black',
    fontSize: 12,
    fontWeight: 'normal'
  }
  
  const style = {
    ...defaultStyle,
    fontWeight: 'bold',
    backgroundColor: 'white'
  }
  
  // Note that fontWeight is 'bold', as the second
  // assignment overrode the initial assignment.
  console.log(style)


  const fetchData = async () => {
    return fetch('https://randomuser.me/api/')
  }
  
  const printData = async () => {
    try {
      const data = await fetchData()
      const json = await data.json()
      console.log(json)
    } catch(e) {
      console.error("Problem", e)
    }
  }
  
  
  console.log('====================================');
  console.log(printData());
  console.log('====================================');




