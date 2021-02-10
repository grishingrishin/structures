/**
 * In computer science, a linked list is a linear collection of data elements whose order
 * is not given by their physical placement in memory. Instead,
 * each element points to the next. It is a data structure consisting
 * of a collection of nodes which together represent a sequence.
 * In its most basic form, each node contains: data, and a reference
 * (in other words, a link) to the next node in the sequence.
 * This structure allows for efficient
 * insertion or removal of elements from any position
 * in the sequence during iteration.
 * @param {any} v - Value for added in linked list node
 * @param {object|null} n - Link to next node
 * 
 * @returns {object} Returns linked list node
 */
class LinkedListNode {
    constructor(v, n = null) {
        this.v = v;
        this.n = n;
    }
}

/**
 * Singly linked lists contain nodes which have a data field
 * as well as 'next' field,which points to the next node in line of nodes.
 * Operations that can be performed on singly linked lists
 * include insertion, deletion and traversal. 
 * @returns {object} Returns linked list
 */
class LinkedList {
    constructor() {
        this.h = null;
    }

    /**
   * Add a new node with data "value" to
   * the start of a singly linked list:
   * @param {any} v - Value for added in linked list
   * @returns {object} Returns linked list node 
   */
    prepend(v) {
        if (!v)
            throw new Error('Current value is undefined');

        const n = new LinkedListNode(v, this.h);

        this.h = n;

        return this;
    }

    /**
   * Remove first node
   * @returns {object} Returns new linked list 
   */
    remove() {
        const { h } = this;

        if (!h)
            throw new Error('Current head is null');

        if (h.n)
            this.h = h.n;
        else
            this.h = null;

        return this;
    }
}

/**
 * In computer science, a stack is an abstract
 * data type thatservesas a collection of elements,
 * with two main principal operations:
 *
 * push, which adds an element to the collection, and
 * pop, which removes the most recently added element that was not yet removed.
 *
 * The order in which elements come off a stack gives rise to its alternative name,
 * LIFO (last in, first out).
 */
class Stack {
    constructor(m = 256) {
        this.s = new LinkedList();
        this.m = m;
        this.l = 0;
    }

    /**
     * Removes the most recently added element
     * @param {object} v - Any value
     * @returns {object} Returns new stack
     */
    pop() {
        if (!this.l) // 0 == false
            throw new Error('Current stack is empty');

        this.l--;

        return this.s.remove();
    }

    /**
     * Adds an element to the collection
     * @param {any} v - Any value
     * @returns {object} Returns new stack
     */
    push(v) {
        if (this.m == this.l)
            throw new Error('Current stuck is full');

        this.l++;

        return this.s.prepend(v);
    }
}

const stack = new Stack();