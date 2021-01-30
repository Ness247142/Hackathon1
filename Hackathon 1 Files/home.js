// Definition of text elements that we want to change

let homeQuote=document.getElementById("home_quote");
let homeAuthor=document.getElementById("home_author");
let homeImg1=document.getElementById("homeimg1");
let homeImg2=document.getElementById("homeimg2");
let homeImg3=document.getElementById("homeimg3");
let homeImg4=document.getElementById("homeimg4");
let homeImg5=document.getElementById("homeimg5");
let homeImg6=document.getElementById("homeimg6");
let homeImg7=document.getElementById("homeimg7");
let homeImg8=document.getElementById("homeimg8");
let homeImg9=document.getElementById("homeimg9");
let homeImg10=document.getElementById("homeimg10");
let homeText1=document.getElementById("hometext1");
let homeText2=document.getElementById("hometext2");
let homeText3=document.getElementById("hometext3");
let homeText4=document.getElementById("hometext4");
let homeText5=document.getElementById("hometext5");
let homeText6=document.getElementById("hometext6");
let homeText7=document.getElementById("hometext7");
let homeText8=document.getElementById("hometext8");
let homeText9=document.getElementById("hometext9");
let homeText10=document.getElementById("hometext10");


// Hebrew translations
let heb = document.getElementById("heb");
heb.addEventListener("click",function(event){
    homeQuote.textContent="בלב החושך נוצץ תמיד תקווה וחופש";
    homeAuthor.textContent="- סופר לא יודע";
    homeImg1.textContent="פסל החירות";
    homeText1.textContent="אחד מירבי-העוצמה של החופש בעולם";
    homeImg1.textContent="פסל החירות";
    homeImg2.textContent=" יוג'ין דלקרואה";
    homeText2.textContent="החופש מנחה את האנשים";
    homeImg3.textContent="ציפורי חופש";
    // homeText3.textContent="";
    homeImg4.textContent="חופש";
    homeText4.textContent="מסעדה צרפתית";
    homeImg5.textContent="גרי ווינוגרנד";
    homeText5.textContent="תחושת חופש";
    homeImg6.textContent="אדם על הירח";
    homeText6.textContent="באז אלדרין מאת ניל ארמסטרונג";
    homeImg7.textContent="סקקומי";
    homeText7.textContent="שממה בקנדה";
    homeImg8.textContent="מחנה הבסיס של אוורסט";
    homeText8.textContent="לנצח ומעבר";
    homeImg9.textContent="וושינגטון חוצה את דלאוור";
    homeText9.textContent="ציור אייקוני במסע לחופש של אמריקה";
    homeImg10.textContent="לב אמיץ";
    homeText10.textContent="הם יכולים לקחת את חיינו, אבל הם לעולם לא ייקחו את החופש שלנו";
})

//French translation
let fr = document.getElementById("fr");
console.log(fr.textContent);

fr.addEventListener("click",function(event){
    homeQuote.textContent="Au coeur des ténèbres, une étincelle d'espoir et de liberté finit toujours par jaillir";
    homeAuthor.textContent="- Auteur Inconnu";
    homeImg1.textContent="Statue de la Liberté";
    homeText1.textContent="L'un des plus puissants symboles de Liberté dans le monde";
    homeImg2.textContent="Eugène Delacroix";
    homeText2.textContent="La Liberté guidant le peuple";
    homeImg3.textContent="Oiseaux de liberté";
    // homeText3.textContent="";
    homeImg4.textContent="Liberté";
    homeText4.textContent="Restaurant français";
    homeImg5.textContent="Garry Winogrand";
    homeText5.textContent="Sentiment de liberté";
    homeImg6.textContent="Un homme sur la lune";
    homeText6.textContent="Buzz Aldrin par Neil Armstrong";
    homeImg7.textContent="Sacacomie";
    homeText7.textContent="La nature sauvage au Canada";
    homeImg8.textContent="Camp de base de l'Everest";
    homeText8.textContent="Vers l'infini et au-delà";
    homeImg9.textContent="Washington traversant le Delaware";
    homeText9.textContent="Peinture symbole de la quête américaine pour la liberté";
    homeImg10.textContent="Braveheart";
    homeText10.textContent="Ils peuvent nous ôter la vie, mais ils ne nous ôteront jamais notre liberté";

    })

