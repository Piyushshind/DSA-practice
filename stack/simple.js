class StackP {
    constructor() {
        this.bucket = [];
    }
    push(elem) {
        this.bucket.push(elem)
    }

    pop() {
        if (this.bucket.length == 0) return "underflow";
        this.bucket.pop();
    }

    getPeekElement(){
        return this.bucket[this.bucket.length-1]
    }
    showAllItems(){
        return this.bucket.join(' _ ');
    }
}

const s = new StackP();
s.push(15);
s.push(7);
s.push(455);

console.log(s.showAllItems());


