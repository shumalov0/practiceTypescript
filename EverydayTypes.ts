//----------------------Array

const names:string[] =['intiqam','ferid'];
const names2:Array<string> =['intiqam','ferid'];

//----------------------Any

let obj: any = { x: 0 };
obj.foo();

//----------------------Parameter Type Annotations

function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
  }
//   greet(42); false

//----------------------Return Type

function getFavoriteNumber(): number {
    return 26;
  }
//----------------------Promises
async function getFavoriteNumberAsync(): Promise<number> {
    return 26;
  }
  
//----------------------Object

const obj2:{id:number; title?:string}={id:1}

//----------------------Union Types
function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  printId("intiqam");
  printId(10)

//----------------------Type Aliases
  type Point = {
    x: number;
    y: number;
  };

  function printCoord(pt: Point) {
    console.log(pt)
  }

//----------------------Interfaces

interface PoiniNTF {
    x: number;
    y: number;
  }
  function printCoordIn(pt: PoiniNTF) {
    console.log(pt)
  }

  //Interface ile type arasindaki ferq interface in extends ozelliyinin olmasidir

  //--------------------Type Assertions
  const x = "hello" as string;
// mecbur type menimsetmek


