fetch("./NewsJson.json")
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.Articles.length; i++) {

            var template = document.getElementsByTagName("template")[0] !;
            var clone = template.content.cloneNode(true);

            document.body.appendChild(clone);

            document.getElementById("popup-null") !.id = `popup-${i}`;
            document.getElementsByClassName("articleTitle")[i]!.textContent = data.Articles[i].Title;        
            document.getElementsByClassName("articleText")[i]!.innerHTML = data.Articles[i].Text;

            document.getElementsByClassName("date")[i]!.innerHTML = getTime(data.Articles[i].Date);
        }

    });

var index: number = 0;

function Clicked(i: number) {
    document.body.style.overflow = "hidden";

    document.getElementById(`popup-${i}`)!.classList.add("active");
    index = i;

    window.addEventListener("keydown", (event) => 
    {
        if (event.key == "Escape") {

            escaped();
        }
    });
}

function escaped() 
{
    document.body.style.overflow = "auto";
    window.removeEventListener;
    document.getElementById(`popup-${index}`)!.classList.remove("active");
}

function getTime(date : string){

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    var day = date.substring(0, 2);
    var month = date.substring(3,5);

      
    date = date.replace(date.substring(3,5), day)
    date = date.replace(date.substring(0,2), month);
   
    var dateUTC = new Date(date);
            
    return `Posted ${monthNames[dateUTC.getMonth()]} ${dateUTC.getDate()}, ${dateUTC.getFullYear()}`;
}