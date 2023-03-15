class listNode {
    constructor(Data) {
        this.data = Data;
        this.next = null;
        this.prev = null;
    }
}

class list{
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail
        this.size = 0;
    }

    add(data) {
        if (this.head == null) {
            let newNode = new listNode(data);
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return 1;
        }
        let newNode = new listNode(data);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;

        return 1;
    }

    remove(index) {
        if (index < this.size && index >= 0) {
            let node = this.head;
            let count = 0;

            if (index === 0) {
                this.head = this.head.next;
                this.size--;
                return 1;
            }

            while (count != index && node) {
                node = node.next;
                count++;
            }

            node.prev.next = node.next;
            node.next.prev = node.prev;
            this.size--;

            return 1;
        }
        console.log("Index out of range");
    }

    invert() {
        if (this.size >= 2) {
            let prevNode = null;
            let currNode = this.head;
            let nextNode = null;

            // This can most likely be made smarter with fewer variabels using the new node.prev
            while (currNode != null) {
                nextNode = currNode.next;
                currNode.next = prevNode;
                currNode.prev = nextNode;
                prevNode = currNode;
                currNode = nextNode;
            }

            this.tail = this.head;
            this.head = prevNode;
        }
    }

    serch(x) {
        if (this.size > 0) {
            if (this.size == 1 && this.head.data == x) {
                return this.head;
            }

            let node = test.head;
            while (node.data != x) {
                console.log(node.data);
                node = node.next;
            }

            return node;
        }
        return -1;
    }
}

// Shows list before and after invert
function testInvert(L) {
    let node = L.head;
    while (node) {
        console.log(node.data);
        node = node.next;
    }

    L.invert();

    node = L.head;
    while (node) {
        console.log(node.data);
        node = node.next;
    }
}

// Shows the given list before removing item at index and then after removal
function testRemove(L) {
    let node = L.head
    while (node) {
        console.log(node);
        node = node.next;
    }
    
    L.remove(0);
    
    node = L.head;
    while (node) {
        console.log(node);
        node = node.next;
    }
}

// Initalizing a test list
let test = new list;

// Fill the test list with numbers
for (let i = 0; i < 10; i++) {
    /* console.log(i); */
    test.add(i);
}

testInvert(test);
test.invert;

testRemove(test);
