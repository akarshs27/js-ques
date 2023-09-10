class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stacks {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
            this.size++
        }
        return this.size;
    }

    pop() {
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let stack = new Stacks();
stack.push("ONE");
stack.push("TWO");
stack.push("THREE");
