export class SNode<T> {
  _next: SNode<T> | null;
  _val!: T;
  constructor(val: T) {
    this._next = null;
    this._val = val;
  }
  get val() {
    return this._val;
  }
  set val(val: T) {
    this._val = val;
  }

  get next(): SNode<T> | null {
    return this._next;
  }
  set next(next: SNode<T> | null) {
    this._next = next;
  }
}

class SinglyLinkedList<E> {
  head: SNode<E> | null;
  _size: number;
  constructor() {
    this.head = null;
    this._size = 0;
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
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = new SNode<E>(val);
    }
    this._size++;
  }

  insertFront(val: E): void {
    let temp: SNode<E> = new SNode<E>(val);
    temp.next = this.head;
    this.head = temp;
    this._size++;
  }

  findMiddle(){
    if(!this.head) return; 
    
  }

  remove(val: E): E | null {
    if (!this.head) return null;
    let curr: SNode<E> | null = this.head;

    // case 1: targetNode is head
    if (curr.val === val && this._size === 1) {
      const temp = curr.val;
      this.head = this.head.next;
      this._size--;
      return temp;
    } else {
      // case 2: targetNode is the tail
      // case 3;  Node1-targetNode-Node2

      let temp = curr.next ? curr.next.val : null;
      while (curr.next !== null) {
        if (temp === val) {
          curr.next = curr.next.next;
        } else {
          curr = curr.next;
        }
      }

      this._size--;
      return temp;
    }
  }

  print() {
    if (!this.head) return;
    let curr: SNode<E> = this.head;
    let s: string = "->";
    while (curr.next !== null) {
      s += curr.val + "->";
      curr = curr.next;
    }
    console.log(s)
  }

  toString() {
    if (!this.head) return;
    let curr: SNode<E> = this.head;
    let s: string = "->";
    while (curr.next !== null) {
      s += curr.val + "->";
      curr = curr.next;
    }
    s += curr.val + "->"
    return s 
  }

  get(index: number): E | null {
    if (index < 0) throw Error;
    if (!this.head) return null;
    let curr: SNode<E> = this.head;
    let i: number = 0;
    while (i++ < index && curr.next !== null) {
      curr = curr.next;
    }
    return curr.val;
  }
  get size() {
    return this._size;
  }
}

export default SinglyLinkedList;
