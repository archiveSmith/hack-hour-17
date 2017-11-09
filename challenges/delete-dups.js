/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */



function deleteDups(head) {
  let obj = {}
  let
  //counter=1,
   flag=false;

let theList = head;
  obj[theList.value] = true;
  while(theList.next && !flag) {
    if (obj[theList.next.value]) {
      flag = true;
      if (theList.next.next)
      theList.next = theList.next.next;
      else theList.next = null;
    }
    else obj[theList.next.value] = true;
    theList = theList.next;
  }
//console.log(head)
  return head;
}

//var list = {value:1,next:{value:2,next:{value:3,next:{value:2,next:{value:3,next:null}}}}};

//deleteDups(list)
module.exports = deleteDups;
