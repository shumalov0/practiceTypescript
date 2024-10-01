//-------------Static type-checking
var message = 'hello';
//  message();
//  typescript don't allow  string call function because this is false but javascript allow
//-------------Non-exception Failures
var user = {
    name: "intigam",
    age: 20
};
// user.location; bu javasciript ucun error deyil undefined qaytaracaq amma typescript Non-exception failures ile buna icaze vermir cunki user obyekti icerisinde location yoxdur.
//-------------Types for Tooling
//typescript kodlari yazarken bize secimlerde komek edir
