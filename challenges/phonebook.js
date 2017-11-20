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

//  return the number associated with the name in the jazbook
// function findName(jazbook, name) {
//   const contactLookUp = jazbook.filter((arrayContact) => {
//     return arrayContact[0] === name;
//   })
//   return contactLookUp[0][1];
// }

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  
  arrayToObj = {};
  jazbook.forEach((contact) => {
    arrayToObj[contact[0]] = contact[1];
  });
  return arrayToObj;
}

function findName(jazbook, name) {
  let nameKeys = Object.keys(jazbook);
  const nameKey = nameKeys.filter((nameKey) => {
    return nameKey === name;
  })
  return jazbook[nameKey];
}

function remove(jazbook, name) {
  let nameKeys = Object.keys(jazbook);
  const nameKey = nameKeys.filter((nameKey) => {
    return nameKey === name;
  })
  delete jazbook[nameKey];
  return jazbook;
}

const objectToExport = {
  findName,
  makePhoneBookObject,
  remove
};

// input you have array with sub array, name is the string you are looking for
// use a filter function to filter the name only
jazbook = [
  ['alex','301-844-3421'],
  ['jae','301-844-1211'],
  ['david','301-844-0978'],
  ['travis','301-844-8505'],
  ['jasmine','1800-974-4539'],
];

// console.log(findName(jazbook, 'travis'));
// console.log(makePhoneBookObject(jazbook));
// console.log(findName(objectToExport.makePhoneBookObject(jazbook),'alex'));
// console.log(remove(objectToExport.makePhoneBookObject(jazbook),'alex'));
module.exports = objectToExport;
