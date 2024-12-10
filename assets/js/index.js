const nav = document.querySelector('nav')
const botaoMenu = nav.querySelector('#menu')
const opcoesMenu = nav.querySelector('#opcoes')


botaoMenu.addEventListener('click', () => {
    if (botaoMenu.classList.contains('ativo')) botaoMenu.classList.remove('ativo')
    else botaoMenu.classList.add('ativo')
    if (opcoesMenu.classList.contains('mostrar')) opcoesMenu.classList.remove('mostrar')
    else opcoesMenu.classList.add('mostrar')
})

document.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    const section2 = document.querySelector("#section2");
    const section2Top = section2.getBoundingClientRect().top;
    
    if (section2Top <= 50) { // Quando a seção 2 estiver quase visível
      nav.classList.add("nav-glass");
    } else {
      nav.classList.remove("nav-glass");
    }
  });