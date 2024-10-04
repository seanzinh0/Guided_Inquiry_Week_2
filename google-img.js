//Initialize variables for document elements
const imgSearchButton = document.getElementById("img-search-btn");
const searchBar = document.getElementById("searchbar");

//Similar to display search function adds "&udm=2" at the end of search to display images instead
function imgSearch(event){
    event.preventDefault;//prevent default value
    const searchVal = searchBar.value;
    if(searchVal === ""){//check if value is empty
        return;
    }
    window.open(`https://www.google.com/search?q=${searchVal}&udm=2`);
}

imgSearchButton.addEventListener("click", imgSearch);//when imgSearchButton is clicked call the imgSearch function