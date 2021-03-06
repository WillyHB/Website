fetch("NewsJason.json")
    .then(function (response) { return response.json(); })
    .then(function (data) {
    console.log(data.Title[0]);
});
/*const div = document.createElement("div");

div.className = "NewsElement";

const titleDiv = document.createElement("div");
const title = document.createElement("h1");

title.textContent = "This was made with Typescript :)"

titleDiv.appendChild(title);

div.appendChild(titleDiv);

const article = document.createElement("article");
const image = document.createElement("img");

image.src = "Images/OIP.jfif"

const h2 = document.createElement("h2");
h2.textContent = "Javascript ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet enim. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Egestas congue quisque egestas diam. Tellus integer feugiat scelerisque varius morbi enim nunc. Nisl condimentum id venenatis a condimentum vitae. Libero justo laoreet sit amet cursus. Amet consectetur adipiscing elit ut. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Eget lorem dolor sed viverra. Faucibus in ornare quam viverra. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Porttitor eget dolor morbi non arcu risus quis varius. Hairy Henry Fart AAAAAAAAAAAA.";

article.appendChild(h2);
article.appendChild(image);
div.appendChild(article);

document.getElementById("News").appendChild(div);*/
