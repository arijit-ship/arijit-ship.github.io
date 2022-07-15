
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var img = [
"https://github.com/arijit-ship/arijit-ship.github.io/blob/master/c_plusplus_notes_masters_physics/bg/36626.jpg?raw=true",
"https://github.com/arijit-ship/arijit-ship.github.io/blob/master/c_plusplus_notes_masters_physics/bg/5-centimeters-per-second-2007-ending-1024x576.jpg?raw=true",
"https://github.com/arijit-ship/arijit-ship.github.io/blob/master/c_plusplus_notes_masters_physics/bg/HD-wallpaper-the-garden-of-words-male-movie-kotoha-winter-makoto-snow-anime-love-garden-shinkai.jpg?raw=true",
"https://github.com/arijit-ship/arijit-ship.github.io/blob/master/c_plusplus_notes_masters_physics/bg/demon-slayer-bg.jpg?raw=true",

]

bg = img[getRandomInt(0, img.length - 1)];

document.body.style.backgroundImage = "url("+ bg +  ")";
