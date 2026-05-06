const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
    const requests = [1, 2, 3, 4, 5];

    for (const req of requests) {
        await sleep(20);
        console.log("request", req, new Date().toISOString());
    }

    const burstyRequests = [1, 2, 3, 4, 5];
    let tokens = 3;

    for (const req of burstyRequests) {
        if (tokens > 0) {
            tokens--;
        } else {
            await sleep(20);
        }
        console.log("request", req, new Date().toISOString());
    }
})();
