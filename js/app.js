function showDetails(descricao, imagemUrl) {
    // Atualiza o conteúdo do modal com a descrição do prato
    document.getElementById('descricaoModal').innerText = descricao;
    
    // Atualiza a imagem do prato no modal
    document.getElementById('imgModal').src = imagemUrl;
    
    // Exibe o modal
    var modal = new bootstrap.Modal(document.getElementById('modalDescricao'));
    modal.show();
}



function getCategorySelect(){
    const select = document.querySelector("select")
    if(select.value === 'bebidas'){
        window.location.href = 'https://rafaelmagnoc.github.io/kabana-caju-cardapio-bebidas/'
    }
    else{
       window.location.href = 'https://rafaelmagnoc.github.io/kabana-caju-cardapio/'
    }
}