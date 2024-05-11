function findReplace() {
    let para = document.getElementById('values');
    let findWord = document.getElementById('find');
    let ReplaceWord = document.getElementById('replace');
    let userpara = document.getElementById('userpara');
    let update = document.getElementById('update');

    let replacedValue = para.value.replace(findWord.value, ReplaceWord.value);
    userpara.innerText = para.value;
    update.innerText = replacedValue;
}
