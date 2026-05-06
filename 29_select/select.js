const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
    const c1 = sleep(100).then(() => "one");
    const c2 = sleep(200).then(() => "two");

    await Promise.all([
        c1.then(v => console.log("received", v)),
        c2.then(v => console.log("received", v)),
    ]);
})();
