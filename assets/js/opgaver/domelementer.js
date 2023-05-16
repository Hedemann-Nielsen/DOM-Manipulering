/* DOMcelementer */



/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/

let NyRoedFigur = document.getElementById('redFigure');
console.log('NyRoedFigur');
let NyGulFigur = document.getElementById('yellowFigure');
console.log('NyGulFigur');

/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/


NyRoedFigur.style.backgroundColor = 'blue';
NyGulFigur.style.backgroundColor = 'blue';



/* opgave 2.1
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/


let eksisterendeElement = document.getElementById("opgaveTwo");

let nyOverskrift = document.createElement("h2")

eksisterendeElement.appendChild(nyOverskrift);
nyOverskrift.innerText = "Opgave 2.1 løsning.";

let nyParagraf = document.createElement("p");

eksisterendeElement.appendChild(nyParagraf);
nyParagraf.innerText = "Jeg har løst opgave 2.1.";



// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/

let lillaFigure = document.getElementsByClassName("purpleFigures");
console.log("lillaFigure");


/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map funktionen til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/

// din kode her
let changeLillaFigur = Array.from(lillaFigure);
console.log(changeLillaFigur);

changeLillaFigur.map((element) => {
    element.style.backgroundColor = 'red';
});


/* opgave 3.3
Brug myLiveList til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/


//ingen af delene virker og jeg har ingen idé om hvordan jeg skal løse opgaven 
const myElement = document.getElementsByTagName("h3");

for (const child of myElement.children[0].innerHTML) {
    console.log(child.myElement);
}
myElement.style.h3 = RED;

document.getElementsByTagName("h3").innerHTML = "RED";
// din kode her - 



/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
*/

const myData = {
    name: 'tiger',
    image: 'assets/img/standard_tiger.jpg',
    description: 'En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.'
};

// din kode her

