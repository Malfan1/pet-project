const year = document.querySelectorAll("#year");
let indx;
let count = 0;
let isChanging = false;

document.addEventListener("scroll", startChangingText);

function startChangingText() {
  if (parseInt(window.scrollY) > 200 && !isChanging) {
    isChanging = true;
    indx = setInterval(changeText, 50);
  }
}

function changeText() {
  count++;
  [...year].forEach((el) => {
    el.textContent = count >= 0 && count < 10 ? '0' + count : count;
  });

  if (count >= 26) {
    clearInterval(indx);
  }
}

