class ArgError extends Error {
    constructor(arg, msg) {
        super(`${arg} - ${msg}`);
        this.arg = arg;
        this.msg = msg;
    }
}

function f(arg) {
    if (arg === 42) {
        return { val: -1, err: new ArgError(arg, "can't work with it") };
    }
    return { val: arg + 3, err: null };
}

const { err } = f(42);
if (err instanceof ArgError) {
    console.log(err.arg);
    console.log(err.msg);
} else {
    console.log("err doesn't match ArgError");
}
