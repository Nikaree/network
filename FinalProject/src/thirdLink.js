

fetch('./art.json').then(response => {
    response.json().then(response =>{
        insert(response.server);
        insert(response.url);
        insert(response.base);
    })
    console.log('fetch')

})

function insert(imageJSON){
    
    let imageHTML = new Image();
    imageHTML.src = imageJSON;
    document.getElementById("gg").appendChild(imageHTML);
    console.log('insert')

}