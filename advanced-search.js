const allWords = document.getElementById("all-words");
const exactWords = document.getElementById("exact-words");
const anyWords = document.getElementById("any-words");
const noneWords = document.getElementById("none-words");
const numStart = document.getElementById("num-start");
const numEnd  = document.getElementById("num-end");
const advSearchBtn = document.getElementById("adv--search-btn");

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
    if(exactWordsVal){
        finalExactWords = `"${exactWordsVal}"`
    }else if(exactWordsVal === ""){
        finalExactWords = "";
    }if(anyWordsVal){
        finalAnyWords = anyWordsVal.replace(/ /g, " OR ");
    }else if(anyWordsVal === ""){
        finalAnyWords = "";
    }if(noneWordsVal){
        finalNoneWords = `-${noneWordsVal}`;
    }else if(noneWordsVal === ""){
        finalNoneWords = "";
    }if(numStartVal && numEndVal){
        timeRange = numStartVal + ".." + numEndVal;
    }else if(numStartVal === "" && numEndVal === ""){
        timeRange = "";
    }

    window.open(`https://google.com/search?q=${allWordsVal} ${finalExactWords} ${finalAnyWords} ${finalNoneWords} ${timeRange}`);
}

advSearchBtn.addEventListener("click", advancedSearch);




