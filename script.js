document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener("blur", () => {
            input.classList.add("touched");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Select inputs and card preview elements
    const cardHolderInput = document.getElementById("card-holder-name");
    const cardNumberInput = document.getElementById("card-number");
    const expiryMonthInput = document.getElementById("expiry-date-m");
    const expiryYearInput = document.getElementById("expiry-date-y");
    const cvcInput = document.getElementById("cvc");

    const cardHolderPreview = document.querySelector(".card-front .down span:first-child");
    const cardNumberPreview = document.querySelector(".card-front p");
    const expiryPreview = document.querySelector(".card-front .down span:last-child");
    const cvcPreview = document.querySelector(".card-back p");

    // Default placeholder for empty fields
    const defaultCardNumber = "0000 0000 0000 0000";
    const defaultCardHolder = "Jane Appleseed";
    const defaultExpiry = "00/00";
    const defaultCVC = "000";

    // Function to format the card number as "0000 0000 0000 0000"
    function formatCardNumber(value) {
        return value.replace(/\s+/g, "") // Remove all spaces
                    .replace(/(\d{4})/g, "$1 ") // Add a space after every 4 digits
                    .trim(); // Remove trailing space
    }

    // Update cardholder name in real time
    cardHolderInput.addEventListener("input", () => {
        cardHolderPreview.textContent = cardHolderInput.value || defaultCardHolder;
    });

    // Update card number in real time
    cardNumberInput.addEventListener("input", () => {
        let formattedNumber = formatCardNumber(cardNumberInput.value);
        cardNumberInput.value = formattedNumber; // Update input value with formatting
        cardNumberPreview.textContent = formattedNumber || defaultCardNumber;
    });

    // Update expiry date in real time
    expiryMonthInput.addEventListener("input", updateExpiryPreview);
    expiryYearInput.addEventListener("input", updateExpiryPreview);

    function updateExpiryPreview() {
        const month = expiryMonthInput.value.padStart(2, "0"); // Ensure 2 digits
        const year = expiryYearInput.value.padStart(2, "0"); // Ensure 2 digits
        expiryPreview.textContent = `${month}/${year}`.replace(/00\/00/, defaultExpiry);
    }

    // Update CVC in real time
    cvcInput.addEventListener("input", () => {
        cvcPreview.textContent = cvcInput.value || defaultCVC;
    });
});
