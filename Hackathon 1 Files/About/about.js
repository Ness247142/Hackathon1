let h1 = document.getElementById("main");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");


let eng = document.getElementById("eng");
eng.addEventListener("click", function (event) {
    h1.textContent = "Freedom: another casualty of Covid-19 pandemic";
    h1.style.fontWeight = "bold";
    p1.textContent = "In order to address the COVID-19 outbreak, governments around the world took strict measures and curtailed their citizen’s freedom of movement. Borders of countries, states, provinces, counties and cities all over the world closed. Lock-downs and quarantines obstructed non-essential movement outside of the home. People are required to stay home, to abstain from going to work or school. Restaurants, stores, offices, museums, playgrounds, gyms, etc. also closed. In addition, public gatherings like religious services, concerts, social and sporting events were cancelled.";
    p2.textContent = "When will we retrieve our freedom?"
    p3.textContent = "Freedom is not something that anybody can be given. Freedom is something people take, and people are as free as they want to be.";
});

let heb = document.getElementById("heb");
heb.addEventListener("click", function (event) {
    h1.textContent = "חופש: נפגע נוסף של מגיפת קוביד-19";
    h1.style.fontWeight = "bold";
    p1.textContent = "כדי להתמודד עם פרוץ ה-COVID-19, ננקטים ממשלות ברחבי העולם צעדים נוקשים וסרטו את חופש התנועה של אזרחיהן. גבולות מדינות, מדינות, מחוזות, מחוזות וערים ברחבי העולם סגורים. הגבלות על הפחתות והסגר חוסמות תנועה בלתי חיונית מחוץ לבית. אנשים נדרשים להישאר בבית, כדי להימנע מללכת לעבודה או לבית הספר. מסעדות, חנויות, משרדים, מוזיאונים, מגרשי משחקים, חדרי כושר וכו' גם הם סגורים. כמו כן בוטלו מפגשים ציבוריים כמו שירותים דתיים, קונצרטים, אירועי חברה וספורט.";
    p2.textContent = "מתי נאחזר את חירותנו?";
    p3.textContent = "חופש אינו דבר שניתן לתת לכל אחד. החופש הוא משהו שאנשים לוקחים, ואנשים חופשיים כמו שהם רוצים להיות.";
});


let fr = document.getElementById("fr");
console.log(fr.textContent);

fr.addEventListener("click", function (event) {
    h1.textContent = "Liberté : une autre victime de la pandémie de COVID-19";
    h1.style.fontWeight = "bold";
    p1.textContent = "Afin de faire face à l’épidémie de COVID-19, les gouvernements du monde entier ont pris des mesures strictes et réduit la liberté de mouvement de leurs citoyens. Les frontières des pays, des états, des provinces, des comtés et des villes partout dans le monde ont fermé. Les mesures de confinement et de quarantaine ont entravé les déplacements non essentiels à l’extérieur du domicile. Les gens sont tenus de rester à la maison, de s’abstenir d’aller au travail ou à l’école. Restaurants, magasins, bureaux, musées, terrains de jeux, gymnases, etc. également fermé. De plus, des rassemblements publics comme des services religieux, des concerts, des événements sociaux et sportifs ont été annulés.";
    p2.textContent = "Quand récupérerons-nous notre liberté ?";
    p3.textContent = "La liberté n’est pas quelque chose qu’on peut donner à n’importe qui. La liberté est quelque chose que les gens prennent, et les gens sont aussi libres qu’ils veulent l’être.";
});


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
myImages[1].src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/8653e99e-6c08-4c0c-8a57-218c9b35d97c/d1t73t3-dacaa272-d005-4bc1-bbfc-808965f193da.jpg";
myImages[2].src = "https://lh3.googleusercontent.com/proxy/Zr9Il_LWrR9vSS7EKcGg-pVgD-9mceOLmcZGiQAozYpuLgqDV5vhV0tPofRzsyLLwdz0sGAOpTPl-pCLEfWh5kvT8ybaVZ8aNIEAb8Gv0FwE"
function Randomizer() {
    let num = myImages.length - 1;
    let ran = Math.floor(Math.random() * (num + 1));
    document.images["flag"].src = myImages[ran].src;
}
