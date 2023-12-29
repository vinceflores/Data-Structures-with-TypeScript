// import { describe, expect, test } from "@jest/globals";
import SinglyLinkedList from "../src/LinkedLIsts/SinglyLinkedList";

let s: SinglyLinkedList<number>;
// let s: SinglyLinkedList<number> = new SinglyLinkedList<number>();

beforeEach(() => {
  s = new SinglyLinkedList<number>();
});
describe("testing add(): ", () => {
  test("adding 1 and 2 to the list -> 1=1, 2=2", () => {
    s.add(1);
    s.add(2);
    expect(s.size).toBe(2);
    expect(s.get(0)).toBe(1);
    expect(s.get(1)).toBe(2);
  });
});

describe("testing remove():", () => {
  test("case 1: targetNode is head", () => {
    s.add(0);
    expect(s.size).toBe(1);
    expect(s.remove(0)).toBe(0);
    expect(s.head).toBeNull();
  });
  test("case 2: targetNode is tail", () => {
    s.add(1);
    s.add(2);
    expect(s.size).toBe(2);
    expect(s.remove(2)).toBe(2);
    expect(s.size).toBe(1);
  });
  test("case 3: targetNode is in between", () => {
    s.add(1);
    s.add(2);
    s.add(3);
    expect(s.size).toBe(3);
    expect(s.remove(2)).toBe(2);
    expect(s.size).toBe(2);
  });
});
