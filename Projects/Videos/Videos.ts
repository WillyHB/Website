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
        }   
    }
}