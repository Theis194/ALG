// en- and dequeue is theta(1)
class list {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
    }

    enqueue(data) {
        if (this.head == null) {
            let newNode = new listNode(data);
            this.head = newNode;
            this.tail = newNode;
            return 1;
        }
        let newNode = new listNode(data);
        this.tail.next = newNode;
        this.tail = newNode;
        return 1;
    }

    dequeue() {
        let node = this.head;
        this.head = this.head.next;
        return node.data;
    }

    invert() {
        let prevNode = null;
        let currNode = this.head;
        let nextNode = null;
        while (currNode != null) {
            nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }
        this.head = prevNode;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    getFirst() {
        return this.head;
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
}

class listNode {
    constructor(Data) {
        this.data = Data;
        this.next = null;
    }
}

let test = new list;

for (let i = 0; i < 10; i++) {
    test.enqueue(i);
}

console.log(test);

let temp = test.dequeue();

console.log(test);
console.log(temp);

temp = test.dequeue();

console.log(test);
console.log(temp);