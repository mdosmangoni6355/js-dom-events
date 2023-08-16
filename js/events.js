// Option-1 Directly set on the HTML Document

// Option-2 add onclick function
// !Important We will use this method
// <button onclick="orangeBackground()">Make Background Color Orange</button>
function orangeBackground (){
    document.body.style.backgroundColor = "orange";
}

// Option-3
const makeBlue = document.getElementById('blue-bg');
makeBlue.onclick = blueBg;

function blueBg (){
    document.body.style.backgroundColor = 'blue';
}

// Option-3 Alternative

const purpleButton = document.getElementById('purple-btn');
purpleButton.onclick = function purpleBg (){
    document.body.style.backgroundColor = 'purple';
}

// Option-4 

const makeRed = document.getElementById('red-btn');
makeRed.addEventListener('click', redBg);

function redBg (){
    document.body.style.backgroundColor = 'red';
}

// option-4 Alternative
const makeYellow = document.getElementById('yellow-btn');
makeYellow.addEventListener('click', function yellowBg (){
    document.body.style.backgroundColor = 'yellow';
});

// option-4 Final
// !Important We will use this method
// document.getElementById('golden-btn').addEventListener('click', function(){})
document.getElementById('golden-btn').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})