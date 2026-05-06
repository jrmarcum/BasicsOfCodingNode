let handled = false;

function onSignal(name) {
    if (!handled) {
        handled = true;
        console.log();
        console.log("signal:", name);
        console.log("exiting");
    }
}

process.on('SIGINT', () => onSignal("interrupt"));
process.on('SIGTERM', () => onSignal("terminated"));

console.log("awaiting signal");

// Emit the signal event programmatically for demonstration
setTimeout(() => {
    process.emit('SIGINT');
}, 100);
