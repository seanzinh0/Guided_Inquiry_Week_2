//Initialize variables for document elements
const allWords = document.getElementById("all-words");
const exactWords = document.getElementById("exact-words");
const anyWords = document.getElementById("any-words");
const noneWords = document.getElementById("none-words");
const numStart = document.getElementById("num-start");
const numEnd  = document.getElementById("num-end");
const advSearchBtn = document.getElementById("adv--search-btn");

//Advanced search function that takes in the value of search bars and determines if empty or not. If not empty assign to a let var that adds appropriate tag per advanced search feature
function advancedSearch(){
    const allWordsVal = allWords.value;
    const exactWordsVal = exactWords.value;
    const anyWordsVal = anyWords.value;
    const noneWordsVal = noneWords.value;
    const numStartVal = numStart.value;
    const numEndVal = numEnd.value;
    let finalExactWords;
    let finalAnyWords;
    let finalNoneWords;
    let timeRange;
    if(exactWordsVal){//checks if exact words is empty or not if not add quotes around the value
        finalExactWords = `"${exactWordsVal}"`
    }else if(exactWordsVal === ""){
        finalExactWords = "";
    }if(anyWordsVal){//if any words is not empty using replace method to replace all whitespace with OR
        finalAnyWords = anyWordsVal.replace(/ /g, " OR ");
    }else if(anyWordsVal === ""){
        finalAnyWords = "";
    }if(noneWordsVal){//if none words is not empty add "-" to the beginning of value
        finalNoneWords = `-${noneWordsVal}`;
    }else if(noneWordsVal === ""){
        finalNoneWords = "";
    }if(numStartVal && numEndVal){//takes two values and adds ".." between
        timeRange = numStartVal + ".." + numEndVal;
    }else if(numStartVal === "" && numEndVal === ""){
        timeRange = "";
    }

    window.open(`https://google.com/search?q=${allWordsVal} ${finalExactWords} ${finalAnyWords} ${finalNoneWords} ${timeRange}`);//Uses window object to open a url
}

advSearchBtn.addEventListener("click", advancedSearch);//when advSearchBtn is clicked function is declared




