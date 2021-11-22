fetch('art.json').then(response => {
    response.json().then(response =>{
        addIMG(response.im1);
        addIMG(response.im2);
    })

})

function addIMG(link){
    let nextImg = document.createElement('img');
    nextImg.src = link;
    let body = document.querySelector('body');
    body.append(nextImg);

}