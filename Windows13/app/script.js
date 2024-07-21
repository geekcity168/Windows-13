document.addEventListener("DOMContentLoaded", function() {
    var defaultPassword = "admin1234";

    var loginPassword = document.getElementById("loginPassword");
    var mainContainer = document.getElementById("mainContainer");
    var loginLoading = document.getElementById("loginLoading");
    var passError = document.getElementById("passError");


    function handleKeyPress(event) {
        if (event.keyCode === 13 || event.which === 13) {
            console.log("Enter key is pressed")
            var enteredPassword = loginPassword.value;

            if (enteredPassword === defaultPassword) {
                console.log("Password correct. Proceeding...");

                // Smooth transition from mainContainer to loginLoading
                mainContainer.style.opacity = "0.8";
                setTimeout(function() {
                    mainContainer.style.display = "none";
                    loginLoading.style.opacity = "1";
                    loginLoading.style.display = "block";

                    setTimeout(() => {
                        window.location.href = "window1.html"
                    }, 3500);
                }, 500); 
            } else {
                console.log("Incorrect password. Please try again.");

                mainContainer.style.opacity = "0.8";
                setTimeout(function() {
                    mainContainer.style.display = "none";
                    passError.style.opacity = "1";
                    passError.style.display = "block";
                }, 500); 
            }
        }
    }

    document.getElementById("tryAgain").addEventListener("click", function() {
        passError.style.opacity = "0.8";
                setTimeout(function() {
                    passError.style.display = "none";
                    mainContainer.style.opacity = "1";
                    mainContainer.style.display = "block";
                }, 500); 
    });

    loginPassword.addEventListener("keypress", handleKeyPress);
});


document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('loginPassword');
    const toggleIcon = document.getElementById('toggleIcon');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    toggleIcon.classList.toggle('fa-eye');
    toggleIcon.classList.toggle('fa-eye-slash');


    const passwordInpField = document.getElementById("loginPassword");

    passwordField.style.backgroundColor = "#fff";
});




document.getElementById("wifi").addEventListener("click", function() {
    var wifiButton = document.getElementById("wifi");
    var wifiPopup = document.getElementById("wifiPopup");

    wifiButton.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    if (wifiPopup.style.display === 'none' || wifiPopup.style.display === '') {
        wifiPopup.style.display = 'block';
    } else {
        wifiPopup.style.display = 'none';
        wifiButton.style.backgroundColor = "transparent";
    }
});

document.getElementById("access").addEventListener("click", function() {
    var accesButon = document.getElementById("access");
    var accesPopup = document.getElementById("accesPopup");

    accesButon.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    if (accesPopup.style.display === 'none' || accesPopup.style.display === '') {
        accesPopup.style.display = 'block';
    } else {
        accesPopup.style.display = 'none';
        accesButon.style.backgroundColor = "transparent";
    }
});

document.getElementById("power").addEventListener("click", function() {
    var powerButon = document.getElementById("power");
    var powerPopup = document.getElementById("powerPopup");

    powerButon.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    if (powerPopup.style.display === 'none' || powerPopup.style.display === '') {
        powerPopup.style.display = 'block';
    } else {
        powerPopup.style.display = 'none';
        powerButon.style.backgroundColor = "transparent";
    }
});




