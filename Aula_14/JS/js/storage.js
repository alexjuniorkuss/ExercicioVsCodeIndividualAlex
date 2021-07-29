var usuarios = [];
function salvar(){
    let id = parseInt(document.getElementById("id").value);
    let nome = document.getElementById("nome").value;

    let usuario = {"id":id,"nome":nome}
    usuarios.push(usuario);
    localStorage.setItem("usuarios" , JSON.stringify(usuarios));
}
function exibir(){
    let JasonUser = localStorage.getItem("usuarios");
    console.log(JasonUser);
    let newJasonUser = JSON.parse(JasonUser);
    console.log(newJasonUser[0].nome);
}
window.onload = function(){
    usuarios = JSON.parse(localStorage.getItem("usuarios"))
    exibir();

}