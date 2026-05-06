(async () => {
    const resp = await fetch("https://gobyexample.com");
    console.log("Response status:", resp.status);

    const text = await resp.text();
    const lines = text.split('\n');
    for (let i = 0; i < 5 && i < lines.length; i++) {
        console.log(lines[i]);
    }
})();
