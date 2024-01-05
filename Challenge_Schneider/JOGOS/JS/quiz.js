const questions = [
    {
        question: "Qual porcentagem da água do planeta é doce e potencialmente adequada para consumo humano, tornando crucial evitar o seu desperdício?",
        answers: [
            { text: "75%", correct: false },
            { text: "50%", correct: false },
            { text: "25%", correct: false },
            { text: "10%", correct: false },
            { text: "2.5%", correct: true },
        ]
    },
    {
        question: "De acordo com a Organização das Nações Unidas, qual é a quantidade média recomendada de água que uma pessoa deve utilizar por dia para atender às suas necessidades básicas, destacando a importância de não exceder essa quantidade?",
        answers: [
            { text: "5 litros", correct: false },
            { text: "30 litros", correct: false },
            { text: "100 litros", correct: true },
            { text: "250 litros", correct: false },
            { text: "500 litros", correct: false },
        ]
    },
    {
        question: "Quais são algumas práticas simples que podem ser adotadas em jardins e paisagens para reduzir o desperdício de água, como o uso de plantas nativas e sistemas de irrigação eficientes?",
        answers: [
            { text: "Uso exclusivo de grama em gramados.", correct: false },
            { text: "Irrigação diária durante as horas mais quentes.", correct: false },
            { text: "Plantio de espécies exóticas e não adaptadas ao clima local.", correct: false },
            { text: "Uso de aspersores em vez de gotejadores.", correct: false },
            { text: "Cobertura do solo com mulching para reter a umidade.", correct: true },
        ]
    },
    {
        question: "Qual é a principal causa do desperdício de água em residências, contribuindo para vazamentos e contas de água elevadas?",
        answers: [
            { text: " Uso consciente e controlado de torneiras.", correct: false },
            { text: "Reparação imediata de vazamentos visíveis.", correct: false },
            { text: "Manutenção regular de encanamentos.", correct: false },
            { text: "Uso de descargas de alto volume em vasos sanitários.", correct: true },
            { text: "Armazenamento inadequado de água.", correct: false },
        ]
    },
    {
        question: "Em nível global, quais setores humanos são os maiores responsáveis pelo consumo excessivo de água, incluindo atividades como agricultura, indústria e uso doméstico, ressaltando a necessidade de abordar essas áreas para combater o desperdício?",
        answers: [
            { text: "Setor cultural e de entretenimento.", correct: false },
            { text: "Setor de transportes públicos.", correct: false },
            { text: "Setor de tecnologia da informação.", correct: false },
            { text: "Setor de energia renovável.", correct: false },
            { text: "Setor agrícola e industrial.", correct: true },
        ]
    },
    {
        question: "Qual é a principal fonte de energia consumida globalmente, que contribui significativamente para as emissões de gases de efeito estufa?",
        answers: [
            { text: "Energia solar.", correct: false },
            { text: "Energia eólica.", correct: false },
            { text: "Carvão mineral.", correct: true },
            { text: "Hidrogênio", correct: false },
            { text: "Biomassa", correct: false },
        ]
    },
    {
        question: "Quanto do consumo de energia em residências é geralmente atribuído a aparelhos eletrônicos em modo de espera?",
        answers: [
            { text: "Cerca de 5%.", correct: true },
            { text: "Nenhum, pois aparelhos em modo de espera não consomem energia", correct: false },
            { text: "Aproximadamente 15%.", correct: false },
            { text: "Mais de 50%.", correct: false },
            { text: "Menos de 1%.", correct: false },
        ]
    },
    {
        question: "Quais são três medidas simples que podem reduzir o desperdício de energia em casa?",
        answers: [
            { text: "Deixar todas as luzes acesas durante o dia.", correct: false },
            { text: "Usar a secadora de roupas sempre que possível.", correct: false },
            { text: "Desligar aparelhos eletrônicos da tomada quando não estão em uso.", correct: true },
            { text: "Manter portas e janelas abertas em dias frios.", correct: false },
            { text: "Utilizar lâmpadas incandescentes em vez de LED.", correct: false },
        ]
    },
    {
        question: "Que porcentagem de energia é perdida durante a geração, transmissão e distribuição da eletricidade até chegar aos lares?",
        answers: [
            { text: "Cerca de 10%.", correct: false },
            { text: "Não há perda de energia nesse processo.", correct: false },
            { text: "Aproximadamente 25%", correct: true },
            { text: "Mais de 50%.", correct: false },
            { text: "Menos de 1%.", correct: false },
        ]
    },
    {
        question: "Quais são os benefícios econômicos e ambientais da adoção de fontes de energia renovável em comparação com as fontes de energia não renovável?",
        answers: [
            { text: "Energias renováveis não têm benefícios em termos econômicos.", correct: false },
            { text: "Energias não renováveis são mais sustentáveis a longo prazo.", correct: false },
            { text: "Energias renováveis são mais caras e menos disponíveis.", correct: false },
            { text: "Energias renováveis ajudam a reduzir a dependência de combustíveis fósseis e mitigam as mudanças climáticas.", correct: true },
            { text: "Fontes não renováveis não contribuem para a redução das emissões de gases de efeito estufa.", correct: false },
        ]
    },
    // ... (outras perguntas e respostas)
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start-btn");
const startDiv = document.querySelector(".start");
const quizDiv = document.querySelector(".quiz");


let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener("click", () => {
    startQuiz();
    startDiv.style.display = "none";
    quizDiv.style.display = "block";
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++; // Incrementa a pontuação corretamente
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    nextButton.innerText = "Next";
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("incorrect");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("incorrect");
}

function showScore() {
    resetState();
    questionElement.innerText = `Você pontuou ${score} de ${questions.length}!`;
    nextButton.innerText = "Jogar Novamente";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();