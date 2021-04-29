var active = true;
var getVideo = function (index, Title, Date, Description) {
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCYr_3hWoz2fyvCC0-2jq1Ow&maxResults=50&order=date&key=AIzaSyBVpbA0fb4QuTMURSzOvsb3_Wina-srvuQ")
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        console.log(data);
        Title.innerHTML = data["items"][index].title;
        Date.innerHTML = data["items"][index].date;
        Description.innerHTML = data["items"][index].description;
    });
};
function Click(channel) {
    if (active) {
        if (channel.id != "WillyHB") {
            channel.setAttribute('style', 'background-color: white; color: orange');
            document.getElementById("WillyHB").setAttribute('style', 'background-color: rgb(246, 246, 246); color: white');
            active = false;
        }
    }
    else {
        if (channel.id == "WillyHB") {
            channel.setAttribute('style', 'background-color: white; color: orange');
            document.getElementById("AwfulWillyHBSofa").setAttribute('style', 'background-color: rgb(246, 246, 246); color: white');
            active = true;
        }
    }
}
function CreateVideo(index) {
    var Video = document.createElement("div");
    Video.className = "Video";
    var Vid = document.createElement("iframe");
    Vid.className = "Vid";
    var InfoHeader = document.createElement("div");
    InfoHeader.className = "InfoHeader";
    var Title = document.createElement("h2");
    Title.className = "Title";
    Title.innerHTML = "hey";
    var Date = document.createElement("h2");
    Date.className = "Date";
    Date.textContent = "April 5, 2020";
    var Description = document.createElement("h2");
    Description.className = "Description";
    Description.textContent = "This is EPIC";
    Video.appendChild(Vid);
    InfoHeader.appendChild(Title);
    InfoHeader.appendChild(Date);
    Video.appendChild(InfoHeader);
    Video.appendChild(Description);
    getVideo(index, Title, Date, Description);
    document.getElementById("Content").appendChild(Video);
}
CreateVideo(2);