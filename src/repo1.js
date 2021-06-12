function fazGet(url){
    let request = new XMLHttpRequest();
    request.open('GET', url,false);
    request.send();
    return request.responseText
}

function criaLinha(usuario){
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdDesc = document.createElement("td");
    tdId.innerHTML = usuario.id
    tdNome.innerHTML = usuario.name 
    tdDesc.innerHTML = usuario.description

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdDesc);

    return linha;
}

function main(){ 
   let data= fazGet("https://api.github.com/repositories")
   let usuarios = JSON.parse(data);
   let tabela = document.getElementById("tabela")
   
   usuarios.forEach(element=>{
       let linha = criaLinha(element)
       tabela.appendChild(linha)
   })
}
main()