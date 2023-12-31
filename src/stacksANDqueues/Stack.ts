

interface Stack<T> {
    push(value: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    readonly size: number;
}

class StackNode<T> {
    constructor(public value: T, public next: StackNode<T> | null = null) {}
}

class Stack<T> implements Stack<T> {
    private _size: number = 0;
    private head: StackNode<T> | null = null;

    constructor(private capacity: number = Infinity) {}

    getSize() {
        return this._size;
    }

    push(value: T) {
        if (this._size === this.capacity) {
            throw Error('Stack has reached max capacity, you cannot add more items');
        }

        const newNode = new StackNode(value);
        newNode.next = this.head;
        this.head = newNode;

        this._size++;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }

        const poppedValue = this.head.value;
        this.head = this.head.next;

        this._size--;

        return poppedValue;
    }

    peek() {
        return this.head?.value;
    }
}