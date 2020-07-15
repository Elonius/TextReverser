window.onload = function () {
    document.querySelector("#submit").addEventListener("click", clickHandler);
    document.querySelector("#clear").addEventListener("click", clearText);
}

const clickHandler = () => {
    const input = document.querySelector("#input").value;
    const result = document.querySelector("#output");

    const string = reverseString(input);

    result.value = string;
}

const reverseString = (str) => {
    const pieces = str.split(' ');
    let res = '';
    for (let i = pieces.length - 1; i >= 0; i--) {
        const word = pieces[i];

        res += `${word} `;
    }

    return res;
}

const clearText = () => {
    const input = document.querySelector("#input").value = '';
    const output = document.querySelector("#output").value = '';
}