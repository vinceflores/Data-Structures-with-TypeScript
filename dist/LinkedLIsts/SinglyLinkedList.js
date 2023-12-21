"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SNode = /** @class */ (function () {
    function SNode(val) {
        this.next = null;
        this.val = val;
    }
    Object.defineProperty(SNode.prototype, "Val", {
        get: function () {
            return this.val;
        },
        set: function (val) {
            this.val = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SNode.prototype, "Next", {
        get: function () {
            return this.next;
        },
        set: function (node) {
            this.next = node;
        },
        enumerable: false,
        configurable: true
    });
    return SNode;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.head = null;
        this.size = 0;
    }
    /**
     * Adds to the end of the list
     * @param val of type E which is the value of the new node
     */
    SinglyLinkedList.prototype.add = function (val) {
        if (!this.head) {
            this.head = new SNode(val);
        }
        else {
            var curr = this.head;
            while (curr.next != null) {
                curr = curr.next;
            }
            curr.next = new SNode(val);
        }
        this.size++;
    };
    SinglyLinkedList.prototype.remove = function (val) { };
    SinglyLinkedList.prototype.print = function () {
        if (!this.head)
            return;
        console.log(this.head.val);
    };
    SinglyLinkedList.prototype.get = function (index) {
        if (index < 0)
            throw Error;
        if (!this.head)
            return null;
        var curr = this.head;
        var i = 0;
        while (i < index && curr.next != null) {
            curr = curr.next;
            i++;
        }
        return curr.val;
    };
    Object.defineProperty(SinglyLinkedList.prototype, "Size", {
        get: function () {
            return this.size;
        },
        enumerable: false,
        configurable: true
    });
    return SinglyLinkedList;
}());
exports.default = SinglyLinkedList;
