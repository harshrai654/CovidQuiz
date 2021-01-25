import data from "./data.js";

class QuestionPallete {
  constructor() {
    this.state = {
      index: 0,
      quesArea: document.getElementById("ques"),
      nextButton: document.getElementById("next"),
      prevButton: document.getElementById("prev"),
      subButton: document.getElementById("sub"),
      gifArea: document.getElementById("gif"),
      finalSub: document.getElementById("finalSub"),
      questionList: data.questions,
      opts: document.getElementsByName("opts"),
      total: data.questions.length,
      status: new Array(data.questions.length)
        .fill(null)
        .map(() => ({ attempted: false, correct: false })),
      score: 0,
    };

    this.state.quesArea.innerHTML = this.state.questionList[0].text;
    this.state.gifArea.src = this.state.questionList[0].gif;

    this.state.opts.forEach((opt, index) => {
      opt.nextSibling.textContent = this.state.questionList[0].opts[index];
    });

    this.state.nextButton.addEventListener("click", () => {
      this.state.index = (this.state.index + 1) % this.state.total;
      this.changeQuestion();
    });

    this.state.prevButton.addEventListener("click", () => {
      this.state.index =
        this.state.index - 1 < 0 ? this.state.total - 1 : this.state.index - 1;
      this.changeQuestion();
    });

    this.state.subButton.addEventListener("click", () => {
      let winStatus = false;
      let statusArea = document.getElementById("status");

      document.getElementsByName("opts").forEach((opt, index) => {
        if (
          opt.checked &&
          index == this.state.questionList[this.state.index].ans
        ) {
          console.log("WIN");
          this.state.score++;
          winStatus = true;
          document.getElementById("score").innerText = this.state.score;
        }
      });
      //Disabling submit after click
      this.state.status[this.state.index].attempted = true;
      this.state.subButton.disabled = true;

      if (winStatus) {
        this.state.status[this.state.index].correct = true;
        statusArea.innerText = "Correct!";
      } else {
        statusArea.innerText = "Wrong!!!";
      }
    });

    this.state.finalSub.addEventListener("click", () => {
      let correct = 0;
      this.state.status.forEach((st) => st.correct && correct++);
      console.log(this.state.score, correct);
    });
  }

  changeQuestion = () => {
    this.state.quesArea.innerHTML = this.state.questionList[
      this.state.index
    ].text;
    this.state.gifArea.src = this.state.questionList[this.state.index].gif;

    let statusArea = document.getElementById("status");
    let status = this.state.status[this.state.index];
    this.state.subButton.disabled = status.attempted;

    if (!status.attempted) document.getElementById("status").innerText = "";
    else {
      if (status.correct) {
        statusArea.innerText = "Correct!";
      } else {
        statusArea.innerText = "Wrong!!!";
      }
    }

    this.state.opts.forEach((opt, index) => {
      opt.nextSibling.textContent = this.state.questionList[
        this.state.index
      ].opts[index];
    });
  };
}

const qs = new QuestionPallete();
