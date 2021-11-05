var Articles;


    
function exit(i){
    var modal = document.getElementById(`modal-${i}`);
    modal.style = "display: none;"


    var iframe = modal.querySelector("iframe");
    var src = iframe.src;
    iframe.src = "";
    iframe.src = src;
}

function enter(i){
    var modal = document.getElementById(`modal-${i}`);
    modal.querySelector("h2").innerHTML = getTime(Articles[i].Date);
    modal.style = "display: block;";
    document.addEventListener('keyup', function(event){
        if (event.key == 'Escape'){
            exit(i);
        }
    });
}

function getTime(date) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var day = date.substring(0, 2);
    var month = date.substring(3, 5);
    date = date.replace(date.substring(3, 5), day);
    date = date.replace(date.substring(0, 2), month);
    var dateUTC = new Date(date);
    return "Posted " + monthNames[dateUTC.getMonth()] + " " + dateUTC.getDate() + ", " + dateUTC.getFullYear();

}