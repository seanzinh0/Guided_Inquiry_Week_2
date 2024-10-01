const searchBar = document.getElementById("searchbar");
const searchButton = document.getElementById("google-search-btn");
const randomSearchButton = document.getElementById("random-search-btn");

function displaySearch(){
    const searchBarVal = searchBar.value;
    alert("You searched: " + searchBarVal);
}

function randomMessage(isMouseOver) {
    if(isMouseOver){
        const messageArr = ["Feeling Hungry", "Feeling Tired", "Feeling Bored", "Feeling Sad", "Feeling Happy"];
        const randomIndex = Math.floor(Math.random() * messageArr.length)
        randomSearchButton.value = messageArr[randomIndex];
    }else{
        randomSearchButton.value = "Feeling Lucky";
    }
}

searchButton.addEventListener("click", displaySearch);
randomSearchButton.addEventListener("click", displaySearch);
randomSearchButton.addEventListener("mouseover", function(){
    randomMessage(true);
});
randomSearchButton.addEventListener("mouseout", function(){
    randomMessage(false);
});
searchBar.addEventListener("click", function(){
    searchBar.style.height = "400px";
})
searchBar.addEventListener("mouseout", function(){
    searchBar.style.height = "50px";
})