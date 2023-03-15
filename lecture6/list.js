class list {
    constructor(head = null) {
        this.head = head;
    }

    add(data) {
        if (this.head == null) {
            let newNode = new listNode(data);
            this.head = newNode;
            return 1;
        }
        let newNode = new listNode(data);
        this.getLast().next = newNode;
        return 1;
    }

    remove(x) {
        let prevNode = null
        let node = this.head;
        while(node != x) {
            prevNode = node;
            node = node.next;
        }
        if (node.next != null) {
            prevNode.next = node.next;
        }

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
    test.add(i);
}

let printNode = test.head;
while (printNode != null) {
    console.log(printNode.data);
    printNode = printNode.next;
}

test.invert();

printNode = test.head;
while (printNode != null) {
    console.log(printNode.data);
    printNode = printNode.next;
}