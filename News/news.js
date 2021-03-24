var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Articles;
var currentlyLoaded;
fetch("./NewsJson.json")
    .then(function (response) { return response.json(); })
    .then(function (data) {
    currentlyLoaded = data.Articles.length;
    Articles = data.Articles;
    LoadArticle(4);
});
function LoadMoreClick() {
    LoadArticle(4);
}
function LoadArticle(amount) {
    return __awaiter(this, void 0, void 0, function () {
        var amountCalc, _loop_1, div, titleDiv, title, date, article, image, h2, i;
        return __generator(this, function (_a) {
            if (currentlyLoaded - amount < 0) {
                amount = currentlyLoaded;
            }
            amountCalc = currentlyLoaded - amount;
            _loop_1 = function (i) {
                div = document.createElement("div");
                div.className = "NewsElement";
                div.addEventListener("click", function () { Clicked(i); });
                titleDiv = document.createElement("div");
                title = document.createElement("h1");
                title.className = "Title";
                date = document.createElement("h1");
                date.className = "Date";
                date.textContent = "27/02/2021";
                title.textContent = "Placeholder Title";
                titleDiv.appendChild(title);
                titleDiv.appendChild(date);
                div.appendChild(titleDiv);
                article = document.createElement("article");
                image = document.createElement("img");
                image.src = "/Images/OIP.jfif";
                h2 = document.createElement("h2");
                article.appendChild(image);
                article.appendChild(h2);
                div.appendChild(article);
                document.getElementById("News").insertBefore(div, document.getElementById("LoadMoreParent"));
                title.textContent = Articles[i].Title;
                h2.textContent = Articles[i].Description;
                image.src = "/Images/NewsCoverImages/" + Articles[i].CoverImageFileName;
                date.textContent = timeSince(Articles[i].Date);
                GeneratePopup(i);
            };
            for (i = currentlyLoaded - 1; i >= amountCalc; i--) {
                _loop_1(i);
            }
            currentlyLoaded -= amount;
            if (currentlyLoaded <= 0) {
                document.getElementById("LoadMoreParent").remove();
            }
            return [2 /*return*/];
        });
    });
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
