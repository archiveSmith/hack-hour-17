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
const findName = (jazbook, name) => {
  for (let i = 0; i < jazbook.length; i++) {
    if (jazbook[i][0] === name) return jazbook[i][1];
  }
  return false;
};

// return an object literal representing the jazbook
class makePhoneBookObject {
  constructor (jazbook) {
    this.book = {};
    for (let i = 0; i < jazbook.length; i++) {
      this.addContact(jazbook[i][0], jazbook[i][1]);
    }
  }

  addContact (name, num) {
    this.book[name] = num;
    return {name, num};
  }

  getContact (name) {
    if (this.book[name]) return this.book[name];
    return false;
  }

  removeContact (name) {
    if (this.book[name]) {
      delete this.book[name];
      return name;
    }
    return false;
  }
}

// let jazbook = [
//   ['alex', '301-844-3421'],
//   ['jae', '301-844-1211'],
//   ['david', '301-844-0978'],
//   ['travis', '301-844-8505'],
//   ['jasmine', '1800-974-4539']
// ];

// let phonebook = new makePhoneBookObject(jazbook);
// phonebook.addContact('manny', '212-925-4926');
// phonebook.addContact('alex', '212-735-9638');
// phonebook.removeContact('jae');

const objectToExport = {
  findName,
  makePhoneBookObject
};

module.exports = objectToExport;
