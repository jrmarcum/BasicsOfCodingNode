class Container {
    constructor() {
        this.counters = { a: 0, b: 0 };
    }

    inc(name) {
        this.counters[name]++;
    }
}

const c = new Container();

async function doIncrement(name, n) {
    for (let i = 0; i < n; i++) {
        c.inc(name);
    }
}

(async () => {
    await Promise.all([
        doIncrement("a", 10000),
        doIncrement("a", 10000),
        doIncrement("b", 10000),
    ]);
    console.log(c.counters);
})();
