var myQuestions = [
{
	question: "Qual lei da física não existe?",
	answers: {
		a: 'Inércia',
		b: 'Gravidade',
		c: 'Força'
	},
	correctAnswer: 'b'
},
{
	question: "Qual é o maior atual pesquisador Terraplanista?",
	answers: {
		a: 'Eu e Ela Curiosa',
		b: 'Olavo de Carvalho',
		c: 'Professor Terra Plana',
	},
	correctAnswer: 'c'
},
{
	question: "Quem é o nosso maior rival?",
	answers: {
		a: 'ET Bilu',
		b: 'NASA',
		c: 'Russos',
	},
	correctAnswer: 'a'
},
{
	question: "Qual teoria rivaliza com a Terra Plana?",
	answers: {
		a: 'Terra Geóide',
		b: 'Terra Convexa',
		c: 'Terra Rosquinha',
	},
	correctAnswer: 'a'
},
{
	question: "Qual cientista mentiu em relação à física terrestre?",
	answers: {
		a: 'Isaac Newton',
		b: 'Albert Einstein',
		c: 'Fábio do Click Time',
	},
	correctAnswer: 'a'
},
{
	question: "Qual destas celebridades apoia a Terra Plana?",
	answers: {
		a: 'Isaque Milton',
		b: 'Tila Tequila',
		c: 'Paulo Kogos',
	},
	correctAnswer: 'b'
},
{
	question: "Os dinossauros realmente existiram?",
	answers: {
		a: 'Sim',
		b: 'Sim, porém depende',
		c: 'Óbvio que não',
	},
	correctAnswer: 'c'
},
{
	question: "Qual empresa não mente em relação à Terra Plana?",
	answers: {
		a: 'NASA',
		b: 'FEIC',
		c: 'URSS',
	},
	correctAnswer: 'b'
},
{
	question: "Por que nossos sapatos são retos?",
	answers: {
		a: 'Superfície Plana da Terra',
		b: 'Anti-Gravidade',
		c: 'Convenção para a monopolização das empresas de sapatos',
	},
	correctAnswer: 'a'
},
{
	question: "Depois de todos estes dados, você acredita na Terra Plana?",
	answers: {
		a: 'Sou fraco, não',
		b: 'SIM',
		c: 'Não aguento tanta verdade na minha frente, pego minha ignorância e vou embora',
	},
	correctAnswer: 'b'
}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

function showQuestions(questions, quizContainer){
	var output = [];
	var answers;
	for(var i=0; i<questions.length; i++){

		answers = [];

		for(letter in questions[i].answers){

			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	quizContainer.innerHTML = output.join('');
}

function showResults(questions, quizContainer, resultsContainer){

	var answerContainers = quizContainer.querySelectorAll('.answers');

	var userAnswer = '';
	var numCorrect = 0;

	for(var i=0; i<questions.length; i++){

		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

		if(userAnswer===questions[i].correctAnswer){

			numCorrect++;

			answerContainers[i].style.color = 'lightgreen';
		}

		else{

			answerContainers[i].style.color = 'red';
		}
	}

		resultsContainer.innerHTML = 'O número de questões certas foram: ' + numCorrect + ' de ' + questions.length;
	}
showQuestions(questions, quizContainer);

submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}
}
