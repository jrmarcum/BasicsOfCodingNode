const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
    await sleep(50);
    console.log("Timer 1 fired");

    let timer2Fired = false;
    const timer2 = setTimeout(() => {
        timer2Fired = true;
        console.log("Timer 2 fired");
    }, 50);

    clearTimeout(timer2);
    console.log("Timer 2 stopped");

    await sleep(100);
})();
