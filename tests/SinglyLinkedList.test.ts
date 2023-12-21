// import { describe, expect, test } from "@jest/globals";
import SinglyLinkedList from "../src/LinkedLIsts/SinglyLinkedList";

describe("SLL", () => {
  test("1=1", () => {
    const s: SinglyLinkedList<number> = new SinglyLinkedList<number>();
    s.add(10);
    expect(s.get(0)).toBe(10);
  });
});

describe("adding 1 and 2 to the list", () => {
  test("1=1, 2=2", () => {
    const s: SinglyLinkedList<number> = new SinglyLinkedList<number>();
    s.add(1);
    s.add(2);
    expect(s.size).toBe(2);
    expect(s.get(0)).toBe(1);
    expect(s.get(1)).toBe(2);
  });
});
