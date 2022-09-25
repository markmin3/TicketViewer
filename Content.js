let willSmithImages = [
    "https://www.lovethispic.com/uploaded_images/80903-Funny-Will-Smith.jpg"
];

const venue = document.getElementsByClassName("event-header__event-location event-header__event-location-link")[0];

const imgs = document.getElementsByTagName("img")

for (let i = 0; i < imgs.length; i++) {
    const randomImg = ßMath.floor(Math.random() * willSmithImages.length)
    imgs[i].src = willSmithImages[randomImg]
}

alert(venue.textContent)