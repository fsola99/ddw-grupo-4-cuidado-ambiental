let allQuestions = [
    {
        "question": "¿Cuál de las siguientes acciones ayuda más a reducir la contaminación del aire?",
        "image": "../img/federicoQuestion1.jpg",
        "options": ["Usar transporte público", "Reciclar plástico", "Comer menos carne", "Usar bolsas de papel"],
        "answer": "Usar transporte público",
        "info": "Usar transporte público reduce el número de vehículos en la carretera, disminuyendo las emisiones de gases contaminantes."
    },
    {
        "question": "¿Cuál es la mejor manera de conservar el agua en casa?",
        "image": "../img/federicoQuestion2.jpg",
        "options": ["Regar las plantas todos los días", "Tomar duchas cortas", "Lavar el coche cada semana", "Llenar la bañera cada día"],
        "answer": "Tomar duchas cortas",
        "info": "Tomar duchas cortas ayuda a reducir el consumo de agua, un recurso limitado y vital."
    },
    {
        "question": "¿Cuál de las siguientes prácticas ayuda a reducir la huella de carbono?",
        "image": "../img/federicoQuestion3.jpg",
        "options": ["Apagar las luces al salir de una habitación", "Dejar los aparatos electrónicos en modo stand-by", "Usar platos desechables", "Lavar el coche con manguera todos los días"],
        "answer": "Apagar las luces al salir de una habitación",
        "info": "Apagar las luces al salir de una habitación reduce el consumo de electricidad, disminuyendo la huella de carbono."
    },
    {
        "question": "¿Qué es el reciclaje?",
        "image": "../img/federicoQuestion4.jpg",
        "options": ["El proceso de deshacerse de residuos sin clasificar", "El proceso de convertir materiales usados en nuevos productos", "La quema de residuos para generar energía", "El uso de productos desechables"],
        "answer": "El proceso de convertir materiales usados en nuevos productos",
        "info": "El reciclaje permite reutilizar materiales, reduciendo la necesidad de extraer nuevos recursos y disminuyendo los residuos."
    },
    {
        "question": "¿Cuál es la mejor opción para reducir el uso de plástico?",
        "image": "../img/federicoQuestion5.jpg",
        "options": ["Usar bolsas de plástico para las compras", "Comprar productos en envases de plástico", "Utilizar bolsas reutilizables", "Comprar botellas de agua desechables"],
        "answer": "Utilizar bolsas reutilizables",
        "info": "Usar bolsas reutilizables reduce la cantidad de plástico que termina en los vertederos y en el medio ambiente."
    },
    {
        "question": "¿Qué tipo de energía es considerada renovable?",
        "image": "../img/federicoQuestion6.jpg",
        "options": ["Energía nuclear", "Energía eólica", "Energía fósil", "Energía de biomasa"],
        "answer": "Energía eólica",
        "info": "La energía eólica es renovable porque se obtiene del viento, una fuente inagotable y no contaminante."
    },
    {
        "question": "¿Qué porcentaje de la superficie terrestre está cubierto por bosques?",
        "image": "../img/federicoQuestion7.jpg",
        "options": ["10%", "30%", "50%", "70%"],
        "answer": "30%",
        "info": "Aproximadamente el 30% de la superficie terrestre está cubierta por bosques, los cuales son vitales para la biodiversidad y la absorción de dióxido de carbono."
    },
    {
        "question": "¿Cuál es una forma efectiva de conservar energía en el hogar?",
        "image": "../img/federicoQuestion8.jpg",
        "options": ["Dejar las luces encendidas", "Usar bombillas LED", "Mantener el aire acondicionado encendido todo el día", "Abrir la nevera frecuentemente"],
        "answer": "Usar bombillas LED",
        "info": "Usar bombillas LED ayuda a conservar energía porque son más eficientes y duran más que las bombillas tradicionales."
    },
    {
        "question": "¿Cuál de los siguientes materiales tarda más en descomponerse en el medio ambiente?",
        "image": "../img/federicoQuestion9.jpg",
        "options": ["Papel", "Vidrio", "Plástico", "Aluminio"],
        "answer": "Vidrio",
        "info": "El vidrio tarda más en descomponerse en el medio ambiente, pudiendo durar miles de años si no se recicla."
    },
    {
        "question": "¿Cuál es la principal causa de la deforestación?",
        "image": "../img/federicoQuestion10.jpg",
        "options": ["Plantación de árboles", "Construcción de parques", "Agricultura y ganadería", "Caza de animales"],
        "answer": "Agricultura y ganadería",
        "info": "La agricultura y la ganadería son las principales causas de la deforestación, ya que requieren grandes extensiones de tierra."
    },
    {
        "question": "¿Qué animal está en peligro de extinción debido a la pérdida de su hábitat?",
        "image": "../img/federicoQuestion11.jpg",
        "options": ["Gato doméstico", "Oso polar", "Perro labrador", "Paloma"],
        "answer": "Oso polar",
        "info": "El oso polar está en peligro de extinción debido a la pérdida de su hábitat causada por el cambio climático."
    },
    {
        "question": "¿Qué tipo de producto es más amigable con el medio ambiente?",
        "image": "../img/federicoQuestion12.jpg",
        "options": ["Producto de un solo uso", "Producto reciclable", "Producto importado", "Producto empaquetado en plástico"],
        "answer": "Producto reciclable",
        "info": "Los productos reciclables son más amigables con el medio ambiente porque pueden reutilizarse y reducir la cantidad de residuos."
    }
];
let selectedQuestions = [];
let initialSelectedQuestions = [];
let currentQuestion = 0;
let currentQuestionIndex = 0;
let score = 0;
let incorrectAnswers = [];
let userAnswers = [];
let difficultyMode = "";

$(document).ready(function() {
    $('#easy-mode-button').on('click', function() {
        difficultyMode = "easy";
        startQuiz();
    });

    $('#hard-mode-button').on('click', function() {
        difficultyMode = "hard";
        startQuiz();
    });

    $('#retry-button').on('click', function() {
        retryQuiz();
    });

    $('#prev-button').on('click', function() {
        prevQuestion();
    });

    $('#exit-button').on('click', function() {
        exitQuiz();
    });

    $('#exit-button-resultado').on('click', function() {
        exitQuiz();
    });
});

function getRandomQuestions(questions, num) {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function startQuiz() {
    if (difficultyMode === "easy") {
        selectedQuestions = getRandomQuestions(allQuestions, 5);
    } else if (difficultyMode === "hard") {
        selectedQuestions = allQuestions.slice();
    }
    initialSelectedQuestions = selectedQuestions.slice();
    currentQuestionIndex=0;
    score = 0;
    incorrectAnswers = [];
    userAnswers = new Array(selectedQuestions.length).fill(null);
    $('#start-screen').addClass('d-none');
    $('#result-screen').addClass('d-none');
    $('#question-screen').removeClass('d-none');
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= 0 && currentQuestionIndex < selectedQuestions.length) {
        $('#question-header').removeClass('d-none')
        $('#question-header').text(`Pregunta ${currentQuestionIndex + 1} de ${selectedQuestions.length}`);
        const questionData = selectedQuestions[currentQuestionIndex];
        $('#question').text(questionData.question);
        $('#question-image').attr('src', questionData.image);
        const optionsDiv = $('#options');
        optionsDiv.empty();
        questionData.options.forEach(option => {
            const button = $('<button class="btn btn-secondary bg-light text-dark m-3"></button>').text(option);
            button.on('click', () => selectAnswer(option));
            optionsDiv.append(button);
        });

        if (currentQuestionIndex === 0) {
            $('#prev-button').addClass('d-none');
        } else {
            $('#prev-button').removeClass('d-none');
        }
    } else if (currentQuestionIndex === selectedQuestions.length) {
        $('#question-header').addClass('d-none')
        showResults();
    }
}

function selectAnswer(option) {
    userAnswers[currentQuestionIndex] = option;
    currentQuestionIndex++;
    showQuestion();
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function exitQuiz() {
    $('#question-header').addClass('d-none')
    $('#question-screen').addClass('d-none');
    $('#result-screen').addClass('d-none');
    $('#start-screen').removeClass('d-none');
}

function showResults() {
    score = 0;
    incorrectAnswers = [];
    userAnswers.forEach((answer, index) => {
        if (answer === selectedQuestions[index].answer) {
            score++;
        } else {
            incorrectAnswers.push({
                question: selectedQuestions[index].question,
                selectedOption: answer,
                correctAnswer: selectedQuestions[index].answer,
                info: selectedQuestions[index].info
            });
        }
    });

    let passingScore = (difficultyMode === "easy") ? Math.ceil(selectedQuestions.length * 0.8) : selectedQuestions.length;

    $('#question-screen').addClass('d-none');
    $('#result').text(`Tu puntuación: ${score} de ${selectedQuestions.length}`);
    const errorListDiv = $('#error-list');
    errorListDiv.empty();
    incorrectAnswers.forEach(error => {
        const errorItem = $('<div></div>');
        errorItem.html(`<strong>Pregunta:</strong> ${error.question}<br><strong>Tu respuesta:</strong> ${error.selectedOption}<br><strong>Respuesta correcta:</strong> ${error.correctAnswer}<br><strong>Info:</strong> ${error.info}<br><br>`);
        errorListDiv.append(errorItem);
    });

    $('#celebration').empty();
    if (score >= passingScore) {
        $('#celebration').removeClass('d-none');
        $('#celebration').append(`<p>🎉 ¡Felicidades! Has aprobado 🎉</p>`);
        if (difficultyMode === "hard") {
            $('#celebration').append(`<p>No solo has aprobado sino que también has demostrado un gran conocimiento del cuidado ambiental. Como premio, aquí tienes un wallpaper asombroso: <a href="../img/federicoWallpaperDificil.jpg" target="_blank" download="federicoWallpaperDificil.jpg">Descargar Wallpaper</a></p>`);        }
    } else {
        $('#celebration').addClass('d-none');
        errorListDiv.append(`<p>Mejor suerte para la próxima. ¡Vuelve a intentarlo!</p>`);
    }

    $('#result-screen').removeClass('d-none');
}

function retryQuiz() {
    selectedQuestions = initialSelectedQuestions.slice();
    currentQuestionIndex = 0;
    score = 0;
    incorrectAnswers = [];
    userAnswers = new Array(selectedQuestions.length).fill(null);
    $('#start-screen').addClass('d-none');
    $('#result-screen').addClass('d-none');
    $('#question-screen').removeClass('d-none')
    showQuestion();
}