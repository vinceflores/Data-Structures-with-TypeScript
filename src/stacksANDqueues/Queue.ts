interface Queue<T> {
    enqueue(value: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined;
    readonly size: number;
}

class QueueNode<T> {
    constructor(public value: T, public next: QueueNode<T> | null = null) {}
}

class Queue<T> implements Queue<T> {
    private _size: number = 0;
    private head: QueueNode<T> | null = null;
    private tail: QueueNode<T> | null = null;

    constructor(private capacity: number = Infinity) {}

    getSize() {
        return this._size;
    }

    enqueue(value: T) {
        if (this._size === this.capacity) {
            throw Error('Queue has reached max capacity, you cannot add more items');
        }

        const newNode = new QueueNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this._size++;
    }

    dequeue() {
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
