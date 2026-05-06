function slicesIndex(s, v) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === v) return i;
    }
    return -1;
}

class List {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(v) {
        const el = { val: v, next: null };
        if (this.tail === null) {
            this.head = el;
            this.tail = el;
        } else {
            this.tail.next = el;
            this.tail = el;
        }
    }

    allElements() {
        const elems = [];
        for (let e = this.head; e !== null; e = e.next) {
            elems.push(e.val);
        }
        return elems;
    }
}

const s = ["foo", "bar", "zoo"];
console.log("index of zoo:", slicesIndex(s, "zoo"));

const lst = new List();
lst.push(10);
lst.push(13);
lst.push(23);
console.log("list:", lst.allElements());
