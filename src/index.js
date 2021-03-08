import * as moment from 'moment';

const title = document.getElementById("title1");

title.addEventListener("mouseover", changeBackground);
function changeBackground() {
  title.setAttribute("id", "title2");
}

title.addEventListener("mouseout", changeground);
function changeground() {
  title.setAttribute("id", "title1");
}

function myClick() {
  const nameElement = document.getElementById("name1");
  nameElement.classList.toggle("colorchange");
}


function myFunction() {
  const testElement = document.getElementById("test");
  const buttonElement = document.getElementById("btn");

  if (testElement) {
    testElement.remove();
    buttonElement.textContent = "Add me";
  }

  else {
    const newElement = document.createElement("a");
    newElement.textContent = "Part 2 Tests";
    newElement.setAttribute("id", "test");
    newElement.setAttribute("href", "ps2-tests.html");

    const liElement = document.getElementById("testparent");
    liElement.append(newElement);
    buttonElement.textContent = "Remove me";

  }

}

const alert1 = document.getElementById("alert1");
alert1.addEventListener("click", alertFuction);
function alertFuction() {
  alert("This is Wrong Button!");

}


function myTimer() {
  document.getElementById("time").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}

setInterval(myTimer, 1000);

myTimer();

