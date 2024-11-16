const o1 = document.getElementById("option1");
const o2 = document.getElementById("option2");
const o3 = document.getElementById("option3");
const o4 = document.getElementById("option4");
const b = document.getElementById("next");
const p = document.getElementById("playground");
let correct = 0;
let wrong = 0;
let a = 0;

function attachListeners() {
    const o1 = document.getElementById("option1");
    const o2 = document.getElementById("option2");
    const o3 = document.getElementById("option3");
    const o4 = document.getElementById("option4");
    document.getElementById("option1").addEventListener("click", result1);
    document.getElementById("option2").addEventListener("click", result2);
    document.getElementById("option3").addEventListener("click", result3);
    document.getElementById("option4").addEventListener("click", result4);
}


function result1() {
    if (a == 2 || a == 4) {
        correct++;
        document.getElementById("option1").classList.add("correct");
        console.log(correct);

    }else {
        wrong++;
        document.getElementById("option1").classList.add("wrong");

    }
}
function result2() {
    if (a == 3 ) {
        correct++;
        document.getElementById("option2").classList.add("correct");
        console.log(correct);

    }else {
        wrong++;
        document.getElementById("option2").classList.add("wrong");

    }
}
function result3() {
    if (a == 1 || a == 5) {
        correct++;
        document.getElementById("option3").classList.add("correct");
        console.log(correct);

    }else {
        wrong++;
        document.getElementById("option3").classList.add("wrong");

    }
}
function result4() {
    if (a == 0) {
        correct++;
        document.getElementById("option1").classList.add("correct");
        console.log(correct);

    }else {
        wrong++;
        document.getElementById("option4").classList.add("wrong");

    }
}

function next() {
    a++;
    console.log(a);
    switch (a) {
        case 1:
            p.innerHTML = `
                <div id="question">
                    Q1: What is the capital of Australia?
                </div>
                <div id="options">
                    <div id="option1" class="option">Sydney</div>
                    <div id="option2" class="option">Melbourne</div>
                    <div id="option3" class="option">Canberra</div>
                    <div id="option4" class="option">Perth</div>
                </div>
                <button id="next">Next</button>
            `;
            break;
        case 2:
            p.innerHTML = `
                <div id="question">
                    Q2: What is the chemical symbol for gold?
                </div>
                <div id="options">
                    <div id="option1" class="option">Au</div>
                    <div id="option2" class="option">Ag</div>
                    <div id="option3" class="option">Go</div>
                    <div id="option4" class="option">Gd</div>
                </div>
                <button id="next">Next</button>
            `;
            break;
        case 3:
            p.innerHTML = `
                <div id="question">
                    Q3: Who was the first President of the United States?
                </div>
                <div id="options">
                    <div id="option1" class="option">Abraham Lincoln</div>
                    <div id="option2" class="option">George Washington</div>
                    <div id="option3" class="option">Thomas Jefferson</div>
                    <div id="option4" class="option">John Adams</div>
                </div>
                <button id="next">Next</button>
            `;
            break;
        case 4:
            p.innerHTML = `
                <div id="question">
                    Q4: Which movie won the Oscar for Best Picture in 2020?
                </div>
                <div id="options">
                    <div id="option1" class="option">Parasite</div>
                    <div id="option2" class="option">Joker</div>
                    <div id="option3" class="option">1917</div>
                    <div id="option4" class="option">Once Upon a Time in Hollywood</div>
                </div>
                <button id="next">Next</button>
            `;
            break;
        case 5:
            p.innerHTML = `
                <div id="question">
                    Q5: Who is the founder of SpaceX?
                </div>
                <div id="options">
                    <div id="option1" class="option">Jeff Bezos</div>
                    <div id="option2" class="option">Richard Branson</div>
                    <div id="option3" class="option">Elon Musk</div>
                    <div id="option4" class="option">Bill Gates</div>
                </div>
                <button id="next">Next</button>
            `;
            break;
        default:
            p.innerHTML = `<div id="question">Quiz Completed!</div>`;
            break;
    }
    const b = document.getElementById("next");
    b.addEventListener("click", next, false);
    attachListeners();
}
b.addEventListener("click", next, false);

o1.addEventListener("click", result1, false);
o2.addEventListener("click", result2, false);
o3.addEventListener("click", result3, false);
o4.addEventListener("click", result4, false);

