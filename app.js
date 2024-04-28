const responses = ["b", "c", "b", "a", "c", "a"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector("form");
const sentenceResult = document.querySelector("h2");
const mark = document.querySelector(".mark");
const help = document.querySelector(".help");

form.addEventListener("submit", handleForm);

function handleForm(event) {
	event.preventDefault();
	const inputsChecked = document.querySelectorAll("input:checked");

	checkAnswers(inputsChecked);
}

function checkAnswers(inputsChecked) {
	let score = 0;
	let goodInputs = [];
	let badInputs = [];

	for (let i = 0; i < inputsChecked.length; i++) {
		if (inputsChecked[i].value === responses[i]) {
			score++;
			goodInputs.push(inputsChecked[i]);
		} else {
			badInputs.push(inputsChecked[i]);
		}
	}

	showResult(score, goodInputs, badInputs);
}

function showResult(score, goodInputs, badInputs) {
	if (score <= 1) {
		sentenceResult.textContent = `${emojis[3]} You can do better ! ${emojis[3]}`;
		help.textContent =
			"Change your answer for questions in red to improve your score, then submit again!";
	} else if (score <= 3) {
		sentenceResult.textContent = `${emojis[2]} Almost that, try again ! ${emojis[2]}`;
		help.textContent =
			"Change your answer for questions in red to improve your score, then submit again!";
	} else if (score <= 5) {
		sentenceResult.textContent = `${emojis[0]} Almost that ! ${emojis[0]}`;
		help.textContent =
			"Change your answer for questions in red to improve your score, then submit again!";
	} else {
		sentenceResult.textContent = `${emojis[1]} Congratulations ! ${emojis[1]}`;
	}

	mark.textContent = `Mark: ${score} / ${responses.length}`;
	mark.style.display = "block";
	help.style.display = "block";

	styleAnswers(goodInputs, badInputs);
}

function styleAnswers(goodInputs, badInputs) {
	for (let i = 0; i < goodInputs.length; i++) {
		goodInputs[i].parentNode.parentNode.style.background =
			"linear-gradient(30deg, rgba(7,70,34,1) 0%, rgba(19,255,0,1) 50%, rgba(254,254,254,1) 99%)";
	}

	for (let i = 0; i < badInputs.length; i++) {
		badInputs[i].parentNode.parentNode.style.background =
			"linear-gradient(30deg, rgba(117,19,19,1) 5%, rgba(255,0,0,1) 44%, rgba(255,136,136,1) 100%)";
	}
}
