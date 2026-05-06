const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
    const ticker = setInterval(() => {
        console.log("Tick at", new Date().toISOString());
    }, 50);

    await sleep(180);
    clearInterval(ticker);
    console.log("Ticker stopped");
})();
