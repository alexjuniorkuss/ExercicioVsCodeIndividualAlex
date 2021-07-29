/*
var bandas = 
[
    {"id":1,"nome":"calipso","genero":"geral","pais":"Brasil","integrantes":"3"},
    {"id":3,"nome":"Barões","genero":"Pisadinha","pais":"Brasil","integrantes":"2"},
    {"id":5,"nome":"Malta","genero":"Gospel","pais":"Argentina","integrantes":"15"}
];
function salvar()
{
    let id = parseInt(document.getElementById("id").value);
    let nome = document.getElementById("banda").value;
    let genero = document.getElementById("genero").value;
    let pais = document.getElementById("pais").value;
    let integrantes = parseInt(document.getElementById("integrantes").value);
    banda = {"id":id,"nome":nome,"genero":genero,"pais":pais, "integrantes":integrantes};
    bandas.push(banda);
    carregaTabela();
};
function carregaTabela(){
    let tabela = document.getElementById("bandas");         //todos os elementos de bandas
    let corpo = tabela.getElementsByTagName("tbody")[0];
    corpo.innerHTML = "";
    bandas.forEach(b => {
        corpo.innerHTML += `<tr><td>${b["id"]}</td><td>${b["nome"]}</td><td>${b["genero"]}</td><td>${b["pais"]}</td><td>${b["integrantes"]}</td> </tr>`;       
    });
}

window.onload = function(){
    carregaTabela();
}
*/

var bandas = [];

function Salvar()
{
    
    let id = parseInt(document.getElementById("id").value);
    let banda = document.getElementById("banda").value;
    let genero = document.getElementById("genero").value;
    let pais = document.getElementById("pais").value;
    let integrantes = parseInt(document.getElementById("integrantes").value);
    let band = {"id":id,"banda":banda,"genero":genero,"pais":pais,"integrantes":integrantes}   
    if (bandas.findIndex(x => x.id == id) != -1)
    {
        console.log(band)
       alert("Editado com sucesso!");
       
       bandas[bandas.findIndex(x => x.id == id)] = band; 
       Listar();
    }else
    {
        confirm("Salvo com sucesso!");
        bandas.push(band);
        localStorage.setItem("bandas", JSON.stringify(bandas));
        Listar();
    };
}
function Listar()
{
    let tabela = document.getElementById("bandas");
    let corpo = tabela.getElementsByTagName("tbody")[0];
    corpo.innerHTML = "";
    bandas.forEach(b => {                                                                                                                                           
        corpo.innerHTML += `<tr><td>${b["id"]}</td><td>${b["banda"]}</td><td>${b["genero"]}</td><td>${b["pais"]}</td><td>${b["integrantes"]}</td><td class="opcoes"><label for="editar" class="editarLabel" onclick=editar(${b["id"]})>Editar</label><label for="excluir" class="excluirLabel" onclick=excluirItemSelecionado(${b["id"]})>Excluir</label></td> </tr>`;  
    });
}                                                                                                                                                                                                   
/*
function excluirItemSelecionado(){
    var itens = document.getElementById("itens");           
    if (itens.selectedIndex == -1){
        alert("Selecione um item na lista!");
        return;
    }
    var indice = itens.options[itens.selectedIndex].index;
    var itemSelecionado = itens.options[itens.selectedIndex].text;
    var resultado = confirm("Deseja excluir o item: " + itemSelecionado + " ?");
    if (resultado == true) {
        itens.removeChild(itens[indice]);
        alert("O item " + itemSelecionado + " será excluído da lista!");    
    }
    else{
        alert("Você desistiu de excluir o item " + itemSelecionado + " da lista!");
    }
}
*/
function excluirItemSelecionado(id)
{
    let item = bandas.findIndex(x => x.id == id);
    let nom = bandas[item];
    console.log(nom);
    var resultado = confirm("Deseja excluir a Banda?");
    if (resultado == true) {
    alert(`O item  ${nom.banda}  será excluído da lista!`);    
    bandas.splice(bandas.findIndex(x => x.id == id),1);
    localStorage.setItem("bandas", JSON.stringify(bandas));
    Listar();
           
        }
        else{}
}
function editar(id)
{
    let item = bandas.findIndex(x => x.id == id);
    let nom = bandas[item];
    document.getElementById("id").value = nom.id;
    document.getElementById("banda").value = nom.banda;
    document.getElementById("genero").value = nom.genero;
    document.getElementById("pais").value = nom.pais;
    document.getElementById("integrantes").value = nom.integrantes;
}
window.onload = function()
{
    let bandasJson = localStorage.getItem("bandas");
    if (bandasJson != null)
    {
        bandas = JSON.parse(bandasJson);
    }
    Listar();
}