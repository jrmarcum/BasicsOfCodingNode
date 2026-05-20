function render(tmpl, data) {
    if (typeof data !== 'object' || data === null) {
        const val = String(data);
        return tmpl
            .replace(/\{\{if \.\}\}([\s\S]*?)\{\{else\}\}([\s\S]*?)\{\{end\}\}/g,
                (_, t, f) => data ? t : f)
            .replace(/\{\{if \.\}\}([\s\S]*?)\{\{end\}\}/g,
                (_, body) => data ? body : '')
            .replace(/\{\{\.\}\}/g, val);
    }
    if (Array.isArray(data)) {
        return tmpl.replace(/\{\{\.\}\}/g, '[' + data.join(' ') + ']');
    }
    const obj = data;
    return tmpl
        .replace(/\{\{\.(\w+)\}\}/g, (_, k) => String(obj[k] ?? ''))
        .replace(/\{\{if \.(\w+)\}\}([\s\S]*?)\{\{else\}\}([\s\S]*?)\{\{end\}\}/g,
            (_, k, t, f) => obj[k] ? render(t, obj) : render(f, obj))
        .replace(/\{\{if \.(\w+)\}\}([\s\S]*?)\{\{end\}\}/g,
            (_, k, body) => obj[k] ? render(body, obj) : '')
        .replace(/\{\{range \.(\w+)\}\}([\s\S]*?)\{\{end\}\}/g,
            (_, k, body) => (obj[k] || []).map((item) =>
                typeof item === 'object' && item !== null
                    ? render(body, item)
                    : body.replace(/\{\{\.\}\}/g, String(item))
            ).join(''));
}

const t1 = "Value: {{.}}\n";
process.stdout.write(render(t1, "some text"));
process.stdout.write(render(t1, 5));
process.stdout.write(render(t1, ["Go", "Rust", "C++", "C#"]));

const t2 = "Name: {{.Name}}\n";
process.stdout.write(render(t2, { Name: "Jane Doe" }));
process.stdout.write(render(t2, { Name: "Mickey Mouse" }));

const t3 = "{{if .}}yes{{else}}no{{end}}\n";
process.stdout.write(render(t3, "not empty"));
process.stdout.write(render(t3, ""));

const t4 = "Range: {{range .Items}}{{.}} {{end}}\n";
process.stdout.write(render(t4, { Items: ["Go", "Rust", "C++", "C#"] }));
