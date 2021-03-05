var div = document.createElement("div");

div.className = "NewsElements";

div.appendChild(document.createElement("div"));

var article = document.createElement("article");
var image = document.createElement("img");
image.src = "Images/OIP.jfif"

article.appendChild(image);
div.appendChild(article);

document.head.appendChild(div);