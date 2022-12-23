const ham = document.getElementById("ham");

function function1() {
  ham.classList.toggle("open");
}

ham.addEventListener("click", function1);

const pos1 = document.getElementById("pos1");
const pos2 = document.getElementById("pos2");
const pos3 = document.getElementById("pos3");
const pos4 = document.getElementById("pos4");
const pos5 = document.getElementById("pos5");

function hoverstate() {
  pos1.style.boxShadow = "none";
}

function undohoverstate() {
  pos1.style.boxShadow = "0px 0px 10px 10px rgba(151, 151, 151, 0.5)";
}

pos2.addEventListener("mouseover", hoverstate);
pos2.addEventListener("mouseover", changeId2);
pos3.addEventListener("mouseover", hoverstate);
pos3.addEventListener("mouseover", changeId3);
pos4.addEventListener("mouseover", hoverstate);
pos4.addEventListener("mouseover", changeId4);
pos5.addEventListener("mouseover", hoverstate);
pos5.addEventListener("mouseover", changeId5);

pos2.addEventListener("mouseout", undohoverstate);
pos2.addEventListener("mouseout", undoId2);
pos3.addEventListener("mouseout", undohoverstate);
pos3.addEventListener("mouseout", undoId3);
pos4.addEventListener("mouseout", undohoverstate);
pos4.addEventListener("mouseout", undoId4);
pos5.addEventListener("mouseout", undohoverstate);
pos5.addEventListener("mouseout", undoId5);

function changeId2() {
  pos1.id = "poslead"
  pos2.id = "pos1"
}

function undoId2() {
  pos1.id = "pos1"
  pos2.id = "pos2"
}

function changeId3() {
  pos1.id = "poslead"
  pos3.id = "pos1"
}

function undoId3() {
  pos1.id = "pos1"
  pos3.id = "pos3"
}

function changeId4() {
  pos1.id = "poslead"
  pos4.id = "pos1"
}

function undoId4() {
  pos1.id = "pos1"
  pos4.id = "pos4"
}

function changeId5() {
  pos1.id = "poslead"
  pos5.id = "pos1"
}

function undoId5() {
  pos1.id = "pos1"
  pos5.id = "pos5"
}

const leftSide = document.getElementById("left-side");
const rightSide = document.getElementById("right-side");
const learnMoreBtn = document.getElementById("learn-more-btn");
const bgHam = document.getElementById("bgham");
const bgLogo = document.getElementById("bglogo");
const changeTxt = document.getElementById("changetxt");
const logo = document.getElementById("logo");
const headshot = document.getElementById("headshot");

function learnMore() {
  leftSide.style.transform = "translateX(-100%)";
  bgHam.style.backgroundPosition = "left";
  rightSide.style.transform = "translateX(100%)";
  bgLogo.style.backgroundPosition = "right";
  changeTxt.style.transform = "translateX(-120%)";
  logo.style.transform = "translateX(-75%)";
  headshot.style.right = "-35%";
}

learnMoreBtn.addEventListener("click", learnMore);