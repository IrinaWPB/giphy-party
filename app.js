console.log("Let's get this party started!");

const imgField = document.querySelector('#imgField');
const search = document.querySelector('input');
const searchBtn = document.querySelector('#searchBtn');
const deleteBtn = document.querySelector('#deleteBtn');

async function getGif(term) {
    const res = await axios.get("http://api.giphy.com/v1/gifs/random", {params : {
        tag : term, 
        api_key : 'nLZDoduyU2iNSeizKhirjEpDn5fNpx7z'
}});
    const resUrl = res.data.data.images.downsized.url;
    console.log(resUrl);
    createElement(resUrl); 
}

function createElement(gif) {
    const myGif = document.createElement('img');
    myGif.setAttribute('height', '200px');
    myGif.src = gif;
    imgField.append(myGif);
}


searchBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const searchTerm = search.value;
    getGif(searchTerm);
});

deleteBtn.addEventListener('click', function() {
    imgField.innetText = '';
});
