const options = [
  {
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
  {
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
  {
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
  {
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
];

let index = 0;
let correct = 0,
  incorrect = 0,
  total = options.length;

let questions = document.querySelector("#questionBox");
let inputbox = document.querySelectorAll("input[type=ratio]");

const questionLoad = () => {
  if (index == total) {
    return results();
  }
};
reset();

document.querySelector("submit").addEventListener("click", function ()  {

    const data = options[index];
    const ans = answers();

    if(ans === data.correct){
        correct++;
    }

    else 
    {
        incorrect++;
    }
    index++;
    quLoad();
});



const answer = () => {
  let ans;
  allInputs.forEach((e) => {
    if(e.checked){
        ans = e.ariaValueMax;
    }
    
  });
  return ans;
};

const quLoad = () => {
 
    if(total === index)
    {
        return results();
    }
    reset();

    const data = quizData[index];
    questionBox.innerHTML = `${index + 1}) ${data.question}`;
    
    allInputs[0].nextElementSibling.innerText = data.a;
    allInputs[1].nextElementSibling.innerText = data.b;
    allInputs[2].nextElementSibling.innerText = data.c;
    allInputs[3].nextElementSibling.innerText = data.d;
}

const reset = () => {
  allInputs.for((e) => {
    e.checked = false;
  });
};

const results = () => {
  document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
       <h3 id="questionBox">

       </h3>
    </div>
    `;
};

quLoad();