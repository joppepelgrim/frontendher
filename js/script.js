let preHeaderHeight;

// window.scrollY houdt in hoeveel pixels de gebruiker al heeft gescrolled op de website
// function onScroll kijkt wanneer het aantal pixels dat de gebruiker al heeft gescrolled meer is dan de hoogte van de preheader
// als dit zo is roept dit deze functie aan en deze firet de functie makeHeaderSticky
// als dit niet zo is firet deze functie de functie makeHeaderRelative
function onScroll() {
    if (window.scrollY > preHeaderHeight) makeHeaderSticky();
    else makeHeaderRelative();
}

//deze functie voegt de class sticky toe waardoor de header nav aanhoudt wanneer de gebruiker naar beneden scrollt
//de sticky class maakt de header fixed in plaats van absolute
//pak het element "header" en voeg er een class aan toe "sticky" waardoor je het in de css kan aanspreken
function makeHeaderSticky() {
    document.querySelector("header").classList.add("sticky")
}

//deze functie verwijdert de class sticky (waardoor de header terug gezet wordt naar absolute)
function makeHeaderRelative() {
    document.querySelector("header").classList.remove("sticky")
}

//we hebben de header height nodig omdat deze op 0 wordt gezet bij class sticky
//de height van de preHeader wordt op 0 gezet om deze te laten verdwijnen als de gebruiker naar beneden scrollt
function adjustPreheaderHeight() {
    preHeaderHeight = document.querySelector("header section:first-of-type").offsetHeight;
    updateMainMargin();
}

// omdat de header fixed is moet de main een marge hebben vanaf de top, zodat deze niet onder de header terecht komt waardoor de bovenste content niet meer zichtbaar is
// dit kan niet met een normale marge omdat de preheader een variabele hoogte heeft. De tekst is responsive waardoor de preheader groter wordt wanneer de viewport minder breedt wordt
// offsetHeight is de hoogte van een element op het moment dat je de formule aanroept
// bij de eerste regel reken je de waarde van de hoogte uit, bij de tweede regel pas je de waarde toe. Je geeft waarde aan de hoogte waardoor je deze kunt gebruiken
function updateMainMargin() {
    const totalHeight = document.querySelector("header").offsetHeight - 1;
    document.querySelector("main").style="margin-top: " +  totalHeight + "px";
}

// luister naar Event scroll, bij elke keer dat je deze event hoort voer je de functie onScroll uit
// de hoogte van de preheader is alleen variabel bij een verandering van de breedte van de viewport. En als deze verandert moeten we de nieuwe hoogte weten om te weten hoever de content naar beneden moet zakken
window.addEventListener("scroll", onScroll);
window.addEventListener("resize", adjustPreheaderHeight);
onScroll();
adjustPreheaderHeight();
