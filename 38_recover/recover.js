function mayPanic() {
    throw new Error("a problem");
}

function main() {
    try {
        mayPanic();
        console.log("After mayPanic()");
    } catch (r) {
        console.log("Recovered. Error:\n", r.message);
    }
}

main();
