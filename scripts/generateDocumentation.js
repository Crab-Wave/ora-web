const fetch = require("node-fetch");
const fs = require("fs");
const parser = require("fast-xml-parser");
const he = require("he");

const xmlToJson = xml => {
    let parsingOptions = {
        attributeNamePrefix : "",
        attrNodeName: "attributes",
        textNodeName : "text",
        ignoreAttributes : false,
        ignoreNameSpace : false,
        allowBooleanAttributes : false,
        parseNodeValue : true,
        parseAttributeValue : false,
        trimValues: false,
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

class Documentation {
    constructor() {
        this.document = {};
    }

    parse(members) {
        for (let i = 0; i < members.length; i++) {
            let type = members[i].attributes.name.substring(0, 1);

            if (type === "T")
                this.addClass(members[i].attributes.name.substring(2), members[i]);
            else if (type === "M") {
                let [classname, prototype] = this.parseClassnameAndPrototype(members[i].attributes.name);
                if (prototype.includes("#ctor"))
                    this.addConstructorToClass(classname, prototype, members[i]);
                else
                    this.addMethodToClass(classname, prototype, members[i]);
            }
        }
    }

    parseClassnameAndPrototype(nameAttribute) {
        let name = nameAttribute.substring(2);
        let splitIndex = name.substring(0, name.indexOf("(")).lastIndexOf(".");     // split index at the last '.' before '('
        return [name.substring(0, splitIndex), name.substring(splitIndex+1, name.length)];
    }

    addClass(classname, member) {
        if (!this.isClassRegistered(classname))
            this.registerClass(classname);

        if ("summary" in member)
            this.document[classname].summary = member.summary.trim();
        if ("example" in member) {
            for (let key in member.example) {
                if (typeof(member.example[key]) === "string")
                    this.document[classname].example[key] = this.removeAdditionalIndent(member.example[key]);
                else
                    this.document[classname].example[key] = member.example[key];
            }
        }
    }

    addConstructorToClass(classname, prototype, member) {
        if (!this.isClassRegistered(classname))
            this.registerClass(classname);

        this.document[classname].constructors.push({
            prototype: prototype.replace(",", ", ").replace("#ctor", this.document[classname].name),
            summary: member.summary.trim(),
            param: member.param,
            returns: member.returns
        });
    }

    addMethodToClass(classname, prototype, member) {
        if (!this.isClassRegistered(classname))
            this.registerClass(classname);

        this.document[classname].methods.push({
            prototype: prototype.replace(",", ", "),
            summary: member.summary.trim(),
            param: member.param,
            returns: member.returns
        });
    }

    serialize() {
        return JSON.stringify(this.document, null, 2);
    }

    isClassRegistered(classname) {
        return classname in this.document;
    }

    registerClass(classname) {
        let m = classname.split(".");
        let name = m.pop();
        let namespace = m.join(".");

        this.document[classname] = {
            name,
            namespace,
            summary: "",
            example: {},
            constructors: [],
            methods: []
        };
    }

    removeAdditionalIndent(str) {
        let firstLine = str.split("\n")[1];
        let additionalIndent = " ".repeat(firstLine.length - firstLine.trimStart().length);

        return str.trim()
            .split("\n")
            .map(x => x.startsWith(additionalIndent)
                    ? x.substring(additionalIndent.length)
                    : x)
            .join("\n");
    }
}

async function main() {
    let json = xmlToJson(await get("https://raw.githubusercontent.com/Crab-Wave/ora/master/ORA.API/documentation.xml"));

    if (!("doc" in json) || !("members" in json.doc) || !("member" in json.doc.members))
        throw Error("Invalid documentation object");

    let documentation = new Documentation();
    documentation.parse(json.doc.members.member);

    fs.writeFileSync("./src/documentation.json", documentation.serialize(), "utf-8");
}

main();
