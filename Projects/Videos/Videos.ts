var active : boolean = true;

function Click(channel : Element){

    if (active){
        
        if (channel.id != "WillyHB"){
            channel.setAttribute('style', 'background-color: white; color: orange');
            
            document.getElementById("WillyHB")!.setAttribute('style', 'background-color: rgb(246, 246, 246); color: white');

            active = false;
        }
    }

    else{
    
        if (channel.id == "WillyHB"){
            channel.setAttribute('style', 'background-color: white; color: orange');

            document.getElementById("AwfulWillyHBSofa")!.setAttribute('style', 'background-color: rgb(246, 246, 246); color: white');

            active = true;

            var Video = document.createElement("div");

            Video.className = "Video";

            var Vid = document.createElement("iframe");
            Vid.className = "Vid";

            var InfoHeader = document.createElement("div");
            InfoHeader.className = "InfoHeader";

            var Title = document.createElement("h2");
            Title.className = "Title"
            Title.textContent = "Test";

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

            document.getElementById("Content")!.appendChild(Video);
    }
}