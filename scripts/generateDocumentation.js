const fetch = require("node-fetch");
const fs = require("fs");
const parser = require("fast-xml-parser");
const he = require("he");

const xmlToJsObject = xml => {
    let parsingOptions = {
        attributeNamePrefix : "@_",
        attrNodeName: "attr",
        textNodeName : "text",
        ignoreAttributes : true,
        ignoreNameSpace : false,
        allowBooleanAttributes : false,
        parseNodeValue : true,
        parseAttributeValue : false,
        trimValues: true,
        cdataTagName: "__cdata",
        cdataPositionChar: "\\c",
        parseTrueNumberOnly: false,
        arrayMode: false,
        attrValueProcessor: (val, attrName) => he.decode(val, { isAttributeValue: true }),
        tagValueProcessor : (val, tagName) => he.decode(val),
        stopNodes: ["parse-me-as-string"]
    };

    return parser.convertToJson(parser.getTraversalObj(xml, parsingOptions), parsingOptions);
}

const get = url => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => resolve(res.text()))
            .catch(err => reject(err));
    });
}

async function main() {
    let documentation = xmlToJsObject(await get("https://raw.githubusercontent.com/Crab-Wave/ora/master/documentation.json"));

    if (documentation.doc.members.member === undefined)
        throw Error("Invalid documentation object");
    else
        fs.writeFileSync("./src/pages/Documentation/documentation.json", JSON.stringify(documentation.doc.members.member, null, 2), "utf-8");
}

main();
