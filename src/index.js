class ListItem {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }

    toJSON() {
        return {
            value: this.value,
            next: this.next ? this.next.toJSON() : null
        }
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        if (!this.head) {
            this.head = new ListItem(value);
        } else {
            this.head = new ListItem(value, this.head);
        }
    }

    toJSON() {
        return this.head ? this.head.toJSON() : null;
    }

    insert(value, i) {
        //TODO: implement
        /**
         * if i >= size return last element
         */
    }

    removeFirst() {
        if (!this.head) {
            return null;
        }

        const head = this.head;
        const newHead = this.head.next;
        this.head = newHead;

        return head.value;
    }

    removeLast() {

    }

    remove(i) {
        //TODO: implement
        //return removed element
        /**
         * if i >= size remove last element
         */
    }

    get(i) {
        /**
         * return i-th element
         * if i >= size return null
         */
    }
}

const list = new LinkedList();

for (let i = 0; i < 10; i += 1) {
    list.add(i);
}

console.log(JSON.stringify(list.toJSON(), null, 2));

// const add = (value, head = null) => {
//     return {
//         value,
//         next: head
//     };
// };

// const removeFirst = (head) => {
//     const next = head.next;
//     const result = [head.value, head.next];
//     head.next = null;
//     return result;
// };

// const toArray = (head) => {
//     const arr = [];
//     while (head) {
//         arr.push(had.value);
//         head = head.next;
//     }
//     return arr;
// };

// let head = null;
// for (let i = 0; i < 10; i += 1) {
//     head = add(i, head);
// }

// console.log(JSON.stringify(head, null, 2));


const isNumber = (n) => typeof n === 'number' && !isNaN(n);

class Stack {
    constructor(maxSize = 10) {
        if (!isNumber(maxSize)) {
            throw new Error('maxSize is not a valid number');
        }
        this.maxSize = maxSize;
        this.size = 0;
    }

    push(v) {
        if (this.size >= maxSize) {
            throw new Error('Stack is out of capacity');
        }

        //your code here
        this.size += 1;
    }

    peek() {

    }

    pop() {

    }

    isEmpty() {

    }

    toArray() {

    }

    static fromIterable(iterable) {
        const stack = new Stack();
        for (let v of iterable) {
            stack.push(v);
        }
    }
}



const someStack = new Stack(1, 2, 3, 4);
someStack.push(1);


const newStack = Stack.fromIterable();
