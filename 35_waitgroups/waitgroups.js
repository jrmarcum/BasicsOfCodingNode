const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function worker(id) {
    console.log(`Worker ${id} starting`);
    await sleep(50);
    console.log(`Worker ${id} done`);
}

(async () => {
    const workers = [];
    for (let i = 1; i <= 5; i++) {
        workers.push(worker(i));
    }
    await Promise.all(workers);
})();
