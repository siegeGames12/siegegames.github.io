const editableInput = document.querySelector('.editable'),
readonlyInput = document.querySelector('.readonly'),
placeholdering = document.querySelector('.placeholdering'),
countering = document.querySelector('.countering'),
buttonpost = document.querySelector('.buttonpost');
    
editableInput.onkeyup = (e)=>{
    let element = e.target;
    checkInput(element);
}

editableInput.onkeypress = (e)=>{
    let element = e.target;
    checkInput(element);
    placeholdering.style.display = "none";
}

function checkInput(element){
    let maxLength = 10000;
    let currentLength = element.innerText.length;
    let textTag = element.innerHTML;

    if(currentLength <= 0){
        placeholdering.style.display = "block";
        countering.style.display = "none";
        buttonpost.classList.remove("active");
    }else{
        countering.style.display = "block";
        placeholdering.style.display = "none";
        buttonpost.classList.add("active");
    }
    countering.innerText = maxLength - currentLength;
    
    if(currentLength > maxLength){
        let overText = element.innerText.substr(maxLength);
        overText =`<span class = "highlight">${overText}</span>`;
        textTag = element.innerText.substr(0, maxLength) + overText;
        readonlyInput.style.zIndex = "1";
        countering.style.color = "#e0245e";
        buttonpost.classList.remove("active");
    }
    readonlyInput.innerHTML = textTag;
}