fetch('http://api.quotable.io/random').then((response) => {
    console.log(response);
    return responce.json()
}).then((data) => {
    console.log(data.content)
})

let texte = document.getElementById("texte");
texte.setAttribute("style", "color:green");