const result = document.getElementById('result');
const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');

const checkInput = () => {
    let input = textInput.value;
    
    if (input) {
        let processedInput = input.toUpperCase().replace(/[^A-Z0-9]/g, '');
        let reversedInput = Array.from(processedInput).reverse().join('');

        if (processedInput) {
            if (processedInput === reversedInput) {
                result.textContent = `${input} is a palindrome`;
            } else {
                result.textContent = `${input} is not a palindrome`;
            }
        } else {
            result.textContent = 'That was not a valid input. Please enter alphanumeric characters.';
        }
    } else {
        result.textContent = 'Please input a value';
    }
};

checkBtn.addEventListener('click', checkInput);