let showRunning = false;
let intervalId = null;
let intervalId2 = null;
let intervalId3 = null;

//play music
const audioPlayer = document.getElementById("audio-player");
let audioPlaying = false;

const heartSymbol = "&#10084;";

const cakeSymbols = ["🧁", "🍬", "🎂", "🍭", "🍩", "🍧", "🍪", "&#127880;"];

const flowerSymbols = ["🌻", "🌼", "🌷"];

const colors = [
    {
        color: "#FF6F61", // Coral Pink
        textColor: getContrastingColor("#FF6F61"),
        borderColor: "#C84C4A", // Darker shade of Coral Pink
    },
    {
        color: "#fc4eac", // Deep Pink
        textColor: getContrastingColor("#fc4eac"), // Text color based on contrast
        borderColor: "#D61F84" // Darker shade of Deep Pink
    },
    {
        color: "#40E0D0", // Turquoise
        textColor: getContrastingColor("#40E0D0"), // Text color based on contrast
        borderColor: "#208080" // Darker shade of Turquoise
    },
    {
        color: "#FFDAB9", // Peach
        textColor: getContrastingColor("#FFDAB9"), // Text color based on contrast
        borderColor: "#DEB887" // Darker shade of Peach
    },
    {
        color: "#FFC0CB", // Pink
        textColor: getContrastingColor("#FFC0CB"), // Text color based on contrast
        borderColor: "#FFB6C1" // Darker shade of Pink
    },
    {
        color: "#87CEEB", // Sky Blue
        textColor: getContrastingColor("#87CEEB"), // Text color based on contrast
        borderColor: "#5D9FC2" // Darker shade of Sky Blue
    },
    {
        color: "#FF0000", // Red
        textColor: getContrastingColor("#FF0000"), // Text color based on contrast
        borderColor: "#C50000" // Darker shade of Red
    },
    {
        color: "#E6E6FA", // Lavender
        textColor: getContrastingColor("#E6E6FA"), // Text color based on contrast
        borderColor: "#C2A2DA" // Darker shade of Lavender
    },
    {
        color: "#FFB6C1", // Light Pink
        textColor: getContrastingColor("#FFB6C1"),
        borderColor: "#FF8C94", // Darker shade of Light Pink
    },
    {
        color: "#98FB98", // Pale Green
        textColor: getContrastingColor("#98FB98"),
        borderColor: "#76CD82", // Darker shade of Pale Green
    },
    {
        color: "#00CED1", // Dark Turquoise
        textColor: getContrastingColor("#00CED1"),
        borderColor: "#008B8B", // Darker shade of Dark Turquoise
    },

    {
        color: "#DDA0DD", // Plum
        textColor: getContrastingColor("#DDA0DD"),
        borderColor: "#9370DB", // Darker shade of Plum
    },
    {
        color: "#87CEFA", // Light Sky Blue
        textColor: getContrastingColor("#87CEFA"),
        borderColor: "#6495ED", // Darker shade of Light Sky Blue
    },
    {
        color: "#FFA07A", // Light Salmon
        textColor: getContrastingColor("#FFA07A"),
        borderColor: "#FA8072", // Darker shade of Light Salmon
    },
    {
        color: "#B0E0E6", // Powder Blue
        textColor: getContrastingColor("#B0E0E6"),
        borderColor: "#87CEEB", // Darker shade of Powder Blue
    },
    {
        color: "#E0FFFF", // Light Cyan
        textColor: getContrastingColor("#E0FFFF"),
        borderColor: "#AFEEEE", // Darker shade of Light Cyan
    },
    {
        color: "#F0E68C", // Khaki
        textColor: getContrastingColor("#F0E68C"),
        borderColor: "#DAA520", // Darker shade of Khaki
    },
    {
        color: "#FFB5E8", // Light Pink
        textColor: getContrastingColor("#FFB5E8"),
        borderColor: "#FF77A8", // Darker shade of Light Pink
    },
];

// Function to get contrasting text color (black or white)
function getContrastingColor(hexColor) {
    const rgb = hexToRgb(hexColor);
    const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    return luminance > 0.5 ? "#000000" : "#FFFFFF"; // Light background: Black text, Dark background: White text
}

// Function to convert hex color to RGB
function hexToRgb(hexColor) {
    const hex = hexColor.replace("#", "");
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
}

function getRandomSymbol(symbols) {
    return symbols[getRandomNumber(0, symbols.length - 1)];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomSize(minSize, maxSize) {
    return getRandomNumber(minSize, maxSize);
}

function getRandomAnimation() {
    const animations = ["heartbeat", "heartbeat rotateHeart"];
    return animations[getRandomNumber(0, animations.length - 1)];
}

function getRandomColor() {
    return colors[getRandomNumber(0, colors.length - 1)];
}

function createRandomHeart() {
    const heartContainer = document.createElement("div");
    heartContainer.className = "heart-container";
    const leftPos = getRandomNumber(0, window.innerWidth - 150);
    const topPos = getRandomNumber(0, window.innerHeight - 150);
    heartContainer.style.left = leftPos + "px";
    heartContainer.style.top = topPos + "px";

    const minSize = 60;
    const maxSize = 90;
    let heartSize = getRandomSize(minSize, maxSize);
    const animation = getRandomAnimation();
    const colorSetting = getRandomColor();

    heartSize = getCenterSize(heartSize, leftPos, topPos, window.innerWidth, window.innerHeight);
    console.log(`Position relative to document: left: ${leftPos}, top: ${topPos}`);

    const heart = document.createElement("div");
    heart.className = "heart";
    const heartText = getRandomSymbol(["Hai Néo", "Eny"]);
    heart.innerHTML = `${heartSymbol}<span>${heartText}</span>`;
    heart.style.fontSize = heartSize + "px";
    const spanElement = heart.querySelector("span");
    spanElement.style.fontSize = heartSize / 6 + "px";
    spanElement.style.color = colorSetting.textColor + " !important";
    heart.style.animationName = animation;
    heart.style.color = colorSetting.color;

    //border-heart 1
    const biggerHeart = document.createElement("div");
    biggerHeart.className = "heart border-heart-1";
    biggerHeart.innerHTML = `${heartSymbol}`;
    const biggerHeartSize = heartSize;
    biggerHeart.style.fontSize = biggerHeartSize + "px";
    biggerHeart.style.animationName = animation;
    biggerHeart.style.color = "#333333" + " !important";

    // border-heart 2
    const biggerHeart2 = document.createElement("div");
    biggerHeart2.className = "heart border-heart-2";
    biggerHeart2.innerHTML = `${heartSymbol}`;
    const biggerHeartSize2 = heartSize;
    biggerHeart2.style.fontSize = biggerHeartSize2 + "px";
    biggerHeart2.style.animationName = animation;
    biggerHeart2.style.color = "#333333" + " !important";

    heartContainer.appendChild(heart);
    heartContainer.appendChild(biggerHeart);
    heartContainer.appendChild(biggerHeart2);
    document.body.appendChild(heartContainer);

    setTimeout(() => heartContainer.remove(), getRandomNumber(1000, 3000));
}

function createRandomSymbols(symbols, minTime, maxTime) {
    const heartContainer = document.createElement("div");
    heartContainer.className = "heart-container";
    heartContainer.style.left = getRandomNumber(100, window.innerWidth - 100) + "px";
    heartContainer.style.top = getRandomNumber(0, window.innerHeight - 40) + "px";

    const minSize = 30;
    const maxSize = 50;
    const heartSize = getRandomSize(minSize, maxSize);
    const animation = getRandomAnimation();
    const colorSetting = getRandomColor();
    const symbol = getRandomSymbol(symbols);

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = `${symbol}<span></span>`;
    heart.style.fontSize = heartSize + "px";
    const spanElement = heart.querySelector("span");
    spanElement.style.fontSize = heartSize / 10 + "px";
    spanElement.style.color = colorSetting.textColor;
    heart.style.animationName = animation;
    heart.style.color = colorSetting.color;

    heartContainer.appendChild(heart);
    document.body.appendChild(heartContainer);

    setTimeout(() => heartContainer.remove(), getRandomNumber(minTime, maxTime));
}

function getCenterSize(heartSize, leftPos, topPos, innerWidth, innerHeight) {
    if (leftPos > 200 && leftPos < (innerWidth - 300)
        && topPos < innerHeight - 350) {
        return getRandomSize(90, 180);
    } else {
        return heartSize;
    }
}

function getPositionOfElement(element) {
    const rect = element.getBoundingClientRect();
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    return {
        top: rect.top + scrollY,
        left: rect.left + scrollX,
        right: rect.right + scrollX,
        bottom: rect.bottom + scrollY,
    };
}

function startShow() {
    if (!showRunning) {
        showRunning = true;
        intervalId = setInterval(createRandomHeart, 500);
        intervalId2 = setInterval(function () {
            createRandomSymbols(flowerSymbols, 500, 2000);
        }, 1000);
        intervalId3 = setInterval(function () {
            createRandomSymbols(cakeSymbols, 500, 2000)
        }, 1000);
    }
}

function stopShow() {
    if (showRunning) {
        showRunning = false;
        clearInterval(intervalId);
        clearInterval(intervalId2);
        clearInterval(intervalId3);
    }
}

function toggleShow() {
    if (showRunning) {
        stopShow();
        document.getElementById("startButton").textContent = "Start";
    } else {
        startShow();
        document.getElementById("startButton").textContent = "Stop";
    }
}

function toggleAudio() {
    if (audioPlaying) {
        audioPlayer.pause(); // Pause the audio if it's currently playing
    } else {
        audioPlayer.play(); // Play the audio if it's not currently playing
    }

    audioPlaying = !audioPlaying; // Toggle the audioPlaying state
}

// Function to replay the audio when it finishes playing
function replayAudio() {
    audioPlayer.currentTime = 0; // Reset the current time to the beginning
    audioPlayer.play(); // Start playback again
}

audioPlayer.addEventListener("ended", replayAudio);