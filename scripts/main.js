const textInput = document.getElementById("input-text");
const notFoundMessage = document.querySelector(".right-not-found");
const textoutputPanel = document.querySelector(".right-result");
const textoutput = document.querySelector(".result-output");
const buttons = document.querySelectorAll("button");
const alertInfo = document.querySelector("#alert-container");
const hideElement = (element) => {
    element.classList.add("hidden");
};
const showElement = (element) => {
    element.classList.remove("hidden");
};
const showNotFoundMessage = () => {
    if (!textInput.value) {
        showElement(notFoundMessage);
        hideElement(textoutputPanel);
    }
};
const showOutput = (input) => {
    if (input.length) {
        showElement(textoutputPanel);
        hideElement(notFoundMessage);
        textoutput.innerText = input;
    }
};
const lowercaseInput = () => {
    let inputLowerCase;
    inputLowerCase = textInput.value.toLowerCase();
    textInput.value = inputLowerCase;
};
const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
};
const showAlert = () => {
    let isClicked = false;
    showElement(alertInfo);
    setTimeout(() => {
        if (!isClicked) {
            hideElement(alertInfo);
        }
    }, 3000);
    alertInfo.addEventListener("click", () => {
        hideElement(alertInfo);
        isClicked = true;
    });
};
const encryptInput = () => {
    let inputEncrypted = textInput.value
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return inputEncrypted;
};
const decryptInput = () => {
    let inputEncrypted = textInput.value
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return inputEncrypted;
};
const main = () => {
    textInput.addEventListener("keyup", () => {
        lowercaseInput();
        showNotFoundMessage();
    });
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let textToShow;
            switch (button.classList.value) {
                case "button-encrypt":
                    textToShow = encryptInput();
                    break;
                case "button-decrypt":
                    textToShow = decryptInput();
                    break;
                case "button-copy":
                    copyToClipboard(textoutput.innerText);
                    showAlert();
                    break;
                default:
                    break;
            }
            showOutput(textToShow);
        });
    });
};
//Executing main function
main();
