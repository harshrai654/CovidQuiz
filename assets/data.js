const data = {
  questions: [
    {
      text: "How is COVID-19 passed on?",
      opts: [
        "Through droplets that come from your mouth and nose when you cough or breathe out",
        "Through intercourse",
        "By drinking unclean water",
        "All of the above",
      ],
      gif: "https://media.giphy.com/media/f9vtArcZ6uqc1FhucD/giphy.gif",
      fact:
        "When a person with COVID-19 coughs, breathes out or sneezes, droplets come out from their nose and mouth which can contain the virus. These can be breathed in by people who are nearby or land on surfaces which other people can then touch. Regularly washing your hands and keeping your distance from others is the best way to prevent COVID-19. ",
      ans: 0,
    },
    {
      text: "What are the common symptoms of COVID-19?",
      opts: [
        "A new and continuous cough",
        "Fever",
        "Tiredness",
        "All of the above",
      ],
      gif: "https://media.giphy.com/media/U6pedZ9GkONjU2xCHl/giphy.gif",
      fact:
        "COVID-19 is usually marked by a new and continuous cough, but some people get other symptoms too including tiredness, a fever and flu-like symptoms including headaches, runny nose and a sore throat. If you’re finding it hard to breathe or your symptoms don’t improve after 7 days, call your local health service straight away. ",
      ans: 3,
    },
    {
      text: "Can you always tell if someone has COVID-19? ",
      opts: [
        "No – not everyone with COVID-19 has symptoms",
        "Yes – it will be obvious, a person with COVID-19 coughs a lot",
        "Yes – you can tell just by where a person comes from, their race and ethnicity",
        "None of the above",
      ],
      gif: "https://media.giphy.com/media/rkXNems5uxExG/giphy.gif",
      fact:
        "The virus can be in someone’s body for up to 14 days before they get symptoms, and some people will have such a mild case of COVID-19 that they might not notice anything is wrong. That’s why it’s important that everyone follows their government’s advice even if they feel healthy.",
      ans: 0,
    },
    {
      text: "Can washing your hands protect you from COVID-19? ",
      opts: [
        "Yes – but only if you use a strong bleach",
        "Yes – normal soap and water or hand sanitizer is enough",
        "No – Washing your hands doesn’t stop COVID-19",
        "No – Sanitizer is more effective",
      ],
      gif: "https://media.giphy.com/media/kaa12hX0AGM0ta7jqs/giphy.gif",
      fact:
        "Washing your hands regularly is one of the best way to avoid getting or passing on COVID-19. It’s important to keep washing your hands throughout the day especially before and after going out. To wash your hands properly you need to get every spot. Make sure you wash them for at least 40 seconds if you are using soap and water, and for at least 20 seconds if you’re using hand sanitizer",
      ans: 2,
    },
    {
      text: "When should fabric face masks be worn?",
      opts: [
        "On public transport",
        "In confined or crowded spaces",
        "In small shops",
        "All of the above",
      ],
      gif: "https://media.giphy.com/media/3ohs87Vwnip4EHaQuc/giphy.gif",
      fact:
        "The World Health Organisation now recommends using face masks when you are not able to stay at least 1 meter away from others. This includes when you’re on public transport, inside shops, or any other time when you’re in a confined or crowded space.This is because we now have evidence that some people who get COVID-19 don’t get any symptoms but can still pass the virus on. Wearing fabric masks prevent these asymptomatic and seemingly healthy people from passing on the virus in public spaces. If you do have symptoms for COVID-19, you still need to stay home and self-isolate - wearing a mask is not enough.",
      ans: 3,
    },
    {
      text: "Can COVID-19 be cured? ",
      opts: [
        "Yes – Hot drinks can cure COVID-19",
        "No – COVID-19 is a death sentence",
        "Most people get better by themselves",
        "May be",
      ],
      gif: "https://media.giphy.com/media/xULW8DfxK8Aw0hf1CM/giphy.gif",
      fact:
        "Most people who get COVID-19 will recover by themselves, normally within 14 days. Some people who get more seriously ill with COVID-19 may need hospital care to help them breathe. For a small percentage of people COVID-19 can be fatal. If your symptoms don’t get better after 7 days, you are finding it hard to cope, or if at any point you have difficulty breathing you should call your local health service straight away.",
      ans: 3,
    },
    {
      text: "Which of the following is an example of physical distancing?",
      opts: [
        "You stop going to crowded places and visiting other people’s houses",
        "You stop talking to the people you live with",
        "You stop speaking to your friends on the phone",
        "Living sad life",
      ],
      gif: "https://media.giphy.com/media/RkzPS0Bs74BpeWssCs/giphy.gif",
      fact:
        "To slow down the spread of COVID-19 people are being asked to reduce the amount of time that they spend with other people and the number of people they meet in a day. The exact advice on how to do this will vary depending on where in the world you live. In some places, people have been asked to stop shaking hands and avoid large gatherings. Other places are telling people to stay at home completely and only leave the house to exercise, shop for essentials and go to work (if you can’t work at home).You can still keep in contact with friends and family over the phone or by other means. This is a way to maintain good wellbeing and mental health.",
      ans: 0,
    },
    {
      text: "How can people living with HIV protect themselves from COVID-19?",
      opts: [
        "Wash their hands regularly and follow the physical distancing advice",
        "Keep taking their antiretroviral treatment",
        "Exercise regularly, eat well and look after their mental health",
        "All of the above",
      ],
      gif: "https://media.giphy.com/media/CIFqOxEL76BPO/giphy.gif",
      fact:
        "People living with HIV should follow the general advice for example washing their hands regularly. It’s also important to keep taking antiretroviral treatment as prescribed. Exercising, eating healthily and getting good sleep are ways to boost your immune system so that you stay healthy.COVID-19 can also make lots of people feel anxious, so it’s important to look after your mental health too. Keep in touch with your friends and family online or over the phone, do things that you enjoy and talk how you are feeling. We all need to support each other during this time. ",
      ans: 3,
    },
  ],
  staticHTML: {
    //Get HTML content for a element
    getUI: function (index) {
      return index
        ? `<div class="flex-inner-container">
        <div
          style="
            margin-left: auto;
            background-color: #8d99ae;
            color: white;
            flex-grow: 3;
          "
        >
          <label for="score">Score</label>
          <span id="score">::</span>
        </div>

        <div
          style="
            margin-left: auto;
            background-color: #8d99ae;
            color: white;
            flex-grow: 2;
          "
        >
          <label for="name">Name:</label>
          <span id="name"></span>
        </div>

        <div
          style="
            margin-left: auto;
            background-color: #8d99ae;
            color: white;
            flex-grow: 0.5;
          "
        >
          <label for="time">Time: </label>
          <span id="time"></span>
        </div>
      </div>

      <span id="ques"> Question </span>
      <br />
      <br />

      <img
        width="20%"
        id="gif"
        src="https://media.giphy.com/media/f9vtArcZ6uqc1FhucD/giphy.gif"
        alt="img1"
      />
      <br />
      <div id="options">
        <div class="flex-inner-container">
          <span class="opt"
            ><label><input type="radio" value="A" name="opts" />A</label></span
          >
          <span class="opt"
            ><label><input type="radio" value="B" name="opts" />B</label></span
          >
        </div>
        <div class="flex-inner-container">
          <span class="opt"
            ><label><input type="radio" value="C" name="opts" />C</label></span
          >
          <span class="opt"
            ><label><input type="radio" value="D" name="opts" />D</label></span
          >
        </div>
      </div>

      <br />

      <span id="status"></span>

      <br />

      <div>
        <button class="controls" id="next">Next</button>
        <button class="controls" id="prev">Previous</button>
        <button class="controls" id="sub">Submit</button>
      </div>

      <br />

      <div id="fact"></div>
      <button class="controls" id="finalSub">END QUIZ</button>`
        : `
      
      <form id="userForm">
        <input
          type="text"
          name="uname"
          id="un"
          style="font-size: larger"
          required
        />
        <input type="submit" style="margin-top: 2%; font-size: larger" />
      </form>
    
    `;
    },
  },
};

export default data;
