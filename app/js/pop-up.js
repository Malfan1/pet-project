const btn = document.querySelectorAll(".js-open");
const close = document.querySelector(".js-close");
const popup = document.querySelector(".js-popup")
document.addEventListener("click", popupFunc);

function popupFunc(e) { 
    const { target } = e;
    
    if (target.classList.contains("js-open")) { 
        popup.style.display = "block";
    } else if (target.classList.contains("js-close") || target.classList.contains("blur")) {
        popup.style.display = "none";
        
    }

}