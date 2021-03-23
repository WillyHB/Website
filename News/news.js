var currentlyLoaded;
fetch("./NewsJson.json")
    .then(function (response) { return response.json(); })
    .then(function (data) {
    currentlyLoaded = data.Articles.length;
    loadArticle(4, data);
});
function loadArticle(amount, data) {
    var amountCalc = currentlyLoaded - amount;
    var _loop_1 = function (i) {
        currentlyLoaded - amount;
        div = document.createElement("div");
        div.className = "NewsElement";
        div.addEventListener("click", function () { Clicked(i); });
        titleDiv = document.createElement("div");
        title = document.createElement("h1");
        title.className = "Title";
        date = document.createElement("h1");
        date.className = "Date";
        date.textContent = "27/02/2021";
        title.textContent = "This was made with Typescript :)";
        titleDiv.appendChild(title);
        titleDiv.appendChild(date);
        div.appendChild(titleDiv);
        article = document.createElement("article");
        image = document.createElement("img");
        image.src = "/Images/OIP.jfif";
        h2 = document.createElement("h2");
        article.appendChild(h2);
        article.appendChild(image);
        div.appendChild(article);
        document.getElementById("News").insertBefore(div, document.getElementById("LoadMoreParent"));
        title.textContent = data.Articles[i].Title;
        h2.textContent = data.Articles[i].Description;
        image.src = "/Images/NewsCoverImages/" + data.Articles[i].CoverImageFileName;
        date.textContent = timeSince(data.Articles[i].Date);
    };
    var div, titleDiv, title, date, article, image, h2;
    for (var i = data.Articles.length - 1; i >= amountCalc; i--) {
        _loop_1(i);
    }
}
function timeSince(date) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var day = date.substring(0, 2);
    var month = date.substring(3, 5);
    date = date.replace(date.substring(3, 5), day);
    date = date.replace(date.substring(0, 2), month);
    var dateUTC = new Date(date);
    var seconds = Math.floor(((new Date().getTime() / 1000) - dateUTC.getTime() / 1000));
    var interval = seconds / 31536000;
    interval = seconds / 604800;
    if (interval > 1) {
        return monthNames[dateUTC.getUTCMonth()] + " " + dateUTC.getDate() + ", " + dateUTC.getUTCFullYear();
    }
    interval = seconds / 86400;
    if (interval >= 1 && interval < 2) {
        return Math.floor(interval) + " day ago";
    }
    else if (interval >= 2) {
        return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1 && interval < 2) {
        return Math.floor(interval) + " hour ago";
    }
    else if (interval >= 2) {
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1 && interval < 2) {
        return Math.floor(interval) + " minute ago";
    }
    else if (interval >= 2) {
        return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
}
var aDay = 24 * 60 * 60 * 1000;
