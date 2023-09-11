const Dragarea = document.querySelector(`.container-box`),
    i = Dragarea.querySelector(`.fa-solid`);
    input = Dragarea.querySelector(`input`),
    dragtext = Dragarea.querySelector(`h3`),
    clickhere = Dragarea.querySelector(`h4`);
let myfile;

i.onclick = () => {
    input.click();
};
Dragarea.onclick = (e) =>{
    input.click();
}
clickhere.onclick = () => {
    input.click();
};

input.addEventListener(`change`, function () {
    myfile = this.files[0];
    Dragarea.classList.add(`active`);
    showme()
});

Dragarea.addEventListener(`dragover`, (e) => {
    e.preventDefault();
    Dragarea.classList.add(`active`);
    dragtext.innerHTML = `Release To Upload File`;
});

Dragarea.addEventListener(`dragleave`, (e) => {
    e.preventDefault();
    Dragarea.classList.remove(`active`);
    dragtext.innerHTML = `Drag and Drop`;
});
Dragarea.addEventListener(`drop`, (e) => {
    e.preventDefault();
    myfile = e.dataTransfer.files[0];
    showme()
});
function showme() {
    const filetype = myfile.type;
    const imageformat = [`image/jpeg`, `image/jpg`, `image/png`];
    if (imageformat.includes(filetype)) {
        const filereader = new FileReader();
        filereader.onload = () => {
            let img = filereader.result;
            Dragarea.innerHTML = `<img src="${img}" alt="">`;
        };
        filereader.readAsDataURL(myfile);
        Dragarea.style.border = 0;
    }
    else {
        alert(`This File Is Not Valid`);
        Dragarea.classList.remove(`active`);
        dragtext.innerHTML = `Drag and Drop`;
    }
}
