
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var img = [
"https://github.com/arijit-ship/arijit-ship.github.io/blob/master/cpp/bg/36626.jpg?raw=true",
"https://github.com/arijit-ship/arijit-ship.github.io/blob/master/cpp/bg/5-centimeters-per-second-2007-ending-1024x576.jpg?raw=true",
"https://github.com/arijit-ship/arijit-ship.github.io/blob/master/cpp/bg/HD-wallpaper-the-garden-of-words-male-movie-kotoha-winter-makoto-snow-anime-love-garden-shinkai.jpg?raw=true",
"https://github.com/arijit-ship/arijit-ship.github.io/blob/master/cpp/bg/demon-slayer-bg.jpg?raw=true",
"https://github.com/arijit-ship/arijit-ship.github.io/blob/master/cpp/bg/scene-12.jpg?raw=true",
"https://github.com/arijit-ship/arijit-ship.github.io/blob/master/cpp/bg/scene-22.jpg?raw=true",
"https://github.com/arijit-ship/arijit-ship.github.io/blob/master/cpp/bg/silhouette_stairs_sun_213031_1366x768.jpg?raw=true"

]

bg = img[getRandomInt(0, img.length - 1)];

document.body.style.backgroundImage = "url("+ bg +  ")";

//document.body.style.backgroundImage = "url('../bg/scene-22.jpg')";