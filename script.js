const cardHolderInput = document.getElementById("card-holder-name");
const cardNumberInput = document.getElementById("card-number");
const expiryMonthInput = document.getElementById("expiry-date-m");
const expiryYearInput = document.getElementById("expiry-date-y");
const cvcInput = document.getElementById("cvc");

const cardHolderPreview = document.querySelector(".card-front .down span:first-child");
const cardNumberPreview = document.querySelector(".card-front p");
const expiryPreview = document.querySelector(".card-front .down span:last-child");
const cvcPreview = document.querySelector(".card-back p");

const defaultCardNumber = "0000 0000 0000 0000";
const defaultCardHolder = "Jane Appleseed";
const defaultExpiry = "00/00";
const defaultCVC = "000";

const inputs = document.querySelectorAll("input");

document.addEventListener("DOMContentLoaded", () => {
    inputs.forEach(input => {
        input.addEventListener("blur", () => {
            input.classList.add("touched");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    
    function formatCardNumber(value) {
        return value.replace(/\s+/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim();
    }

    cardHolderInput.addEventListener("input", () => {
        cardHolderPreview.textContent = cardHolderInput.value || defaultCardHolder;
    });

    cardNumberInput.addEventListener("input", () => {
        let formattedNumber = formatCardNumber(cardNumberInput.value);
        cardNumberInput.value = formattedNumber;
        cardNumberPreview.textContent = formattedNumber || defaultCardNumber;
    });

    expiryMonthInput.addEventListener("input", updateExpiryPreview);
    expiryYearInput.addEventListener("input", updateExpiryPreview);

    function updateExpiryPreview() {
        const month = expiryMonthInput.value.padStart(2, "0");
        const year = expiryYearInput.value.padStart(2, "0");
        expiryPreview.textContent = `${month}/${year}`.replace(/00\/00/, defaultExpiry);
    }

    cvcInput.addEventListener("input", () => {
        cvcPreview.textContent = cvcInput.value || defaultCVC;
    });
});

const myForm = document.querySelector("form");
const success = document.querySelector(".complete-success");

const confirm = document.querySelector("#confirm");
confirm.addEventListener("click", () => {
    myForm.style.display = "none";
    success.style.display = "flex";
});

const Continue = document.querySelector("#Continue");
Continue.addEventListener("click", () => {
    success.style.display = "none";
    myForm.style.display = "flex";
    cardHolderInput.value = "";
    cardNumberInput.value = "";
    expiryMonthInput.value = "";
    expiryYearInput.value = "";
    cvcInput.value = "";
    cardHolderPreview.textContent = defaultCardHolder;
    cardNumberPreview.textContent = defaultCardNumber;
    expiryPreview.textContent = defaultExpiry;
    cvcPreview.textContent = defaultCVC;
    inputs.forEach(input => {
        input.classList.remove("touched");
    });
});
