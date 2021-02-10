class BinaryNodeTree {
  constructor(v = null, l = null, r = null) {
    this.v = v;
    this.l = l;
    this.r = r;
  }
}

class BinaryTree {
  constructor() {
    this.h = null;
    this.l = 0;
  }
  
  insert(v) {
    const { h } = this;
    
    const n = new BinaryNodeTree(v);
    
    if (!h)
      this.h = n;
    else
      this.insertNode(h, n);
    
    this.l++;
    
    return this;
  }

  // Insert with recurtion
  insertNode(h, n) {
    if (n.v < h.v)
      if (h.l === null)
        h.l = n;
      else
        this.insertNode(h.l, n);
    else
      if (h.r === null)
        h.r = n;
      else
        this.insertNode(h.r, n);
    
    return this;
  }

  // Insert without recurtion
  // insertNode(h, n) {
  //   while(h !== null) {
  //     if (n.v < h.v)
  //       if (h.l === null) {
  //         h.l = n;
  //         break;
  //       }
  //       else
  //         h = h.l;
  //     else
  //       if (h.r === null) {
  //         h.r = n;
  //         break;
  //       }
  //       else
  //         h = h.r;
  //   }

  //   return this;
  // }

  remove(n) {
    const { h } = this;

    if (!h)
      throw new Error('Current head is null');

    this.h = this.removeNode(h, n);

    return this;
  }

  // Remove node with recurtion
  removeNode(r, n) {
    if (!r)
      throw new Error('Current r is null');

    return null;
  }
  
  findNode(t) {
    let { h } = this;

    if (!h)
      throw new Error('Current head is null');

    while(h !== null) {
      if (h.v === t)
        return h;
      
      if (t < h.v)
        h = h.l;
      else
        h = h.r;
    }

    return null;
  }

  findValue(t) {
    let { h } = this;

    if (!h)
      throw new Error('Current head is null');

    while(h !== null) {
      if (h.v === t)
        return h.v;
      
      if (t < h.v)
        h = h.l;
      else
        h = h.r;
    }

    return null;
  }

  getRootNode() {
    const { h } = this;

    if (!h)
      throw new Error('Current head is null');

    return h;
  }

  printTree() {
    return this.h;
  }
}

const tree = new BinaryTree();