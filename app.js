var words = ["APPLE", "PANCAKES", "COMPUTER", "PARIS", "MICROPHONE", "PASTRY"];
var randomWord = getRandomWord(words);

generateHiddenWord(randomWord);

function generateHiddenWord(word) {
    var letters = word.split("");
    var emptyLetterContainer = document.querySelector("#empty-letter-container");

    var lettersHTML = "";
    for (var letter of letters) {
        var letterHTML = `<p class="letter-container"><span class="letter hidden">${letter}</span></p>`;
        lettersHTML += letterHTML;
    }

    emptyLetterContainer.innerHTML = lettersHTML;
}

function getRandomWord(words) {
    var randomIndex = Math.floor(Math.random() * words.length);
    var randomWord = words[randomIndex];
    return randomWord;
}
