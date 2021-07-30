// $(document).ready(function(){
//   let x = document.getElementsByClassName('nav-hidden');  
//   let y = document.getElementsByClassName('nav-mobile');
//   if(x){
//     $("#slide_nav_button").click(function(){    
//       $('.nav-hidden').addClass('nav-mobile');
//       $('.nav-mobile').removeClass('nav-hidden');
//     });
//   }else if(y){
//     $("#slide_nav_button").click(function(){    
//       $('.nav-mobile').addClass('nav-hidden');
//       $('.nav-hidden').removeClass('nav-mobile');
//     });
//   }     

  
//   });


  const mostrar = ()=>{
    let x = document.getElementsByClassName('nav-hidden');      
  if(x){
    
      $('.nav-hidden').addClass('nav-mobile');
      $('.nav-mobile').removeClass('nav-hidden');
      $('.nav__menu__burger__icon__mostrar').addClass('nav__menu__burger__icon__mostrar_nomostrar');
      $('.nav__menu__burger__icon__mostrar_nomostrar').removeClass('nav__menu__burger__icon__mostrar');
      $('.nav__menu__burger__icon__ocultar__nomostrar').addClass('nav__menu__burger__icon__ocultar');
      $('.nav__menu__burger__icon__ocultar').removeClass('nav__menu__burger__icon__ocultar__nomostrar');
  }

  }
  const ocultar =()=>{    
    let y = document.getElementsByClassName('nav-mobile');
    if(y){    
        $('.nav-mobile').addClass('nav-hidden');
        $('.nav-hidden').removeClass('nav-mobile');        
        $('.nav__menu__burger__icon__ocultar').addClass('nav__menu__burger__icon__ocultar__nomostrar');
        $('.nav__menu__burger__icon__ocultar__nomostrar').removeClass('nav__menu__burger__icon__ocultar');
        $('.nav__menu__burger__icon__mostrar_nomostrar').addClass('nav__menu__burger__icon__mostrar');
        $('.nav__menu__burger__icon__mostrar').removeClass('nav__menu__burger__icon__mostrar_nomostrar');
        
        
      
    } 

  }