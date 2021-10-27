class track{
    constructor(title, src){
        this.title = title;
    }
    title;
}

var template = document.getElementsByTagName("template")[0];

function generateTrack(tracks){
    for (let i = 0; i < tracks.length; i++)
    {
        var clone = template.content.cloneNode(true);
    
        clone.getElementById("h1").textContent = tracks[i].title;
        clone.getElementById("h2").textContent = doubleDigitnum(i+1);
    
        clone.getElementById("audiosrc").src = `/Music/Cleithrophobia/${i+1} ${tracks[i].title}.wav`;
    
        document.getElementById("tracks").appendChild(clone);
    }
}

function doubleDigitnum(i){
    if (i < 10){
        return "0" + i.toString();
    }

    return i;
}



