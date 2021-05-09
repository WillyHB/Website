var active : boolean = true;

var vidData : any;

var prevPageToken : any;

var channelId = "UCYr_3hWoz2fyvCC0-2jq1Ow";

    let GetVideos = () => {

        var url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=date&key=AIzaSyBVpbA0fb4QuTMURSzOvsb3_Wina-srvuQ&pageToken=`;

        if (vidData != null){
            url = url.concat(vidData.nextPageToken);
            
            if (vidData.nextPageToken == prevPageToken){
                return;
            }

            prevPageToken = vidData.nextPageToken;
            
        }


        fetch(url)
    
        .then (response => {    
            
            return response.json()
        })
        .then (data => {
    
            console.log(data);


            vidData = data;
            
            for (var i = 0; i < 10; i++){        
                CreateVideo(i, data);
            }      
        })
  }
  
function Click(channel : Element){

    if (active){
        
        if (channel.id != "WillyHB"){
            channel.setAttribute('style', 'background-color: white; color: orange');

            channelId = "UCOe8mKP12vFIhpbfvUjPlLQ";
            
            window.open('mailto:test@example.com?subject=fart&body=sex')

            document.getElementById("WillyHB")!.setAttribute('style', 'background-color: rgb(246, 246, 246); color: white');

            active = false;


        }
    }

    else{
    
        if (channel.id == "WillyHB"){
            channel.setAttribute('style', 'background-color: white; color: orange');

            channelId = "UCYr_3hWoz2fyvCC0-2jq1Ow";

            document.getElementById("AwfulWillyHBSofa")!.setAttribute('style', 'background-color: rgb(246, 246, 246); color: white');

            active = true;


        }
    }

    var paras = document.getElementsByClassName('Video');

    while(paras[0]) {
    paras[0].parentNode!.removeChild(paras[0]);

    }

    vidData = null;
    prevPageToken = null;

    GetVideos();

    return;
}

function CreateVideo(index : number, data : any){

    var a = document.createElement("a");
    a.href = `https://www.youtube.com/watch?v=${data["items"][index].id.videoId}`;

    a.target = "_blank";

    var Video = document.createElement("div");

    Video.className = "Video";

    var Vid = document.createElement("iframe");
    Vid.className = "Vid";

    var InfoHeader = document.createElement("div");
    InfoHeader.className = "InfoHeader";

    var Title = document.createElement("h2");
    Title.className = "Title";
    Title.innerHTML = "hey";

    var date = document.createElement("h2");
    date.className = "Date";
    date.textContent = "April 5, 2020";

    var Description = document.createElement("h2");
    Description.className = "Description";
    Description.textContent = "This is EPIC";

    a.appendChild(Video);
    Video.appendChild(Vid);

    InfoHeader.appendChild(Title);
    InfoHeader.appendChild(date);

    Video.appendChild(InfoHeader);
    Video.appendChild(Description);

    var d = new Date(data["items"][index].snippet.publishedAt);
    
    Title.innerHTML = data["items"][index].snippet.title;
    date.innerHTML = d.toDateString();
    Description.innerHTML = data["items"][index].snippet.description;
    Vid.src = `https://www.youtube.com/embed/${data["items"][index].id.videoId}`

    document.getElementById("Videos")!.appendChild(a);
}

GetVideos();

function timeSince(date : string) {

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    
      var day = date.substring(0, 2);
      var month = date.substring(3,5);
  
  
      date = date.replace(date.substring(3,5), day)
      date = date.replace(date.substring(0,2), month);
  
      var dateUTC = new Date(date);
  
      var seconds = Math.floor(((new Date().getTime()/1000) - dateUTC.getTime() / 1000))
    
      var interval = seconds / 31536000;
  
      interval = seconds / 604800;
      if (interval > 1){
        return `${monthNames[dateUTC.getUTCMonth()]} ${dateUTC.getDate()}, ${dateUTC.getUTCFullYear()}`
      }
  
      interval = seconds / 86400;
      if (interval >= 1  && interval < 2) {
        return Math.floor(interval) + " day ago";
      }
  
      else if (interval >= 2){
        return Math.floor(interval) + " days ago";
      }
  
      interval = seconds / 3600;
      if (interval > 1 && interval < 2 ) {
        return Math.floor(interval) + " hour ago";
      }
  
      else if (interval >= 2){
        return Math.floor(interval) + " hours ago";
      }
  
      interval = seconds / 60;
      if (interval > 1 && interval < 2 ) {
        return Math.floor(interval) + " minute ago";
      }
  
      else if (interval >= 2){
        return Math.floor(interval) + " minutes ago";
      }
  
      return Math.floor(seconds) + " seconds ago";
  }  



