// linked list
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addToHead(value){
        let newNode = new Node(value, this.head, null);
        if(this.head) this.head.prev = newNode;
        else this.tail = newNode;
        this.head = newNode;
    }
}

class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

let h1 = new LinkedList();
h1.addToHead(100);
h1.addToHead(400);
console.log(h1);
