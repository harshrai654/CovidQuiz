import data from "./data.js";

class QuestionPallete {
  constructor() {
    //Initial state of Question-pallete
    this.state = {
      index: 0,

      //UI elements
      quesArea: document.getElementById("ques"),
      nextButton: document.getElementById("next"),
      prevButton: document.getElementById("prev"),
      subButton: document.getElementById("sub"),
      factArea: document.getElementById("fact"),
      gifArea: document.getElementById("gif"),
      questionList: data.questions,
      opts: document.getElementsByName("opts"),

      total: data.questions.length, //Total questions
      status: new Array(data.questions.length) //Status of all questions
        .fill(null)
        .map(() => ({ attempted: false, correct: false })),
      score: 0,
      totalTime: 120000, //Total time of quiz [Default:2 minutes]
      currentTime: 0,
    };

    this.shuffle(this.state.questionList); //Randomization of questions

    //Initial UI
    this.state.quesArea.innerHTML = this.state.questionList[0].text;
    this.state.gifArea.src = this.state.questionList[0].gif;
    document.getElementById("score").innerText = this.state.score;
    this.state.opts.forEach((opt, index) => {
      opt.nextSibling.textContent = this.state.questionList[0].opts[index];
    });

    //Various event listener

    this.state.nextButton.addEventListener("click", () => {
      //Cycling through questions
      this.state.index = (this.state.index + 1) % this.state.total;

      //method to handle change of questions
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

        //Checking for correct option
        if (opt.checked) {
          if (index == this.state.questionList[this.state.index].ans) {
            //Changing selected option's background [Green for correct]
            opt.parentElement.parentElement.style.backgroundColor =
              "rgb(100,221,23)";

            //Updating score
            this.state.score++;

            winStatus = true;

            //Updating score UI element
            document.getElementById("score").innerText = this.state.score;
          } else {
            //Changing selected option's background [Red for Incorrect]
            opt.parentElement.parentElement.style.backgroundColor =
              "rgb(229, 57, 53)";
          }
        }

        //Updating facts area after attempting question
        this.state.factArea.innerText = this.state.questionList[
          this.state.index
        ].fact;
      });

      //Saving question's attempt status for UI state after question revisit
      this.state.status[this.state.index].attempted = true;

      //Disabling submit after click
      this.state.subButton.disabled = true;

      //Updating UI
      if (winStatus) {
        //Saving question's correctness status for UI state after question revisit
        this.state.status[this.state.index].correct = true;
        statusArea.innerText = "Correct!";
      } else {
        statusArea.innerText = "Wrong!!!";
      }
    });
  }

  //Function to create Random order of questions
  shuffle = function (questions) {
    //
    for (let i = questions.length - 1; i > 0; i--) {
      //Generating random index(j) in range [0,i]
      let j = Math.floor(Math.random() * (i + 1));

      //Using array destructuring to swap ith and jth array values
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  };

  changeQuestion = () => {
    //Updating UI with nextQuestion
    this.state.quesArea.innerHTML = this.state.questionList[
      this.state.index
    ].text;
    this.state.gifArea.src = this.state.questionList[this.state.index].gif;

    let statusArea = document.getElementById("status");
    let status = this.state.status[this.state.index];

    //Disabling Submit button if question is attempted earlier
    this.state.subButton.disabled = status.attempted;

    if (!status.attempted) {
      //Empty status and fact areas in case of an unattempted question
      document.getElementById("status").innerText = "";
      this.state.factArea.innerText = "";
    } else {
      //Updating Status,Fact area for attempted question
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
        //Disabling options for attempted question
        opt.disabled = true;

        //UI update for attempted question with correct-incorrect behaviour
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

//Function to handle end of quiz
const onSubmit = () => {
  let correct = 0;

  //Counting number of correct questions from status array
  qs.state.status.forEach((st) => st.correct && correct++);

  //fetchng high-score and high score username
  let highScore = localStorage.getItem("highScore");
  let highScName = localStorage.getItem("highScName");

  if (!highScore) {
    //In case of no previous highscore
    localStorage.setItem("highScore", qs.state.score);
  } else {
    //updating high score if needed
    if (highScore < qs.state.score) {
      let uname = localStorage.getItem("uname");
      localStorage.setItem("highScore", qs.state.score);
      localStorage.setItem("highScName", uname);
    }
  }

  //Alerting user of result with highScorer
  alert(
    `Correct: ${correct}\nIncorrect: ${qs.state.total - correct}\nScore: ${
      qs.state.score
    }${
      highScore < qs.state.score
        ? " (High-Score)"
        : `\nHighScorer: ${highScName}\nHigh-Score: ${highScore}`
    }`
  );
  window.location.reload();
};

let qs = new QuestionPallete();

//Adding listener for end-quiz
document.getElementById("finalSub").addEventListener("click", onSubmit);

//Handling user form to be displayed before quiz
(function () {
  //Hiding Question pallete
  document.getElementById("questions").style.display = "none";

  document.getElementById("userForm").addEventListener("submit", (e) => {
    e.preventDefault();

    //storing user-name in localStorage
    let uname = document.getElementById("un").value;
    localStorage.setItem("uname", uname);

    document.getElementById("name").innerText = uname;

    //Hiding  user-form
    document.getElementById("userName").style.display = "none";
    document.getElementById("questions").style.display = "flex";

    //Starting timer
    setTimeout(onSubmit, qs.state.totalTime);
    let timer = document.getElementById("time");

    //Updating timer-ui
    setInterval(() => {
      qs.state.currentTime++;
      let total = qs.state.totalTime / 1000;

      timer.innerText = total - qs.state.currentTime;
    }, 1000);
  });
})();
