let yodaInput =
{
    "text": "This is my example sentence. Just for fun."
}

let seperatedSentences = yodaInput.text.split('.');

seperatedSentences.split(' ');

for (let i = 0; i < sentences.length - 1; i++) {
    let counter = 1;
    if (counter % 2 === 0) {
        newArray[i] = sentences[i - 1];
    } else {
        newArray[i] = sentences[i + 1];
    }

}
newArray[seperatedSentences.length] = sentences[seperatedSentences.length];



