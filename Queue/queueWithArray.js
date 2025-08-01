class queueWithArray {
    constructor() {
        this.items = [];
    }

    enqueue(elemnt) {
        this.items.push(elemnt)
    }

    dequeue() {
        if (this.items.length == 0) return "underflow";
        this.items.shift()
    }
    peek() {
        return this.items[0];
    }

    printQueue() {
        console.log(this.items.join(' -> '));

    }
}

const Q = new queueWithArray();
Q.enqueue(8);
Q.enqueue(10);
Q.enqueue(12);
Q.printQueue();