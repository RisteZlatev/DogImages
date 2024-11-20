fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then(json =>{
        console.log(json);
        const image = document.getElementById('picture');
       image.src = json.message;
       const button = document.getElementById('newPic');
       button.addEventListener('click', function(){
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then(json =>{
        console.log(json);
        image.src = json.message;
        });
       });
    }

)
    
