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
        var div = document.createElement("div");
        div.className = "track";

        var h1 = document.createElement("h1");
        h1.textContent = tracks[i].title;

        var h12 = document.createElement("h1");
        h12.textContent = doubleDigitnum(i+1);

        var sound      = document.createElement('audio');
        sound.id       = 'audiosrc';
        sound.controls = 'controls';


        div.append(h12);
        div.append(h1);
  
        div.append(sound);
        
        
        if (tracks[i].title != "Deez Rocks (Parts I - IV)"){
            div.querySelector("audio").src = `/Music/CleithrophobiaOST/${i+1} ${tracks[i].title}.wav`;
        }

        else{
            div.querySelector("audio").src = `/Music/CleithrophobiaOST/${i+1} ${tracks[i].title}.mp3`;
        }
   

        document.getElementById("mainContent").appendChild(div);
    }
}

function doubleDigitnum(i){
    if (i < 10){
        return "0" + i.toString();
    }

    return i;
}

