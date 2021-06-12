

function carregar(){ 
    const botao = document.getElementById('botao_buscar')
    const input_nome = document.getElementById('repositorio')

    botao.onclick = () => 
    { 
        const repositorio = input_nome.value
        const minhaReq = new Request(`https://api.github.com/repositories/${repositorio}`)

        fetch(minhaReq).then(response=>response.json()).then(dados=>{
            const nome = dados.name

            //alert(nome);
            preencher(dados)
            
        })
        
    }
}

function preencher(dados){
    const h2_usuario_nome = document.getElementById('usuario_nome')
    const img_avatar = document.getElementById('avatar')
    const description_rep = document.getElementById('usuario_description')

    const nome= dados.name
    const url = dados.avatar_url
    const description = dados.description

    h2_usuario_nome.innerText= nome
    description_rep.innerText = description
    img_avatar.src = url
}


carregar()
