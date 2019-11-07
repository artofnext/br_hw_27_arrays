let css1 = [
    {
        property: "font-size",
        value: "20px",
    },
    {
        property: "color",
        value: "red",
    },
    {
        property: "font-weight",
        value: "bold",
    },
    {
        property: "display",
        value: "block",
    },
    {
        property: "margin",
        value: "0 auto",
    },
    {
        property: "width",
        value: "80%",
    },
    {
        property: "text-align",
        value: "center",
    },
]

function outputHTML(css, text) {
    let renderedHTML = "<p style='";
    for (let i in css) {
        renderedHTML += css[i].property + ":" + css[i].value + ";";
    }
    renderedHTML += "'>";
    renderedHTML += text;
    renderedHTML += "</p>";

    document.write(renderedHTML);
}

outputHTML(css1, "Created in JS");