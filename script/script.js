// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
// BONUS
// Facciamo accendi e spegni:
// - Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
// - Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
// - E così via...

const buttonOnOffElm = document.querySelector("button")
console.log(buttonOnOffElm)
const lampadina = document.getElementById("lampadina")
console.log(lampadina)
const title = document.querySelector("h1")
console.log(title)

let acceso = false;

buttonOnOffElm.addEventListener("click", function () {
    if(acceso === false) {
        lampadina.src = `./img/yellow_lamp.png`
        acceso = true;
        buttonOnOffElm.innerHTML = `Spegni`
        buttonOnOffElm.style.background = "green";
        title.innerHTML = "Buona notte";
        

    }
    else {
        acceso = false;
        lampadina.src = `./img/white_lamp.png`
        buttonOnOffElm.innerHTML = `Accendi`
        buttonOnOffElm.style.background = "red";
        title.innerHTML = "Buongiorno";
    }
} )


