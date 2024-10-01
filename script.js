const searchQuery = document.getElementById("searchbar");
const searchQueryVal = searchQuery.value;
const searchButton = document.getElementById("search-btn");
const randomSearchButton = document.getElementById("random-search-btn");

function displaySearch(){
    alert("You searched: " + searchQueryVal);
}

function randomMessage() {
    const messageArr = ["Feeling Hungry", "Feeling Tired", "Feeling Bored", "Feeling Sad", "Feeling Happy"];
    const randomIndex = Math.floor(Math.random() * messageArr.length)
    randomSearchButton.value = messageArr[randomIndex];
}

function defaultMessage() {
    randomSearchButton.value = "Feeling Lucky";
}

searchButton.addEventListener("click", displaySearch());
randomSearchButton.addEventListener("mouseover", randomMessage());
randomSearchButton.addEventListener("mouseout", defaultMessage());
