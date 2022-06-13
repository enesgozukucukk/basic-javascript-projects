const quizData = [
    {
        question: "Ebru Batur hangi dizide oynamak isterdi?",
        a : "Arka Sıradakiler",
        b : "Friends",
        c : "Gilmore Girls",
        d : "İşler Güçler",
        correct : "c"
    },
    {
        question: "Ebru Batur'un lisedeyken en sevmediği ders hangisiydi?",
        a: "Biyoloji",
        b: "Matematik",
        c: "Edebiyat",
        d: "Geometri",
        correct : "d"
    },
    {
        question: "Ebru Batur'un ilk hayvanının adı nedir?",
        a: "Mö",
        b: "Hamsi",
        c: "Minnoş",
        d: "Can",
        correct : "d"
    },
    {
        question: "Ebru Batur'un hayalindeki tatil aşağıdakilerden hangisidir?",
        a: "Adana'ya gitmek",
        b: "Avrupa'da kültür gezisi",
        c: "Derdo parkta sigara içmek",
        d: "Guinea pig pikniğine gitmek",
        correct : "b"
    },
    {
        question: "Aşağıdakilerden hangisi Ebru Batur'un sevgilisinin özelliklerinden değildir?",
        a: "Komik olması",
        b: "Hatasız bir burnu olması",
        c: "İyi bir müzik zevki olması",
        d: "Çok yakışıklı olması",
        correct : "c"

    }
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit-btn");
const answerEls = document.querySelectorAll(".answer"); 
let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
}
function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    }); 

    return answer;
}
function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answerEl.checked = false;
        }
    });
}

submitBtn.addEventListener("click",() =>{
   

    const answer = getSelected();

        if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
       
        currentQuiz++;
        
        if(currentQuiz < quizData.length){
            loadQuiz(); 
        }
            else {
                quiz.innerHTML = `
                <h2>Ebru Baturu ${quizData.length} üzerinden ${score} tanıyorsunuz.</h2>
                
                <button onclick="location.reload()">Yeniden Çöz</button>`;
        }
    }

        
});