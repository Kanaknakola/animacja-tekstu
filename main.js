const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3'];
let txtNumber = 0;
let txtChar = 0;

const addLetter = () => {
    if (txtNumber === txt.length) {
        return
    }
    spnText.textContent += txt[txtNumber][txtChar];
    txtChar++;
    if (txtChar === txt[txtNumber].length + 1) {
        txtNumber++;
        txtChar = 0;
        spnText.textContent = "";
        return setTimeout(() => {
            addLetter();
        }, 2000);
    }
    setTimeout(addLetter, 200);
}

addLetter();

const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);