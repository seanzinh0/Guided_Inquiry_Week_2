//Initialize variables for document elements
const searchBar = document.getElementById("searchbar");
const searchButton = document.getElementById("google-search-btn");
const randomSearchButton = document.getElementById("random-search-btn");

//Function that preventsDefault value from being submitted, if not using window object to concatenate search value to the google search url and open a new window
function displaySearch(event){
    event.preventDefault();//preventDefault value
    const searchBarVal = searchBar.value;
    if(searchBarVal === ""){//checks if value is empty
        return;
    }
    window.open("https://google.com/search?q=" + searchBarVal);
}

//Function that displays a new message on the "Feeling Lucky" button takes isMouseOver as a parameter to check for true or false
function randomMessage(isMouseOver) {
    if(isMouseOver){ //checks if isMouseOver is true
        const messageArr = ["Feeling Hungry", "Feeling Tired", "Feeling Bored", "Feeling Sad", "Feeling Happy"]; //Array to store messages
        const randomIndex = Math.floor(Math.random() * messageArr.length) //create a random index using math random multiplied by the length of the array
        randomSearchButton.value = messageArr[randomIndex]; //assigns a random message to the value of the "Feeling Lucky" button
    }else{
        randomSearchButton.value = "Feeling Lucky"; //Display default value
    }
}

searchButton.addEventListener("click", displaySearch);//when search button is clicked call displaySearch
randomSearchButton.addEventListener("click", displaySearch);//when random search button is clicked call displaySearch
randomSearchButton.addEventListener("mouseover", function(){//when mouse is over the button declare a function that calls the randomMessage function and set the parameter to true
    randomMessage(true);
});
randomSearchButton.addEventListener("mouseout", function(){//when mouse is not over the button declare a function that calls the randomMessage function and set the parameter to false
    randomMessage(false);
});

/* possible drop down for search bar
searchBar.addEventListener("click", function(){
    searchBar.style.height = "400px";
});
searchBar.addEventListener("mouseout", function(){
    searchBar.style.height = "50px";
});
*/

//Search URL For Images: https://www.google.com/search?q=butter&udm=2