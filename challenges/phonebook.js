/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2:
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook
* complete with methods to add new names and look up and remove existing entries
*/
jazbook = [
     ['alex','301-844-3421'],
     ['jae','301-844-1211'],
     ['david','301-844-0978'],
     ['travis','301-844-8505'],
     ['jasmine','1800-974-4539'],
   ];
//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
 number = false;
  jazbook.forEach( element => {
    if (element[0].toLowerCase()===name.toLowerCase())
      {
        number = element[1];
        return;
      }
  })
  return number;
}

// console.log(findName(jazbook, 'jae'))
// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  this.jazObj={};
  jazbook.forEach(el => {
    this.jazObj[el[0]] = el[1];
  })
  // return jazObj;
}

makePhoneBookObject.prototype.add = function(name,number) {
  this.jazObj[name] = number;
}

makePhoneBookObject.prototype.lookup = function(name) {
  return this.jazObj[name];
}

makePhoneBookObject.prototype.lookup = function(name) {
  delete this.jazObj[name];
}

let pb = new makePhoneBookObject(jazbook);
pb.add('frank','800-212-3939')
console.log(pb)
const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
