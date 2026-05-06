const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function worker(id, getJob) {
    let j;
    while ((j = getJob()) !== null) {
        console.log(`worker ${id} started  job ${j}`);
        await sleep(50);
        console.log(`worker ${id} finished job ${j}`);
    }
}

(async () => {
    const jobs = [1, 2, 3, 4, 5];
    let idx = 0;
    const getJob = () => (idx < jobs.length ? jobs[idx++] : null);

    await Promise.all([
        worker(1, getJob),
        worker(2, getJob),
        worker(3, getJob),
    ]);
})();
