const editableinput = document.querySelector(".editable"),
    readonlyinput = document.querySelector(".readonly"),
    placeholder = document.querySelector(".placeholder"),
    counter = document.querySelector(".counter"),
    button = document.querySelector("button");

editableinput.onkeyup = (e) => {
    let element = e.target;
    checkinput(element);
}

editableinput.onkeypress = (e) => {
    let element = e.target;
    checkinput(element);
    placeholder.style.display = "none";
}

function checkinput(element) {
    let maxlength = 100;
    let currentlength = element.innerText.length;
    let textTag = element.innerHTML;

    if (currentlength <= 0) {
        placeholder.style.display = "block";
        counter.style.display = "none";
        button.classList.remove("active");

    } else {
        counter.style.display = "block";
        placeholder.style.display = "none";
        button.classList.add("active");
    }
    counter.innerText = maxlength - currentlength;
    if (currentlength > maxlength) {
        let overText = element.innerText.substr(maxlength);
        overText = `<span class="highlight">${overText}</span>`;
        textTag = element.innerText.substr(0, maxlength) + overText;
        readonlyinput.style.zIndex = "1";
        counter.style.color = "#e0245e";
        button.classList.remove("active");
    } else {
        readonlyinput.style.zIndex = "-1";
        counter.style.color = "#333";
    }
    readonlyinput.innerHTML = textTag;
}