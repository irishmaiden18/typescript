

function App() {

  // explicit typing
  // myName has been typed as a string, so therefore it cannot be typed as anything else, but a string
  let myName: string = "Tim Typescript"
  // myName = 10
  myName = "Tanya Typescript"

  let count: number
  count = 10

  let isCloudy: boolean
  isCloudy = true

  // type inference
  // when you assiugn a typescript variable for the first time, typscript will infer the type of the variable without needing to declare it yourself
  // because we initially set myNum to 4, it will be considered a number type and trying to change that type will give you an error
  let myNum = 4
  myNum = "bob" // doesn't work because we already definted it as a number 
  myNum = 6 // works! because it is another number
  
  // Arrays
  // must be an array of strings
  let fruitsArray: string[] = ["apple", "mango", "strawberry"]
  //fruitsArray.push(7); --gets an error because 7 is not a string
  fruitsArray.push("kiwi")

  // type inference knows we have an array of numbers
  let numsArray = [1,2,3,4,5]
  // numsArray.push("string"); -- gets an error because "string" is not a number

  // objects
  let fruit: {
    name: string,
    rating: number
  }

  fruit = {
    name: "orange",
    rating: 9
  }

  // type alias -- allows us to create custom re-usable types, so that everything you assign that type has to follow a certain structure
  // type aliases allow us to create custom reusable types that streamline the process for creating objects

  /*
    type: TypeName = {
      property: propertyType
    }

  */

  // when you declare a type, use pascal case, first letter of every word gets capitalized
  type Fruit = {
    name: string,
    rating: number | string // union type |
    size?: string // optional type ?
  }

  let fruit2 : Fruit = {
    name: "plum",
    rating: 7
  }

  let fruit3: Fruit = {
    name: "pineapple",
    rating: 10
  }

  // Fruit[] must consist of anything that matches our Fruit type
  // even though fruit isn't explicitly declared as a Fruit type, it still matches the structure, so it is allowed in our array
  let fruitTypeArray: Fruit[];
  fruitTypeArray = [fruit2, fruit3, fruit]

  // functions
  // with typescript functions, we need to make sure we are typing our parameters
  // can type the return but it is optional because the return type is inferred
  const add = (a: number, b: number): number => {
    return a + b
  }

// can have a variable amount of parameters using rest parameters
const addExtraParams = (a: number, b: number, ...c: number[]) => {
  return a + b
}

addExtraParams(5, 6, 7, 8, 9, 10) // allowed


  add(5,6)
  // add("5", 6) -- get an error because the type is wrong
  // add(5, 6, 7) --  get an error because there are too many parameters
  

  // void function - a function that doesn't return anything
  // questiion mark means optional
  
  const greetUser = (name: string, age?: number | string): void => {
    console.log(`Hello ${name}!`);
    if(age) {
      console.log(`You are ${age} years old`);
    }
  }

  greetUser("Name")
  greetUser("New Name", 20)
  greetUser("Name", "19")
  //greetUser(10)

  return (
    <>
      
    </>
  )
}

export default App
