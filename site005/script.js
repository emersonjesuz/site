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
     let patente1=document.querySelector('.img-patente');

     if(patente1.classList.contains('ptt1')){
        patente1.classList.remove('ptt1')
        alert('você ja esta vendo esse patente, escolha outro!')
     }else{
        patente1.classList.add('ptt1')

     
        patente1.classList.remove('ptt2')
        patente1.classList.remove('ptt3')
        patente1.classList.remove('ptt4')
        patente1.classList.remove('ptt5')
        patente1.classList.remove('ptt6')
        patente1.classList.remove('ptt7')
        patente1.classList.remove('ptt8')
     }

}
function prata(){
    document.querySelector('#rank-patente'). src='imagens/img-patente/images (15).jpeg'
    let patente2 = document.querySelector('.img-patente')

    if(patente2.classList.contains('ptt2')){
        patente2.classList.remove('ptt2')
        alert('você ja esta vendo esse patente, escolha outro!')
    }else{
        patente2.classList.add('ptt2')

        patente2.classList.remove('ptt1')
        patente2.classList.remove('ptt3')
        patente2.classList.remove('ptt4')
        patente2.classList.remove('ptt5')
        patente2.classList.remove('ptt6')
        patente2.classList.remove('ptt7')
        patente2.classList.remove('ptt8')
    }
    
}
function ouro(){
    document.querySelector('#rank-patente'). src='imagens/img-patente/images (16).jpeg'
    let patente3 = document.querySelector('.img-patente')

    if(patente3.classList.contains('ptt3')){
        patente3.classList.remove('ptt3')
        alert('você ja esta vendo esse patente, escolha outro')
    }
    else{
        patente3.classList.add('ptt3')

        patente3.classList.remove('ptt1')
        patente3.classList.remove('ptt2')
        patente3.classList.remove('ptt4')
        patente3.classList.remove('ptt5')
        patente3.classList.remove('ptt6')
        patente3.classList.remove('ptt7')
        patente3.classList.remove('ptt8')
    }


}
function platina(){
    document.querySelector('#rank-patente'). src='imagens/img-patente/images (17).jpeg'
    let patente4 = document.querySelector('.img-patente')

    if(patente4.classList.contains('ptt4')){
        patente4.classList.remove('ptt4')
        alert('você ja esta vendo esse patente, escolha outro')
    }
    else{
        patente4.classList.add('ptt4')

        patente4.classList.remove('ptt1')
        patente4.classList.remove('ptt2')
        patente4.classList.remove('ptt3')
        patente4.classList.remove('ptt5')
        patente4.classList.remove('ptt6')
        patente4.classList.remove('ptt7')
        patente4.classList.remove('ptt8')
    }

}
function dima(){
    document.querySelector('#rank-patente'). src='imagens/img-patente/images (18).jpeg'
    let patente5 = document.querySelector('.img-patente')

    if(patente5.classList.contains('ptt5')){
        patente5.classList.remove('ptt5')
        alert('você ja esta vendo esse patente, escolha outro')
    }
    else{
        patente5.classList.add('ptt5')

        patente5.classList.remove('ptt1')
        patente5.classList.remove('ptt2')
        patente5.classList.remove('ptt3')
        patente5.classList.remove('ptt4')
        patente5.classList.remove('ptt6')
        patente5.classList.remove('ptt7')
        patente5.classList.remove('ptt8')
    }

}

function mestre(){
    document.querySelector('#rank-patente'). src='imagens/img-patente/heroic-rank-the-highest-category-in-free-fire-1761.jpg'

    let patente6 = document.querySelector('.img-patente')

    if(patente6.classList.contains('ptt6')){
        patente6.classList.remove('ptt6')
        alert('você ja esta vendo esse patente, escolha outro')
    }
    else{
        patente6.classList.add('ptt6')

        patente6.classList.remove('ptt1')
        patente6.classList.remove('ptt2')
        patente6.classList.remove('ptt3')
        patente6.classList.remove('ptt4')
        patente6.classList.remove('ptt5')
        patente6.classList.remove('ptt7')
        patente6.classList.remove('ptt8')
    }
}
function elite(){
    document.querySelector('#rank-patente'). src='imagens/elite.jpg'
    let patente7 = document.querySelector('.img-patente')

    if(patente7.classList.contains('ptt7')){
        patente7.classList.remove('ptt7')
        alert('você ja esta vendo esse patente, escolha outro')
    }
    else{
        patente7.classList.add('ptt7')

        patente7.classList.remove('ptt1')
        patente7.classList.remove('ptt2')
        patente7.classList.remove('ptt3')
        patente7.classList.remove('ptt4')
        patente7.classList.remove('ptt5')
        patente7.classList.remove('ptt6')
        patente7.classList.remove('ptt8')
    }

}
function desafiante(){
    document.querySelector('#rank-patente'). src='imagens/img-patente/grand-master-rank-only-for-the-best-300-players-in-the-world-1761.jpg'

    let patente8 = document.querySelector('.img-patente')

    if(patente8.classList.contains('ptt8')){
        patente8.classList.remove('ptt8')
        alert('você ja esta vendo esse patente, escolha outro')
    }
    else{
        patente8.classList.add('ptt8')

        patente8.classList.remove('ptt1')
        patente8.classList.remove('ptt2')
        patente8.classList.remove('ptt3')
        patente8.classList.remove('ptt4')
        patente8.classList.remove('ptt5')
        patente8.classList.remove('ptt6')
        patente8.classList.remove('ptt7')
      
    }
}






//
function menuMapasB(){
    let menuMapas=document.querySelector('.colunas-A');

    if(menuMapas.classList.contains('aparecer')){
        menuMapas.classList.remove('aparecer');
        document.querySelector('.tag'). src='imagens/arrow_drop_up_FILL0_wght400_GRAD-25_opsz48.png'
    }else{
        menuMapas.classList.add('aparecer');
        document.querySelector('.tag').src='imagens/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg'
    }
}

function menuMapasP(){
    let menuMpasPu=document.querySelector('.colunas-A2')

    if(menuMpasPu.classList.contains('aparecer2')){
        menuMpasPu.classList.remove('aparecer2');
        document.querySelector('.tag2').src='imagens/arrow_drop_up_FILL0_wght400_GRAD-25_opsz48.png'
        
    }else{
        menuMpasPu.classList.add('aparecer2');
        document.querySelector('.tag2').src='imagens/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg'
    }
}

function menuMapasK(){
    let menuMpasKA=document.querySelector('.colunas-A3')

    if(menuMpasKA.classList.contains('aparecer3')){
        menuMpasKA.classList.remove('aparecer3');
        document.querySelector('.tag3').src='imagens/arrow_drop_up_FILL0_wght400_GRAD-25_opsz48.png'
        
    }else{
        menuMpasKA.classList.add('aparecer3');
        document.querySelector('.tag3').src='imagens/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg'
    }
}

function menuMapasA(){
    let menuMpasKA=document.querySelector('.colunas-A4')

    if(menuMpasKA.classList.contains('aparecer4')){
        menuMpasKA.classList.remove('aparecer4');
        document.querySelector('.tag4').src='imagens/arrow_drop_up_FILL0_wght400_GRAD-25_opsz48.png'
        
    }else{
        menuMpasKA.classList.add('aparecer4');
        document.querySelector('.tag4').src='imagens/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg'
    }
}
//mostra o patente de cada rank 