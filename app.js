const ham = document.getElementById("ham");

function function1() {
  ham.classList.toggle("open");
}

ham.addEventListener("click", function1);

// const pos1 = document.getElementById("pos1");
const pos2 = document.getElementById("pos2");
const pos3 = document.getElementById("pos3");

function hoverstate() {
  document.getElementById("pos1").style.backgroundColor = red;
  console.log("It is working, congratz.")
}

document.getElementById("pos2").addEventListener("mouseover", console.log("something is happening at least"));
pos3.addEventListener("mouseover", hoverstate);