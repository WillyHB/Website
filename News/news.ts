var Articles : any;
var currentlyLoaded : number;


fetch("./NewsJson.json")
.then(response => response.json())
.then(data =>{
    
  currentlyLoaded = data.Articles.length
  ;
  Articles = data.Articles;

  LoadArticle(4);
});

function LoadMoreClick(){
   LoadArticle(4);
}

function LoadArticle(amount: number){

  if (currentlyLoaded - amount < 0){
    amount = currentlyLoaded;
  }

  var amountCalc = currentlyLoaded - amount;

  for (let i = currentlyLoaded -1; i >= amountCalc; i--){

  var div = document.createElement("div");

  div.className = "NewsElement";
  div.addEventListener("click", function(){Clicked(i)});

  var titleDiv = document.createElement("div");
  var title = document.createElement("h1");
  title.className = "Title";

  var date = document.createElement("h1");
  date.className = "Date";

  date.textContent = "27/02/2021"

  title.textContent = "This was made with Typescript :)"

  titleDiv.appendChild(title);
  titleDiv.appendChild(date);

  div.appendChild(titleDiv);

  var article = document.createElement("article");
  var image = document.createElement("img");

  image.src = "/Images/OIP.jfif"

  var h2 = document.createElement("h2");

  article.appendChild(h2);
  article.appendChild(image);
  div.appendChild(article);

  document.getElementById("News")!.insertBefore(div, document.getElementById("LoadMoreParent"));

  title.textContent = Articles[i].Title;
  h2.textContent =  Articles[i].Description;
  image.src = `/Images/NewsCoverImages/${ Articles[i].CoverImageFileName}`       
  date.textContent = timeSince(Articles[i].Date);
  } 

  currentlyLoaded -= amount;

  if (currentlyLoaded <= 0){
    document.getElementById("LoadMoreParent")!.remove();
  } 
}


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


