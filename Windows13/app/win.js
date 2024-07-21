document.addEventListener('DOMContentLoaded', function() {
    var timeElement = document.getElementById('currentTime');
    var dateElement = document.getElementById('currentDate');

    function updateTimeAndDate() {
        var now = new Date();
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var day = now.getDate().toString().padStart(2, '0');
        var month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-indexed
        var year = now.getFullYear();

        var currentTime = hours + ':' + minutes;
        var currentDate = day + '/' + month + '/' + year;

        timeElement.textContent = currentTime;
        dateElement.textContent = currentDate;
    }

    updateTimeAndDate();

    setInterval(updateTimeAndDate, 1000);
});

function showContextMenu(event) {
    event.preventDefault();

    var contextMenu = document.getElementById("contextMenu");
    contextMenu.style.display = "block";
    contextMenu.style.left = event.pageX + "px";
    contextMenu.style.top = event.pageY + "px";

    document.querySelector(".container-window").addEventListener("click", function hideContextMenu() {
        contextMenu.style.display = "none";
        document.removeEventListener("click", hideContextMenu);
    });
}

function refresh() {
    location.reload()
}

document.getElementById("startButton").addEventListener("click", function() {
    console.log("button clicked");
    toggleStartMenu();
});

document.addEventListener("keydown", function(event) {
    var startMenu = document.getElementById("startMenu");
    var searchInput = document.getElementById("startSearch");

    if (event.key === "Meta" || event.key === "OS") {
        toggleStartMenu();
        event.preventDefault(); 
    }

    if (startMenu.style.display === "block") {
        searchInput.focus();
    }
});

function toggleStartMenu() {
    var startMenu = document.getElementById("startMenu");
    var searchInput = document.getElementById("startSearch");

    if (startMenu.style.display === "none" || startMenu.style.display === "") {
        startMenu.style.display = "block";
        searchInput.focus();
    } else {
        startMenu.style.display = "none";
    }
}





