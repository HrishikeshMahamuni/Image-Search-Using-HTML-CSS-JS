const accessKey = "1P8K9KQAirncUmroJkRMMP__oBaHIcVGhLrKR3V5Xy8";

const formEle = document.querySelector("form");
const inputEle = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages() {
    inputData = inputEle.value;
    const URL = `https://api/unsplash.com/search/photos?page=${page}&query=${inputEle}&client_id=${accessKey}`

    const response = await fetch(URL)
    const data = await response.json()

    const result = data.results
    
    if(page === 1){
        searchResults.innerHTML = ""
    }

    result.map((result) =>{

        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("search-result")

        const image = document.createElement('img')
        image.src = result.URL.small
        image.alt = result.alt_description

        const imgLink = document.createElement('a')
        imgLink.href = result.links.html
        imgLink.target = "_blank"
        imgLink.textContent = result.alt_description

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imgLink)
        imageWrapper.appendChild(searchResults)


    });
    page++;
    if(page > 1)
    {
        showMore.style.display = "block"
    }
}
formEle.addEventListener("submit", (eve) =>  {
    event.preventDefault;
    page1;
    searchImages()
});

showMore.addEventListener("click", () =>  { 
    searchImages()
});