const s = "สวัสดี";

const buf = Buffer.from(s);
console.log("Len:", buf.length);

for (let i = 0; i < buf.length; i++) {
    process.stdout.write(buf[i].toString(16) + ' ');
}
process.stdout.write('\n');

const runes = [...s];
console.log("Rune count:", runes.length);

let bytePos = 0;
for (const char of s) {
    const cp = char.codePointAt(0);
    const hex = cp.toString(16).toUpperCase().padStart(4, '0');
    console.log(`U+${hex} '${char}' starts at ${bytePos}`);
    bytePos += Buffer.from(char).length;
}

console.log();
console.log("Using explicit decoding");

bytePos = 0;
for (const char of s) {
    const cp = char.codePointAt(0);
    const hex = cp.toString(16).toUpperCase().padStart(4, '0');
    console.log(`U+${hex} '${char}' starts at ${bytePos}`);
    examineRune(char);
    bytePos += Buffer.from(char).length;
}

function examineRune(char) {
    if (char === 't') {
        console.log("found tee");
    } else if (char === 'ส') {
        console.log("found so sua");
    }
}
