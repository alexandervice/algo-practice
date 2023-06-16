class Node{
  constructor(data){
      this.data = data;
      this.next = null;
  }
}

class SLL{
  constructor(head=null){
      this.head = head;
  }
  push(data){
      if(!this.head){
          this.head = new Node(data);
          return
      }
      else{
          let pointer = this.head;
          while(pointer.next != null){
              pointer = pointer.next
          }
          pointer.next = new Node(data);
          return
      }
  }
  pop(){
      if(!this.head){
          return null;
      }
      else if(this.head.next == null){
          let temp = this.head.data;
          this.head = null;
          return temp
      }
      else{
          let pointer = this.head;
          while(pointer.next.next != null){
              pointer = pointer.next
          }
          let temp = pointer.next.data;
          pointer.next = null;
          return temp
      }
  }
  push_to_front(data){
    if(!this.head){
      this.head = new Node(data);
      return
    }
    let newNode = new Node(data);
    let tempHead = this.head;
    newNode.next = tempHead;
    this.head = newNode;
    return 
  }
  
  pop_from_front(){
    if(!this.head){
      return
    } 
    else {
      let temp = this.head.data
      this.head = this.head.next
      return temp
    }
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
  contains(value){
    if(!this.head) {
      return false;
    } else {
      let pointer = this.head;
      while (pointer != null) {
        if(pointer.data == value){
          return true;
        }
        pointer = pointer.next;
      }
    }
    return false
  }
  getMin() {
    if(!this.head) {
      return false;
    } else {
      let min = this.head.data;
      let pointer = this.head.next;
      while(pointer!=null) {
        if(pointer.data < min) {
          min = pointer.data;
        }
        pointer = pointer.next;
      }
      return min
    }
  }
  reverse(){
    if(!this.head) {
      return false;
    } else if(!this.head.next) {
      return
    } else {
      // cannot use tail
      // current order = 13, 10, 15, 18, 7869
      let initailHead = this.head; // 13
      let pointer = this.head.next // 10
      // want the order to be 7869, 18, 15, 10, 13
      while(pointer != null) { 
        this.push_to_front(pointer.data)
        pointer = pointer.next
      }
      initailHead.next = null;
    }
  }
}

var sll = new SLL()
sll.push(10)
sll.push(15)
sll.push(18)
sll.log()
sll.push(7869)
sll.push(100)
sll.log()
sll.pop()
sll.log()
sll.push_to_front(13)
sll.push_to_front(17)
sll.log()
sll.pop_from_front()
sll.log()
// console.log(sll.contains(18))
// console.log(sll.getMin())
sll.reverse()
sll.log()
