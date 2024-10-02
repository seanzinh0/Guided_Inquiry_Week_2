const imgSearchButton = document.getElementById("img-search-btn");
const searchBar = document.getElementById("searchbar");

function imgSearch(){
    const searchVal = searchBar.value;
    window.open(`https://www.google.com/search?q=${searchVal}&udm=2`);
}

imgSearchButton.addEventListener("click", imgSearch);