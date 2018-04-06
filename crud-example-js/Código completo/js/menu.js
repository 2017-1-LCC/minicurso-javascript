function adicionaClasse() {
    var adiciona= document.getElementById("navbar");

    if (adiciona.className === "menu")
    {
        adiciona.className+= "responsivo";
    } else {
        adiciona.className= "menu";
    }
}