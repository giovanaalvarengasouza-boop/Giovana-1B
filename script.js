const botoes= document .querySelectorAll("button"); 

botoes.forEach(fuction(botao) { 
        let curtiu = false;
        botao.addEventlistener(click", botaoclicado);
        function botaaoClicado() {
          console.log ("fui criado');
          let texto= botao. querySelector("span"); 
            if (curtiu=== false ) {
            texto.textContent++;
            curtiu = true; 
            } else{ 
            texto.textContent--;
            curtiu = false; 
            }
        } 
}) 
