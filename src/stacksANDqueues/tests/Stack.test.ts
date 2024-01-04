import { toEditorSettings } from "typescript";
import StackList from "../Stack";

let stack: StackList<number>;
beforeEach(() => {
  stack = new StackList<number>();
});

describe("Stacks", () => {
  test("should return the size of the stack", () => {
    expect(stack.size).toBe(0);
    stack.push(1);
    expect(stack.size).toBe(1);
    stack.push(2);
    expect(stack.size).toBe(2);
  });

  test("should return the top element of the stack", () => {
    stack.push(1);
    expect(stack.peek()).toBe(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    stack.push(3);
    stack.push(4);
    expect(stack.peek()).toBe(4);
  });

  test("should return undefined if the stack is empty", () => {
    expect(stack.peek()).toBe(undefined);
  });

  test("should pop the top element of the stack", () => {
    stack.push(1);
    expect(stack.pop()).toBe(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    expect(stack.pop()).toBe(4);
  });
});
