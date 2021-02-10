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
 * In the last node of a list, the link field often contains a null reference.
 * It is a list where the last pointer points to the first node. 
 * @returns {object} Returns linked list
 */
class CircularlyLinkedList {
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

    const n = new LinkedListNode(v, this.h);

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

    if (!this.t)
      this.t = n;

    return this;
  }

  /**
   * Remove first node
   * @returns {object} Returns new linked list 
   */
  removeBeginning() {
    const { h } = this;

    if (!h)
      throw new Error('Current head is null');

    if (h.n) {
      this.h = h.n;
      this.t.n = this.h;
    } else {
      this.h = null;
      this.t = null;
    }

    return this;
  }

  /**
   * Insert newNode after node
   * @param {object} o - After node
   * @param {object} n - New node
   * @returns {object} Returns new linked list 
   */
  insertAfter(o, n) {
    const { h } = this;

    if (!h) {
      this.h = n;
      this.t = n;

      this.t.n = this.h;

      return this;
    }

    if (o.n === h) {
      this.t.n = n;
      this.t = n;

      this.t.n = h;

      return this;
    }

    n.n = o.n;
    o.n = n;

    return this;
  }

  /**
   * Remove after node
   * @param {object} n - Remove node past this one
   * @returns {object} Returns new linked list 
   */
  removeAfter(n) {
    const { h } = this;

    if (!h)
      throw new Error('Current head is null');

    if (!n.n)
      throw new Error('Property next of new node is null');

    n.n = n.n.n;

    if (n.n === h) {
      this.t = n;
      this.t.n = h;
    }

    return this;
  }

  /**
   * @param {any} t - Target value
   * @returns {any} Returns found value 
   */
  getValue(t) {
    if (!t)
      throw new Error('Current target value is undefined');

    const f = this.h;

    let h = f;

    if (!h)
      throw new Error('Current head is null');

    if (h.v === t)
      return h.v;

    while(h.n !== h) {
      if (h.n.v === t)
        return h.n.v;

      h = h.n;
    }

    return null;
  }

  /**
   * @param {any} v - Any value
   * @returns {object} Returns linked list node 
   */
  getNode(t) {
    if (!t)
      throw new Error('Current target value is undefined');

    const f = this.h;

    let h = f;

    if (!h)
      throw new Error('Current head is null');

    if (h.v === t)
      return h;

    while(h.n !== h) {
      if (h.n.v === t)
        return h.n;

      h = h.n;
    }

    return null;
  }
}

const list = new CircularlyLinkedList();