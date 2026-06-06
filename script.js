const text = [
    "Web Developer",
    "Cloud Computing Enthusiast",
    "Data Analytics Aspirant"
];

let count = 0;
let index = 0;
let currentText = "";
let isDeleting = false;

function type() {

    currentText = text[count];

    if (!isDeleting) {
        index++;
    } else {
        index--;
    }

    document.getElementById("typing").textContent =
        currentText.substring(0, index);

    let speed = 120;

    if (!isDeleting && index === currentText.length) {
        speed = 1500;
        isDeleting = true;
    } 
    else if (isDeleting && index === 0) {
        isDeleting = false;
        count++;

        if (count === text.length) {
            count = 0;
        }

        speed = 300;
    }

    setTimeout(type, speed);
}

type();