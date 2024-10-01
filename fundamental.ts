//-------------Static type-checking

//  const message = 'hello';
//  message();
//  typescript don't allow  string call function because this is false but javascript allow

//-------------Non-exception Failures

// const user = {

//     name:"intigam",
//     age:20
// }

// user.location; bu javasciript ucun error deyil undefined qaytaracaq amma typescript Non-exception failures ile buna icaze vermir cunki user obyekti icerisinde location yoxdur.

//-------------Types for Tooling

//typescript kodlari yazarken bize secimlerde komek edir

// function greet (person,date){

//     console.log( person,date)

// }

// greet("brendan") burada typescript bize error verecek cunki 2 parametr teyin etmisik ama 1 rini cagirmisiq ama javascript bu halda error vermir

//-------------Emitting with Errors

//eger typescript kodumuzda error olarsa biz tsc fundamental.ts ise salanda errorlu kodu ise salacaq ve yeni js fayli yaradacaq bunun ucun biz  tsc --noEmitOnError hello.ts bu koddan isdifade edirik ve error  oldugu halda kodu run etmir ve yeni js fayli yaratmir

// -------------Explicit Types

// Explicit types, dəyişənlərə, funksiyalara və obyektlərə tiplərin açıq şəkildə təyin edilməsi deməkdir. TypeScript-də bu tiplər əsasən string, number, boolean, array, object və xüsusi yaradılmış növlər (interfeys və ya tiplər) ola bilər.
// function greet(person: string, age: number): string {
//     return `Salam, mənim adım ${person}, və mənim ${age} yaşım var.`;
//   }

//   greet("Intiqam", 20); // Nəticə: Salam, mənim adım Intiqam, və mənim 20 yaşım var.


// --------------Erased Types
//  anlayışı TypeScript-də tiplərin yalnız inkişaf zamanı istifadə olunduğunu və tərcümə (compile) prosesindən sonra son JavaScript kodunda tiplərin silinməsini ifadə edir. Başqa sözlə, TypeScript kodu tiplərlə yazılır və yoxlanılır, amma tiplər yalnız TypeScript-dən JavaScript-ə çevrilmə zamanı yoxa çıxır. Tərcümədən sonra əldə olunan JavaScript kodu adi JavaScript olur və tiplər daxil edilmir.

// function greet(person: string, date: Date): string {
//     return `Salam, ${person}! Bu gün ${date.toDateString()} tarixidir.`;
//   }
  
//   greet("Intiqam", new Date());
  
// TypeScript-in tərcüməsindən sonra alınan JavaScript kodu isə belə görünür:
// function greet(person, date) {
//     return `Salam, ${person}! Bu gün ${date.toDateString()} tarixidir.`;
//   }
  
//   greet("Intiqam", new Date());
  
//-----------Downleveling

//Downleveling TypeScript-in köhnə JavaScript mühərriklərində və brauzerlərində işləməsi üçün müasir sintaksisi köhnə ES versiyalarına çevirməsidir. Bu proses TypeScript proqramçısına ən yeni xüsusiyyətlərdən istifadə etməyə imkan verir, eyni zamanda köhnə mühitlərdə uyğunluq təmin edir

//--target es2015 changes TypeScript to target ECMAScript 2015, meaning code should be able to run wherever ECMAScript 2015 is supported. So running tsc --target es2015 hello.ts gives us the following output:

