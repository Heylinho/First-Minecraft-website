//Menu Song
var xp = new Audio()
xp.src = 'teleport.mp3'
//Footer Song
var arco = new Audio()
arco.src = 'arco.mp3'
function home(){
    var ifra = document.getElementById('ifra')
    ifra.src = 'home.html'
    document.body.style.backgroundImage = "url('fundopadrao.png')"

}

function loja(){
    var ifra = document.getElementById('ifra')
    ifra.src = 'loja.html'
    document.body.style.backgroundImage = "url('fundopadrao.png')"
    
}

function jogos(){
    var ifra = document.getElementById('ifra')
    ifra.src = 'jogos.html'
    document.body.style.backgroundImage = "url('fundopedra.png')"
    
}

function contato(){
    var ifra = document.getElementById('ifra')
    ifra.src = 'contato.html'
    document.body.style.backgroundImage = "url('fundoend.png')"
    
}