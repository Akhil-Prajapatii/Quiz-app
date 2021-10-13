let questions = [
    {
    numb: 1,
    quest: "Q1:What does HTML stand for?",
    ans: "ans2",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    quest: "Q2:What does CSS stand for?",
    ans: "ans4",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    quest: "Q3:What does PHP stand for?",
    ans: "ans1",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 4,
    quest: "Q4:What does SQL stand for?",
    ans: "ans4",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    quest: "Q5:What does XML stand for?",
    ans: "ans1",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  }
];

let question = document.querySelector('.question');
// let option1 = document.querySelector('#option1');
// let option2 = document.querySelector('#option2');
// let option3 = document.querySelector('#option3');
// let option4 = document.querySelector('#option4');
let option = document.querySelectorAll('.option');
let answer = document.querySelectorAll('.answer');
let submit = document.querySelector('#submit')
let error = document.querySelector('.error')
let scoreArea = document.querySelector('#score');
let score = 0;
let index = 0;

const loadQuestion = () => {
    question.innerHTML = questions[index].quest;
    option.forEach((elem,ind) => {
        elem.innerHTML = questions[index].options[ind];
    })
  }
  
const getCheckAns = () => {
  let choosenAns;
  console.log(choosenAns);
    answer.forEach((selOptn) => {
        if(selOptn.checked){
         choosenAns = selOptn.id;
         console.log(choosenAns);
        }
      })
      return choosenAns;
}

const deselectAll = () => {
    answer.forEach((currelem) => currelem.checked = false);
}

loadQuestion();

submit.addEventListener('click',() => {
  const checkAns = getCheckAns();
  console.log(checkAns);  
  debugger;
  if(checkAns === questions[index].ans){
    score++;
  }
  index++;

  deselectAll();

  if(index < questions.length){
    loadQuestion();
  }else{
    scoreArea.innerHTML = `<h3>Your score is ${score}/${index}</h3>
    <button class="btn" onclick="location.reload()">Try Again</button>`

    scoreArea.classList.remove('scoreArea')
  }
});
