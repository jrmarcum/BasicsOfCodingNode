(async () => {
    let resolveMessage;
    const messages = new Promise(resolve => {
        resolveMessage = resolve;
    });

    setTimeout(() => resolveMessage("ping"), 0);

    const msg = await messages;
    console.log(msg);
})();
