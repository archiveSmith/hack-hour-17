/**
 * applies the invoked array to the function's parameter list
 * Example:
 *   var jae = function(name, age, location) {
 *     return name + " is " + age + " and he lives in " + location;
 *   };
 *
 *   var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
 *   jaero(); //Returns "Jae is 19 and he lives in South Carolina"
 *
 * Another Example:
 *   var jasmine = function(name, age) {
 *     if(!age){
 *       return "We don't know how old " + name + " is!";
 *     }
 *
 *     else{
 *       return name + " is " + age + " years old!";
 *     }
 *   };
 *
 *   var jmoney = applyIt(jasmine, ["Jasmine"]);
 *   jmoney(); //Returns "We don't know how old Jasmine is!"
 *
 *  DO NOT USE THE BUILT IN APPLY METHOD OR THE SPREAD OPERATOR
 */

function applyIt(func, args) {
  function appIt(func, args, counter) {
    if (counter < args.length) {
      let prevArg = args[counter];
      console.log(prevArg);
      return appIt( (arg, arg1, arg2) => func(prevArg, arg, arg1, arg2), args, counter + 1);
    } else {
      return func;
    }
  }

  return appIt(func, args, 0);
}


var jae = function (name, age, location, x) {
  return name + " is " + age + " and he lives in " + location + ' ' + x;
};
var jaero = applyIt(jae, ["Jae", 19, "South Carolina", 'asd']);
console.log(jaero()); //Returns "Jae is 19 and he lives in South Carolina"

module.exports = applyIt;
