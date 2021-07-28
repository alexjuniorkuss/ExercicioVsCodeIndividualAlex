var bandas = 
[
    {"id":1,"banda":"calipso","genero":"geral","pais":"Brasil","integrantes":"3"},
    {"id":3,"banda":"Barões","genero":"Pisadinha","pais":"Brasil","integrantes":"2"},
    {"id":5,"banda":"Malta","genero":"Gospel","pais":"Argentina","integrantes":"15"}
];
function salvar()
{
    let id = parseInt(document.getElementById("id").value);
    let banda = document.getElementById("banda").value;
    let genero = document.getElementById("genero").value;
    let pais = document.getElementById("pais").value;
    let integrantes = parseInt(document.getElementById("integrantes").value);
    banda = {"id":id,"banda":banda,"genero":genero,"pais":pais, "integrantes":integrantes};
    bandas.push(banda);
    CarregarTabela();
};
function carregaTabela(){
    let tabela = document.getElementById("bandas");
    let corpo = tabela.getElementsByTagName("tbody")[0];
    corpo.innerHTML = "";
    bandas.forEach(b => {
        corpo.innerHTML += `<tr><td>${b["id"]}</td><td>${b["nome"]}</td><td>${b["genero"]}</td><td>${b["pais"]}</td><td>${b["integrantes"]}</td> </tr>`;       
    });
}

window.onload = function(){
    carregaTabela();
}