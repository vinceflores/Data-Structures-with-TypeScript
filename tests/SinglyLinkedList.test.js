"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { describe, expect, test } from "@jest/globals";
var SinglyLinkedList_1 = require("../src/LinkedLIsts/SinglyLinkedList");
describe("SLL", function () {
    test("1=1", function () {
        var s = new SinglyLinkedList_1.default();
        s.add(10);
        expect(s.get(0)).toBe(10);
    });
});
describe("adding 1 and 2 to the list", function () {
    test("1=1, 2=2", function () {
        var s = new SinglyLinkedList_1.default();
        s.add(1);
        s.add(2);
        expect(s.size).toBe(2);
        expect(s.get(0)).toBe(1);
        expect(s.get(1)).toBe(2);
    });
});
