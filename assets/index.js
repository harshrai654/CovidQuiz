import data from "./data.js";


const init = function(){
    let index = 0;
    const quesArea = document.getElementById("ques");
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");
    const questionList = data.questions;
    const total = questionList.length;

    quesArea.innerHTML = questionList[index].text;

    nextButton.addEventListener("click", ()=>{
        index = (index + 1)%total;
        console.log(index)
        document.getElementById("ques").innerHTML = questionList[index].text;
    })
    
    prevButton.addEventListener("click", ()=>{
        index = index-1 < 0?total-1:index-1;
        console.log(index)
        document.getElementById("ques").innerHTML = questionList[index].text;
    })
}

init();





