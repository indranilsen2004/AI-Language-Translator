async function translateText() {
    const inputText = document.getElementById("inputText").value;
    const fromLang = document.getElementById("fromLang").value;
    const toLang = document.getElementById("toLang").value;
    const outputText = document.getElementById("outputText");

    if (inputText.trim() === "") {
        alert("Please enter text to translate!");
        return;
    }

    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${fromLang}|${toLang}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        outputText.value = data.responseData.translatedText;
    } catch (error) {
        outputText.value = "Error translating text!";
        console.error(error);
    }
}