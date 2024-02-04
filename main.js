//used to calculate weight
function calculateBMI() {
    let userHeight = (document.querySelector("#height").value) / 100;
    let userWeight = document.querySelector("#weight").value;
    let bmiUser = (userWeight / (userHeight * userHeight));

    let buttonUnder = document.querySelector(".button-under");

    if (bmiUser > 0 && bmiUser < 18.5) {
        document.querySelector("#result").innerHTML = "Tehlikeli derecede zayıf";
        buttonUnder.style.left = "7%"
    }
    else if (bmiUser >= 18.5 && bmiUser <= 24.9) {
        document.querySelector("#result").innerHTML = "Normal Kilolu";
        buttonUnder.style.left = "23%"
    }
    else if (bmiUser >= 25 && bmiUser <= 29.9) {
        document.querySelector("#result").innerHTML = "Hafif şişman (fazla kilolu)";
        buttonUnder.style.left = "39%"
    }
    else if (bmiUser >= 30 && bmiUser <= 34.9) {
        document.querySelector("#result").innerHTML = "Orta derecede şişman (I. Derece)";
        buttonUnder.style.left = "55%"
    }
    else if (bmiUser >= 35) {
        document.querySelector("#result").innerHTML = "Ağır derecede şişman (II. Derece)";
        buttonUnder.style.left = "71%"
    }

}

//function used to reset the values
function resetBMI() {
    document.querySelector("#height").value = "";
    document.querySelector("#weight").value = "";
    document.querySelector("#result").innerHTML = "";
    buttonUnder.style.left = "0%";

}


//function for content update
document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.querySelectorAll('.paraf-btn-button');
    let activeButton = null;

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {

            if (activeButton) {
                activeButton.classList.remove('clicked');
            }


            activeButton = this;


            this.classList.add('clicked');


            updateContent(this.id);
        });
    });
});

//function for content update
function updateContent(buttonId) {
    switch (buttonId) {
        case "yoga":
            document.querySelector("#classes h2").innerHTML = "Why are your Yoga?";
            document.querySelector("#classes p").innerHTML = " YOGA Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, vel voluptatibus? Repudiandae aut nostrum possimus laudantium ut atque quae";
            document.querySelector(".left-h2").innerHTML = "When comes Yoga Your Time."
            document.querySelector("#classes img").src = "./images/yoga.jpg";
            break;

        case "group":
            document.querySelector("#classes h2").innerHTML = "Why are your Group?";
            document.querySelector("#classes p").innerHTML = " GROUP Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, vel voluptatibus? Repudiandae aut nostrum possimus laudantium ut atque quae"
            document.querySelector(".left-h2").innerHTML = "When comes Group Your Time."
            document.querySelector("#classes img").src = "./images/group.webp";
            break;

        case "solo":
            document.querySelector("#classes h2").innerHTML = "Why are your Solo?";
            document.querySelector("#classes p").innerHTML = " SOLO Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, vel voluptatibus? Repudiandae aut nostrum possimus laudantium ut atque quae"
            document.querySelector(".left-h2").innerHTML = "When comes Solo Your Time."
            document.querySelector("#classes img").src = "./images/solo.jpg";
            break;

        case "stretching":
            document.querySelector("#classes h2").innerHTML = "Why are your Stretching?";
            document.querySelector("#classes p").innerHTML = " Stretching Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, vel voluptatibus? Repudiandae aut nostrum possimus laudantium ut atque quae"
            document.querySelector(".left-h2").innerHTML = "When comes Stretching Your Time."
            document.querySelector("#classes img").src = "./images/stret.webp";
            break;

        default:
            break;
    }
}


window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.menu');

    // When the page is scrolled
    if (window.scrollY > 0) {
        // Add "navbar-scrolled" class to Navbar
        navbar.classList.add('navbar-scrolled');
    } else {
        // Remove "navbar-scrolled" class from Navbar
        navbar.classList.remove('navbar-scrolled');
    }
});

// Opening and closing the hamburger menu
document.querySelector('.hamburger-menu').addEventListener('click', function () {
    document.querySelector('.nav-right').classList.toggle('show-menu');
});

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.hamburger-menu');

    document.addEventListener('click', function (event) {
        const isMenuButton = event.target === menuButton;
        const isMenuContainer = document.querySelector('.nav-right.show-menu');
        const isClickInsideMenuContainer = isMenuContainer && isMenuContainer.contains(event.target);

        if (!isMenuButton && !isClickInsideMenuContainer) {
            document.querySelector('.nav-right').classList.remove('show-menu');
        }
    });
});

