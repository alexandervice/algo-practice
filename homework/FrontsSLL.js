// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
//______________________________________________________________________________
// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.
//______________________________________________________________________________
// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
//______________________________________________________________________________

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class SLL {
  constructor(head=null){
    this.head = head;
  }
  
  log(){
    if(!this.head){
      console.log(null);
      return
    }
    else{
      console.log("*** start of list ***")
      let pointer = this.head;
      while(pointer != null){
        console.log(pointer.data);
        pointer = pointer.next;
      }
      console.log("*** end of list ***")
    }
  }

  // add a new node at the end
  push(data) {
    if(!this.head) {
      // if no head add a new node from the data
      this.head = new Node(data);
      return
    } else {
      // remember the first node
      let pointer = this.head;
      while(pointer.next !== null) {
        // check until we find the last node and remember the last node
        pointer = pointer.next
      }
      // create a new node from the data after the last node
      pointer.next = new Node(data);
      return
    }
  }
  // remove the last node and return it
  pop(){
    if(!this.head){
      // if there is no first node return null since there is nothing to remove
      return null;
    }
    else if(this.head.next == null){
      // if there is only one node, remember the node
      let temp = this.head.data;
      // remove the node
      this.head = null;
      // return the remembered node that we removed
      return temp
    }
    else{
      // remember the first node
      let pointer = this.head;
      // llo through until we find the second to last node
      while(pointer.next.next != null){
        pointer = pointer.next
      }
      // remember the last node
      let temp = pointer.next.data;
      // remove the last node
      pointer.next = null;
      // return the remembered last node that we removed
      return temp
    }
  }
  // add a new node to the front
  addFront(data) {
    if(!this.head) {
      // if the list is empty add a new node from the data
      this.head = new Node(data);
      return
    } else {
      // remember the first node
      let oldHead = this.head;
      // make a new node from the data
      let newNode = new Node(data)
      // make the new node the front
      this.head = newNode
      // add the original front node to the new front node
      newNode.next = oldHead
      return
    }
  }
  // remove the first node and return it
  removeFront() {
    if(!this.head) {
      // if the list is empty return null
      return null
    } else {
      // remember the first node
      let front = this.head
      // make the first node the 2nd node
      this.head = this.head.next
      // return the removed first node
      return front
    }
  }
  front() {
    if(!this.head) {
      // if the list is empty return null
      return null
    } else {
      // remember the first node
      let front = this.head.data
      // return the data of the first node
      return front
    }
  }
}





sllTest = new SLL();

// sllTest.addFront("test")
sllTest.addFront(18)
sllTest.log()
sllTest.addFront(5)
sllTest.log()
sllTest.addFront(73)
sllTest.log()
sllTest.removeFront()
sllTest.log()
sllTest.removeFront()
sllTest.log()
console.log("the front is", sllTest.front())
sllTest.log()
sllTest.removeFront()
sllTest.log()
console.log("the front is", sllTest.front())
