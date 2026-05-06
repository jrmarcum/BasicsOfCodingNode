import xml2js from 'xml2js';

function buildPlantXml(plant, indent = " ", innerIndent = "  ") {
    const origins = plant.origin.map(o => `${indent}${innerIndent}<origin>${o}</origin>`).join("\n");
    return `${indent}<plant id="${plant.id}">\n${indent}${innerIndent}<name>${plant.name}</name>\n${origins}\n${indent}</plant>`;
}

const coffee = { id: 27, name: "Coffee", origin: ["Ethiopia", "Brazil"] };
const tomato = { id: 81, name: "Tomato", origin: ["Mexico", "California"] };

const coffeeXml = buildPlantXml(coffee);
console.log(coffeeXml);

const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
console.log(xmlHeader + coffeeXml);

xml2js.parseString(coffeeXml, { explicitArray: true, mergeAttrs: false }, (err, result) => {
    if (err) throw err;
    const pl = result.plant;
    const id = parseInt(pl.$.id);
    const name = pl.name[0];
    const origins = pl.origin;
    console.log(`Plant id=${id}, name=${name}, origin=[${origins.join(" ")}]`);
});

const nestingXml = ` <nesting>\n   <parent>\n     <child>\n${buildPlantXml(coffee, "       ", "  ")}\n${buildPlantXml(tomato, "       ", "  ")}\n     </child>\n   </parent>\n </nesting>`;
console.log(nestingXml);
