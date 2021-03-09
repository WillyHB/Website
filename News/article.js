"use strict";
fetch("./NewsJson.json")
    .then(response => response.json())
    .then(data => {
    for (let i = 0; i < data.Title.length; i++) {
        var template = document.getElementsByTagName("template")[0];
        var clone = template.content.cloneNode(true);
        document.body.appendChild(clone);
        document.getElementById("popup-null").id = `popup-${i}`;
    }
});
function Clicked(index) {
    var _a;
    document.body.style.overflow = "hidden";
    (_a = document.getElementById(`popup-${index}`)) === null || _a === void 0 ? void 0 : _a.classList.add("active");
    window.addEventListener("keydown", (event) => {
        if (event.key == "Escape") {
            escaped(index);
        }
    });
}
function escaped(index) {
    var _a;
    document.body.style.overflow = "auto";
    window.removeEventListener;
    (_a = document.getElementById(`popup-${index}`)) === null || _a === void 0 ? void 0 : _a.classList.remove("active");
}
