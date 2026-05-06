const ServerState = Object.freeze({
    StateIdle: 0,
    StateConnected: 1,
    StateError: 2,
    StateRetrying: 3,
});

const stateName = {
    [ServerState.StateIdle]: "idle",
    [ServerState.StateConnected]: "connected",
    [ServerState.StateError]: "error",
    [ServerState.StateRetrying]: "retrying",
};

function stateString(s) {
    return stateName[s];
}

function transition(s) {
    switch (s) {
        case ServerState.StateIdle:
            return ServerState.StateConnected;
        case ServerState.StateConnected:
        case ServerState.StateRetrying:
            return ServerState.StateIdle;
        case ServerState.StateError:
            return ServerState.StateError;
        default:
            throw new Error(`unknown state: ${stateString(s)}`);
    }
}

const ns = transition(ServerState.StateIdle);
console.log(stateString(ns));

const ns2 = transition(ns);
console.log(stateString(ns2));
