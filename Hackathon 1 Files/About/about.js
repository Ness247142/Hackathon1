
function myFunction() {
    let x = document.getElementById("title");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

myImages = new Array(3);
for (let i = 0; i < 3; i++) {
    myImages[i] = new Image();
}
myImages[0].src = "https://www.logolynx.com/images/logolynx/66/665c4fc0d48be78e945e1c9aff702afb.jpeg";
myImages[1].src = "https://previews.123rf.com/images/tpabma/tpabma1602/tpabma160200030/51968022-the-israeli-flag-round-glossy-icon-isolated-on-white-background-.jpg";
myImages[2].src = "https://media.istockphoto.com/photos/american-flag-ball-flag-of-the-usa-on-sphere-picture-id508372612"
function Randomizer() {
    let num = myImages.length - 1;
    let ran = Math.floor(Math.random() * (num + 1));
    document.images["flag"].src = myImages[ran].src;
}
