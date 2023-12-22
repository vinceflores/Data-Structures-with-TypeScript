class DNode<T> {
  private _next: DNode<T> | null;
  private _prev: DNode<T> | null;
  private _val: T;

  constructor() {
    this._next = null;
    this._prev = null;
  }

  set next(next: DNode<T>) {
    this._next = next;
  }

  get next(): DNode<T> | null {
    return this._next;
  }

  set prev(prev: DNode<T>) {
    this._prev = prev;
  }

  get prev(): DNode<T> | null {
    return this._prev;
  }

  set val(val: T) {
    this._val = val;
  }
  get val() {
    return this._val;
  }
}

class DoublyLinkedLIst<T> {
  private _header: DNode<T> | null;
  private _size: number;
  private _tailer: DNode<T> | null;

  constructor() {
    this._header = new DNode<T>();
    this._tailer = this._header;
    this._size = 0;
  }
  //TODO
  add(value: T) {
    if (this._size === 0) {
    } else {
    }
    this._size++;
  }
  //TODO
  insert(index: number, value: T) {
    if (this._size === 0) {
    } else {
      // find the index
      // insert
    }
    this._size++;
  }
  //TODO
  set(index: number, value: T) {
    // find the index
    // set the value
  }
  //TODO
  get(index: number) {}
  //TODO
  remove(value: T) {}

  get size() {
    return this._size;
  }
}

export default DoublyLinkedLIst;
