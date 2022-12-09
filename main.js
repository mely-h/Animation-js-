const h1 = document.querySelector("#deux") 
const flocList = document.querySelectorAll(".flocon li img") ; 
const body = document.querySelector("body") 
const bonhommee = document.querySelector(".bonhomme") ;




function flocTombent(event2)  { 
    /// faire tomber TOUT les flocons
    flocList.forEach((floc) => {  
        console.log(floc)
        
        floc.style.paddingTop = "100vh"   
        
      })

} 

 h1.addEventListener("mouseover" , change)
 function change () {
    h1.classList.toggle("ecriture") 
    h1.classList.toggle("ecriture2")
  }

 body.addEventListener('mouseover', flocTombent )



  function bonhommesaute(event){
   
        bonhommee.style.top ="5% !important"
        bonhommee.style.bottom="5%!important"
       
        
      }
     
  
 
  bonhommee.addEventListener("click",bonhommesaute)





