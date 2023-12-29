import DoublyLinkedLIst from "../src/LinkedLIsts/DoublyLinkedList";

describe("DoublyLinkedList", () => {
  test("add", () => {
    let list = new DoublyLinkedLIst<number>();
    list.add(1);
    list.add(2);
    list.add(3);
    expect(list.size).toBe(3);
    list.print();
    expect(list.find(0)).toBe(1);
    expect(list.find(1)).toBe(2);
    expect(list.find(2)).toBe(3);
    list.set(0, 10);
    list.set(1, 20);
    list.set(2, 30);
    expect(list.find(0)).toBe(10);
    expect(list.find(1)).toBe(20);
    expect(list.find(2)).toBe(30);
    list.print();
  });
});


describe( "remove" , () => {
  test("remove 2", () => {
    let list = new DoublyLinkedLIst<number>();
    list.add(1);
    list.add(2);
    list.add(3);
    list.remove(2) 
    expect(list.findValue(2)).toBe(false) 
    list.print()
  })
})