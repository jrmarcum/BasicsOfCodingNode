(async () => {
    let ops = 0;

    const workers = [];
    for (let i = 0; i < 50; i++) {
        workers.push((async () => {
            for (let j = 0; j < 1000; j++) {
                ops++;
            }
        })());
    }

    await Promise.all(workers);
    console.log("ops:", ops);
})();
