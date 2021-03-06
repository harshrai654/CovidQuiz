import data from "./data.js";

class QuestionPallete {
  constructor() {
    this.state = {
      index: 0,
      quesArea: document.getElementById("ques"),
      nextButton: document.getElementById("next"),
      prevButton: document.getElementById("prev"),
      subButton: document.getElementById("sub"),
      factArea: document.getElementById("fact"),
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
        opt.disabled = true;
        if (opt.checked) {
          if (index == this.state.questionList[this.state.index].ans) {
            console.log("WIN");
            opt.parentElement.parentElement.style.backgroundColor =
              "rgb(100,221,23)";
            this.state.score++;
            winStatus = true;
            document.getElementById("score").innerText = this.state.score;
          } else {
            opt.parentElement.parentElement.style.backgroundColor =
              "rgb(229, 57, 53)";
          }
          console.log(opt);
        }

        this.state.factArea.innerText = this.state.questionList[
          this.state.index
        ].fact;
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

    if (!status.attempted) {
      document.getElementById("status").innerText = "";
      this.state.factArea.innerText = "";
    } else {
      if (status.correct) {
        statusArea.innerText = "Correct!";
      } else {
        statusArea.innerText = "Wrong!!!";
      }

      this.state.factArea.innerText = this.state.questionList[
        this.state.index
      ].fact;
    }

    this.state.opts.forEach((opt, index) => {
      let question = this.state.questionList[this.state.index];
      opt.nextSibling.textContent = question.opts[index];
      let status = this.state.status[this.state.index];

      if (status.attempted) {
        opt.disabled = true;
        if (status.correct && index == question.ans) {
          opt.parentElement.parentElement.style.backgroundColor =
            "rgb(100,221,23)";
        } else {
          if (index == question.ans) {
            opt.parentElement.parentElement.style.backgroundColor =
              "rgb(100,221,23)";
          } else {
            opt.parentElement.parentElement.style.backgroundColor =
              "rgb(229, 57, 53)";
          }
        }
      } else {
        opt.parentElement.parentElement.style.backgroundColor = "#ef233c";
        opt.disabled = false;
      }
    });
  };
}

const qs = new QuestionPallete();
