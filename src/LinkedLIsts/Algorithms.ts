import SinglyLinkedList, { SNode } from "./SinglyLinkedList";

export default class Algorithms<T> {
  constructor() {}
  reverse(list: SinglyLinkedList<T>): SinglyLinkedList<T> | null {
    if (!list) return null;
    if (list.size === 1) return list;
    let reversed: SinglyLinkedList<T> = new SinglyLinkedList<T>();
    let i: number = 0;
    while (i < list.size) {
      let v: T | null = list.get(i++);
      if (v !== null) {
        reversed.insertFront(v);
      }
    }
    return reversed;
  }
}
