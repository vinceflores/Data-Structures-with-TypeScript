class DNode<T> {
  next: DNode<T> | null;
  prev: DNode<T> | null;
  val!: T | null;

  constructor() {
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedLIst<T> {
  private head: DNode<T>;
  private _size: number;
  private tail: DNode<T>;

  constructor() {
    this.head = new DNode<T>();
    this.tail = this.head;
    this._size = 0;
  }
  add(val: T) {
    if (this._size === 0) {
      this.head.val = val;
    } else {
      let temp: DNode<T> = new DNode<T>();
      temp.val = val;
      this.tail.next = temp;
      temp.prev = this.tail;
      this.tail = temp;
    }
    this._size++;
  }

  insert(index: number, value: T) {
    if (this._size === 0) {
    } else {
      // find the index
      // insert
    }
    this._size++;
  }

  set(index: number, value: T) {
    // find the index
    let temp: DNode<T> = this.head;
    while (index > 0) {
      temp = temp.next!;
      index--;
    }
    // set the value
    temp.val = value;
  }
  find(index: number) {
    let temp: DNode<T> = this.head;
    while (index > 0) {
      temp = temp.next!;
      index--;
    }
    return temp.val;
  }

  findValue(val: T) {
    let temp: DNode<T> | null = this.head;
    if (this.head === null) return false;
    else {
      while (temp.next !== null) {
        if (temp.next.val === val) {
          return true;
        } else {
          temp = temp?.next;
        }
      }
      return false;
    }
  }

  findMiddle(): DNode<T> | null {
    let slow: DNode<T> | null = this.head;
    let fast: DNode<T> | null = this.head;

    while (fast !== null && fast.next !== null) {
      fast.next = fast.next.next;
      slow.next = slow.next;
    }
    return slow.next;
  }

  remove(value: T) {
    let temp: DNode<T> | null = this.head;
    if (temp === null) return;
    else {
      if (temp.val === value) {
        this.head = new DNode<T>();
        this.tail = this.head;
        this._size = 0;
      } else {
        while (temp.next !== null) {
          if (temp.next.val === value) {
            if (temp.next.next !== null) [(temp.next.next.prev = temp)];
            temp.next = temp.next.next;
            this._size--;
          } else {
            temp = temp?.next;
          }
        }
      }
    }
  }

  get size() {
    return this._size;
  }

  print() {
    let temp: DNode<T> = this.head;
    let str: string = "<=>";
    for (let i = 0; i < this._size; i++) {
      str += temp.val + "<=>";
      temp = temp.next!;
    }
    console.log(str);
  }
}

export default DoublyLinkedLIst;
