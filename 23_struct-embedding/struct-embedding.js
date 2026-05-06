class Base {
    constructor(num) {
        this.num = num;
    }

    describe() {
        return `base with num=${this.num}`;
    }
}

class Container {
    constructor(num, str) {
        this.base = new Base(num);
        this.str = str;
    }

    get num() {
        return this.base.num;
    }

    describe() {
        return this.base.describe();
    }
}

const co = new Container(1, "some name");
console.log(`co={num: ${co.num}, str: ${co.str}}`);
console.log("also num:", co.base.num);
console.log("describe:", co.describe());
console.log("describer:", co.describe());
