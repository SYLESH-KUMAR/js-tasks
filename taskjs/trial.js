function calculateLength() {
    var inputElement = document.getElementById('myInput');

    var inputValue = inputElement.value;

    var inputLength = inputValue.length;

    var resultElement = document.getElementById('result');
    resultElement.textContent = 'Length of input: ' + inputLength;
}


