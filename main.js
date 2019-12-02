function openSettings() {
   document.getElementById("settings").classList.toggle("settings-open");
}


//2
document.getElementById("settings-button").addEventListener('click', openSettings)

//3

var userName;

//4
function saveName() {
    localStorage.setItem('receivedName', userName);
}

//5

var userName = localStorage.getItem('receivedName');

//6

if (userName == null) {
   userName = "friend";
}

//7

function changeName() {
   userName = document.getElementById("name-input").value;
   saveName();
}

//8

document.getElementById("name-form").addEventListener('submit', function(e) {
   e.preventDefault();
   changeName();
});

//9

function getGreeting() {
   document.getElementById("greeting").innerHTML  = `Hello, ${userName}. Enjoy your day!`;
}

getGreeting();


