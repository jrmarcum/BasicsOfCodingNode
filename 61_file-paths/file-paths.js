import path from 'node:path';

const p = path.join("dir1", "dir2", "filename");
console.log("p:", p);

console.log(path.join("dir1//", "filename"));
console.log(path.join("dir1/../dir1", "filename"));

console.log("Dir(p):", path.dirname(p));
console.log("Base(p):", path.basename(p));

console.log(path.isAbsolute("dir/file"));
console.log(path.isAbsolute("/dir/file"));

const filename = "config.json";
console.log(path.extname(filename));
console.log(path.basename(filename, path.extname(filename)));

const rel1 = path.relative("a/b", "a/b/t/file");
console.log(rel1);

const rel2 = path.relative("a/b", "a/c/t/file");
console.log(rel2);
