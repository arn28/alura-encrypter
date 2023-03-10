const textInput = document.getElementById("input-text") as HTMLTextAreaElement;
const notFoundMessage: HTMLElement = document.querySelector(".right-not-found");
const textoutputPanel: HTMLElement = document.querySelector(".right-result");
const textoutput: HTMLElement = document.querySelector(".result-output");
const buttons = document.querySelectorAll("button");
const alertInfo: HTMLElement = document.querySelector("#alert-container");

const hideElement = (element: HTMLElement) => {
  element.classList.add("hidden");
};
const showElement = (element: HTMLElement) => {
  element.classList.remove("hidden");
};

const showNotFoundMessage = () => {
  if (!textInput.value) {
    showElement(notFoundMessage);
    hideElement(textoutputPanel);
  }
};

const showOutput = (input: string) => {
  if (input.length) {
    showElement(textoutputPanel);
    hideElement(notFoundMessage);
    textoutput.innerText = input;
  }
};

const lowercaseInput = () => {
  let inputLowerCase: string;
  inputLowerCase = textInput.value.toLowerCase();
  textInput.value = inputLowerCase;
};

const copyToClipboard = (text: string) => {
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

const encryptInput = (): string => {
  let inputEncrypted = textInput.value
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return inputEncrypted;
};

const decryptInput = (): string => {
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
