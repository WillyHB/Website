
fetch("./NewsJson.json")
.then(response => response.json())
.then(data =>{
    for (let i = data.Title.length -1; i >= 0; i--) {
               
        // (let i = data.Title.length; i >= 0; i--
        // 
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

        image.src = "Images/OIP.jfif"

        var h2 = document.createElement("h2");

        article.appendChild(h2);
        article.appendChild(image);
        div.appendChild(article);

        document.getElementById("News")!.appendChild(div);

        title.textContent = data.Title[i];
        h2.textContent = data.Description[i];
        image.src = `/Images/NewsCoverImages/${data.FileName[i]}`
        console.log(image);
        date.textContent = timeSince(data.date[i]);


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
          var aDay = 24*60*60*1000;              
    }  
});

   