import SinglyLinkedList from "../SinglyLinkedList";
import Algorithms from "../Algorithms";

let list!: SinglyLinkedList<string>;
let algo: Algorithms<string>;
beforeEach(() => {
  list = new SinglyLinkedList<string>();
  algo = new Algorithms<string>();
});

describe("reverse test", () => {
  test("reverse size 1", () => {
    list.add("one");
    expect(list.size).toBe(1);
    let r = list?.toString();
    expect(algo.reverse(list)?.toString()).toBe(r);
  });
  test("reverse size 2", () => {
    list.add("one");
    list.add("two");
    let r = "->two->one->"
    expect(list.size).toBe(2);
    expect(algo.reverse(list)?.toString()).toBe(r);
  });
  test("reverse size 3", () => {
    list.add("one");
    list.add("two");
    list.add("three");
    let r = "->three->two->one->"
    expect(list.size).toBe(3);
    expect(algo.reverse(list)?.toString()).toBe(r);
  });
});

describe("sart -> mergesort", () => {
    
})
