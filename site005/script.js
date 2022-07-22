//menu fazer o menu mexer 
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');//queryselector=== vai selecionar qualquer tag que eu desejar, exemplo :(.mobile-menu) ele selecionou uma class com o nome mobile-menu  e jogou dentro de uma variavel chamada menuMobile
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src='imagens/menu_FILL0_wght400_GRAD0_opsz48.svg'
        // usando classlist.contains ele vai verificar quuantos open tem na variavel  menumobile caso tenha alguma class com o nome 'open' ele ativa classList.remove para remover a class 'open', assim desativando o menu 
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src='imagens/close_FILL0_wght400_GRAD0_opsz48.svg'
        // e se caso não tiver nem uma class com o nome 'open' ele usar o classList.add para adicionar a class e fazer o conteudo do menu aparecer 

        // ja o querySelector selecionou a class .icon que é uma (img) para que cada vez que a função menushow for chamada ele ira adicionar uma imagem que no caso se refere ao icone de menu e o de fecha o menu
    }


}
//fazer cada cidade do mapa mostra sua img com detalhes sobre ele 


function bronze(){
     document.querySelector('#rank-patente'). src='imagens/img-patente/bronze-tiers-where-we-start-each-season-1761.jpg'

}
function prata(){
    document.querySelector('#rank-patente'). src='imagens/img-patente/images (15).jpeg'

}
function ouro(){
    document.querySelector('#rank-patente'). src='imagens/img-patente/images (16).jpeg'

}
function platina(){
    document.querySelector('#rank-patente'). src='imagens/img-patente/images (17).jpeg'

}
function dima(){
    document.querySelector('#rank-patente'). src='imagens/img-patente/images (18).jpeg'

}

function mestre(){
    document.querySelector('#rank-patente'). src='imagens/img-patente/heroic-rank-the-highest-category-in-free-fire-1761.jpg'

}
function elite(){
    document.querySelector('#rank-patente'). src='imagens/elite.jpg'

}
function desafiante(){
    document.querySelector('#rank-patente'). src='imagens/img-patente/grand-master-rank-only-for-the-best-300-players-in-the-world-1761.jpg'

}

//mostra o patente de cada rank 