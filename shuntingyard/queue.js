export default class Queue {
  _head = null;
  _tail = null;
  _size = 0;

  constructor(nodes) {
    if (!!nodes) {
      nodes.forEach((node) => {
        this.push(node);
      });
    }
  }

  push(data) {
    // Push fungerer som enqueue
    const node = new Node(data, null);
    if (!this._head) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }
    this._size++;
  }

  getHead() {
    return this._head;
  }

  removeHead() {
    // Fjern head og returner data (valgfrit)
    if (this.isEmpty()) {
      throw new Error("Queue er tom");
    }
    const data = this._head.data;
    this._head = this._head.next;
    if (!this._head) {
      this._tail = null;
    }
    this._size--;
    return data;
  }

  getTail() {
    return this._tail;
  }

  size() {
    return this._size;
  }

  clear() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  isEmpty() {
    return this._size === 0;
  }

  dumpList() {
    if (this._head) {
      let current = this._head;
      let dump = "";
      while (current) {
        dump += current.data + " ";
        current = current.next;
      }
      return dump.trim();
    }
    return "";
  }
}

class Node {
  next = null;
  data = null;

  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
