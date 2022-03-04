var Articles;
var currentlyLoaded;

fetch("./Json/Posts.Json")
.then(response => response.json())
.then(data =>{

  Articles = data.Articles;
     
  currentlyLoaded = Articles.length;
    loadArticle(3)
    loadSideBar();
});

function loadSideBar(){
    for (let i = Articles.length-1; i >= 0; i--){
        var h2 = document.createElement("h2");
        h2.addEventListener("click", function(){enter(i)});
        h2.innerHTML = `<strong style=\"color: rgb(221, 45, 74);\" onclick=\"test()\"'>${timeSince(Articles[i].Date)}</strong> <br> ${Articles[i].Title}`;

        document.getElementById("summaries").append(h2);
    }
}

function loadArticle(amount){

  if (amount <= currentlyLoaded)
  {
    for (let i = currentlyLoaded-1; i >  currentlyLoaded-1-amount; i--)
    {
      loadModal(i);

        var post = document.createElement("div");
        post.className = "post";
        post.addEventListener("click", function(){enter(i)});
        var postTop = document.createElement("div");
        postTop.className = "postTop";
              
        var postBottom = document.createElement("div");
        postBottom.className = "postBottom";


        var h1 = document.createElement("h1");
        h1.textContent = Articles[i].Title;

        var h3 = document.createElement("h3");
        h3.textContent = timeSince(Articles[i].Date)
        
        var img = document.createElement("img");
        img.src = `/Images/Posts/${Articles[i].CoverImageFileName}`;

        var h2 = document.createElement("h2");
        h2.textContent = Articles[i].Description;

        postTop.append(h1);
        postTop.append(h3);

        postBottom.append(img);
        postBottom.append(h2);

        post.append(postTop);
        post.append(postBottom);

        document.getElementById("posts").append(post);
    }
  }

    

    currentlyLoaded -= amount;
}

function loadModal(i){
  var template = document.getElementsByTagName("template")[0];
  document
  var clone = template.content.cloneNode(true);

  document.body.append(clone);

  var modal = document.getElementById("modal-null");
  modal.id = `modal-${i}`;
  modal.querySelector("button").addEventListener("click", function(){exit(i)});

  modal.querySelector("h1").innerHTML = Articles[i].Title;
  var text = Articles[i].Text.replace("\n", "<br>");
  text = Articles[i].Text.replace("\n\n", "<br><br>");
  modal.querySelector("p").innerHTML = text;

  modal.style = "display: none;"

}

function timeSince(date) {

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

  