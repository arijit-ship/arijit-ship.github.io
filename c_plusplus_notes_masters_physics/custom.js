
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var img = [
"https://github.com/arijit-ship/arijit-ship.github.io/blob/master/c_plusplus_notes_masters_physics/bg/demon-slayer-bg.jpg?raw=true", 
"https://arijit-ship.github.io/Haskell-notes-webpage-assets/samuraichampllo_png.png", 
"https://github.com/arijit-ship/arijit-ship.github.io/blob/master/c_plusplus_notes_masters_physics/bg/62d1938d4052a.jpg?raw=true", 
"https://github.com/arijit-ship/arijit-ship.github.io/blob/master/c_plusplus_notes_masters_physics/bg/kekkaishi-43_le-retour-de-la-tempeteavi_000361027.jpg?raw=true"
]

bg = img[getRandomInt(0, img.length - 1)];

document.body.style.backgroundImage = "url("+ bg +  ")";
