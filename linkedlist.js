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

    addToTail(value){
        let newNode = new Node(value, null, this.tail);
        if(this.tail) this.tail.next = newNode;
        else this.head = newNode;
        this.tail = newNode;
    }

    removeFromHead(){
        if(!this.head) return null;
        let val = this.head.value;
        this.head = this.head.next;
        if(this.head) this.head.prev = null;
        else this.tail = null;
        return val;
    }

    removeFromTail(){
        if(!this.tail) return null;
        let val = this.tail.value;
        this.tail = this.tail.prev;
        if(this.tail) this.tail.next = null;
        else this.head = null;
        return val;
    }

    search(searchValue){
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.value === searchValue) return currentNode.value;
            currentNode = currentNode.next;
        }
        return null;
    }

    indexOf(value){
        let currentNode = this.head;
        let indexes = [];
        let currentIndex = 0;
        while(currentNode){
            if(currentNode.value === value) indexes.push(currentIndex);
            currentNode = currentNode.next;
            currentIndex++;
        }
        return indexes;
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

h1.addToHead(123);
h1.addToHead(70);
h1.addToHead('Hello World');
h1.addToHead(70);
h1.addToTail(19);
h1.addToTail('Kalson');

console.log(h1.search(400))
console.log(h1.indexOf(70));
