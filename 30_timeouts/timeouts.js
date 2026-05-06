const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function withTimeout(promise, ms, label) {
    const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error(label)), ms)
    );
    return Promise.race([promise, timeout]);
}

(async () => {
    try {
        const res = await withTimeout(sleep(200).then(() => "result 1"), 100, "timeout 1");
        console.log(res);
    } catch (e) {
        console.log(e.message);
    }

    try {
        const res = await withTimeout(sleep(200).then(() => "result 2"), 300, "timeout 2");
        console.log(res);
    } catch (e) {
        console.log(e.message);
    }
})();
