
    
function Clicked(){
    document.body.style.overflow = "hidden";

    var template = document.getElementsByTagName("template")[0]!;
    var clone = template.content.cloneNode(true);

    document.body.appendChild(clone);

    document.getElementById("popup-1")?.classList.add("active");
    
    window.addEventListener("keydown", (event) => {
        if (event.key == "Escape"){
            escaped();
        }
    });
}

function escaped(){
    document.body.style.overflow = "auto";
    window.removeEventListener;
    document.getElementById("popup-1")?.classList.remove("active");
}




