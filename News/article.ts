
fetch("./NewsJson.json")
.then(response => response.json())
.then(data =>{
    for (let i = 0; i < data.Title.length; i++) {

        var template = document.getElementsByTagName("template")[0]!;
        var clone = template.content.cloneNode(true);
        

        document.body.appendChild(clone);

        document.getElementById("popup-null")!.id = `popup-${i}`;
    }

});        
    
function Clicked(index : number){
    document.body.style.overflow = "hidden";

document.getElementById(`popup-${index}`)?.classList.add("active");

    window.addEventListener("keydown", (event) => {
        if (event.key == "Escape"){
            escaped(index);
        }
    });
}

function escaped(index : number){
    document.body.style.overflow = "auto";
    window.removeEventListener;
    document.getElementById(`popup-${index}`)?.classList.remove("active");
}




