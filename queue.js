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
        this.t = null;
    }

      /**
   * Add a new node with data "value" to
   * the end of a singly linked list:
   * @param {any} v - Value for added in linked list
   * @returns {object} Returns linked list node 
   */
    append(v) {
        if (!v)
            throw new Error('Current value is undefined');

        const n = new LinkedListNode(v);

        if (!this.h) {
            this.h = n;
            this.t = n;

            return this;
        }

        this.t.n = n;
        this.t = n;

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
        else {
            this.h = null;
            this.t = null;
        }

        return this;
    }
}

/**
 * In computer science, a queue is a collection of entities that are maintained
 * in a sequence and can be modified by the addition of entities at one end
 * of the sequence and the removal of entities from the other end of
 * the sequence. By convention, the end of the sequence at which
 * elements are added is called the back, tail, or rear of
 * the queue, and the end at which elements are removed
 * is called the head or front of the queue,
 * analogously to the words used when
 * people line up to wait for goodsor services.
 * @returns {object} Returns queue
 */
class Queue {
    constructor() {
        this.q = new LinkedList();
    }

    /**
   * Add a new element to the end of the queue (the tail of the linked list).
   * This element will be processed after all elements ahead of it.
   * @param {any} value
   */
    enqueue(v) {
        return this.q.append(v);
    }

    /**
   * Remove the element at the front of the queue (the head of the linked list).
   * If the queue is empty, return null.
   * @return {object} Returns queue
   */
    dequeue() {
        return this.q.remove();
    }
}

const queue = new Queue();