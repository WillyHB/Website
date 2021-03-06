
fetch("NewsJason.json")
    .then(response => response.json())
    .then(data =>{
        console.log(data.Title[0])
    })



