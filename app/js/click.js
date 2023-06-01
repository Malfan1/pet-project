
document.addEventListener('click', handle);

function handle(e) { 
    const { target } = e;
    const oc = target.dataset.openclose;
    
    if (!oc) { 
        return;
    }

    const nextEl = target.nextElementSibling;
    nextEl.classList.toggle("faq__hidden");
    nextEl.style.hover.cursor = "pointer"
    const hiddenEl = document.querySelectorAll(openId);
    hiddenEl.classList.toggle("faq__hidden");
}