// let message: string = 'Hello, New Stack!';
// console.log(message);

import SinglyLinkedList from "./LinkedLIsts/SinglyLinkedList";

let s: SinglyLinkedList<number> = new SinglyLinkedList<number>();
s.add(1);
s.add(2);

s.print();

console.log(s)
console.log("s[0]", s.get(0));
console.log("s[1]", s.get(1));
