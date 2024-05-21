function reverseSentence() {
    const sentence = document.getElementById('sentenceInput').value;

    const reversedSentence = sentence.split(' ').reverse().join(' ');

    document.getElementById('reversedSentence').textContent = reversedSentence;
}


