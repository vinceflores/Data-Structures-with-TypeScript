class SNode<T> {
  next: SNode<T> | null;
  val!: T;
  constructor(val: T) {
    this.next = null;
    this.val = val;
  }
  get Val() {
    return this.val;
  }
  set Val(val: T) {
    this.val = val;
  }

  get Next(): SNode<T> | null {
    return this.next;
  }
  set Next(node: SNode<T>) {
    this.next = node;
  }
}

class SinglyLinkedList<E> {
  head: SNode<E> | null;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }
  /**
   * Adds to the end of the list
   * @param val of type E which is the value of the new node
   */
  add(val: E): void {
    if (!this.head) {
      this.head = new SNode(val);
    } else {
      let curr: SNode<E> = this.head;
      while (curr.next != null) {
        curr = curr.next;
      }
      curr.next = new SNode<E>(val);
    }
    this.size++;
  }
  remove(val: E) {}

  print() {
    if(!this.head) return; 
    console.log(this.head.val);
  }
  get(index: number): E | null {
    if(index < 0) throw Error;
    if(!this.head) return null;
    let curr: SNode<E> = this.head;
    let i: number = 0;
    while (i < index && curr.next != null) {
      curr = curr.next;
      i++;
    }
    return curr.val;
  }
  get Size() {
    return this.size;
  }
}

export default SinglyLinkedList;
