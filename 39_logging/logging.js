function newLogger(prefix, stream) {
    let pfx = prefix;
    return {
        println(msg) {
            const ts = new Date().toISOString().replace('T', ' ').slice(0, 23);
            stream.write(`${ts} ${pfx}${msg}\n`);
        },
        setPrefix(p) {
            pfx = p;
        },
    };
}

const stdlog = newLogger('', process.stderr);
stdlog.println("standard logger");
stdlog.println("with micro");
stdlog.println("with file/line");

const mylog = newLogger("my:", process.stdout);
mylog.println("from mylog");

mylog.setPrefix("ohmy:");
mylog.println("from mylog");

let buf = "";
const buflog = newLogger("buf:", { write: s => { buf += s; } });
buflog.println("hello");
process.stdout.write("from buflog:" + buf);

function slogInfo(msg, ...pairs) {
    const obj = { time: new Date().toISOString(), level: "INFO", msg };
    for (let i = 0; i < pairs.length; i += 2) {
        obj[String(pairs[i])] = pairs[i + 1];
    }
    process.stderr.write(JSON.stringify(obj) + "\n");
}

slogInfo("hi there");
slogInfo("hello again", "key", "val", "age", 25);
