
fetch("./NewsJson.json")
.then(response => response.json())
.then(data =>{
    for (let i = 0; i < data.Title.length; i++) {
        
        
        var div = document.createElement("div");

        div.className = "NewsElement";

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

        document.getElementById("News").appendChild(div);

        title.textContent = data.Title[i];
        h2.textContent = data.Description[i];
        image.src = `Images/CoverImages/${data.FileName[i]}`

        date.textContent = timeSince(data.date[i]);
        

        function timeSince(date) {

            var day = date.substring(0, 2);
            var month = date.substring(3,5);

      
            date = date.replace("03", "07")
            date = date.replace(date.substring(0,2), month);

            
            var dateUTC = new Date(date);




            var seconds = Math.floor(((new Date().getTime()/1000) - dateUTC.getTime() / 1000))
          
            var interval = seconds / 31536000;
          
            if (interval > 1) {
              return Math.floor(interval) + " year(s) ago";
            }

            interval = seconds / 2592000;
            if (interval > 1) {
              return Math.floor(interval) + " month(s) ago";
            }

            interval = seconds / 86400;
            if (interval > 1) {
              return Math.floor(interval) + " day(s) ago";
            }

            interval = seconds / 3600;
            if (interval > 1) {
              return Math.floor(interval) + " hour(s) ago";
            }

            interval = seconds / 60;
            if (interval > 1) {
              return Math.floor(interval) + " minute(s) ago";
            }
       
  
            return Math.floor(seconds) + " seconds ago";
          }
          var aDay = 24*60*60*1000;              
    }  
});

   