import data from "./data.js";


class QuestionPallete{
    constructor(){
        this.state = {
            index : 0,
            quesArea : document.getElementById("ques"),
            nextButton : document.getElementById("next"),
            prevButton : document.getElementById("prev"),
            subButton : document.getElementById("sub"),
            questionList : data.questions,
            opts: document.getElementsByName("opts"),
            total : data.questions.length
        }

        this.state.quesArea.innerHTML = this.state.questionList[0].text;

        this.state.nextButton.addEventListener("click", ()=>{
            this.state.index = (this.state.index + 1)%this.state.total;
            this.changeQuestion();
        })
        
        this.state.prevButton.addEventListener("click", ()=>{
            this.state.index = this.state.index-1 < 0?this.state.total-1:this.state.index-1;
            this.changeQuestion();
        })

        this.state.subButton.addEventListener("click", ()=>{
            document.getElementsByName("opts").forEach((opt,index)=>{
                if(opt.checked && index == this.state.questionList[this.state.index].ans){
                    console.log("WIN")
                }else{
                    console.log("LOSE")
                }
            })
        })

    }

    changeQuestion = () => {
        this.state.quesArea.innerHTML = this.state.questionList[this.state.index].text;
        this.state.opts.forEach((opt,index)=>{
            opt.nextSibling.textContent = this.state.questionList[this.state.index].opts[index]
            
        })
    }

};

const qs = new QuestionPallete();





