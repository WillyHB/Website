"use strict";
function Clicked() {
    var _a;
    document.body.style.overflow = "hidden";
    var template = document.getElementsByTagName("template")[0];
    var clone = template.content.cloneNode(true);
    document.body.appendChild(clone);
    (_a = document.getElementById("popup-1")) === null || _a === void 0 ? void 0 : _a.classList.add("active");
    window.addEventListener("keydown", (event) => {
        if (event.key == "Escape") {
            escaped();
        }
    });
}
function escaped() {
    var _a;
    document.body.style.overflow = "auto";
    window.removeEventListener;
    (_a = document.getElementById("popup-1")) === null || _a === void 0 ? void 0 : _a.classList.remove("active");
}
