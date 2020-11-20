const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')
// const maxScreen = document.querySelector('.maximize-modal')


for (let card of cards) {

      const cardId = card.getAttribute("id")

      card.addEventListener("click", function(){
      modalOverlay.classList.add('active')
      modalOverlay.querySelector("iframe").src = `https://www.youtube.com.br/${cardId}`
    })

document.querySelector('.maximize-modal').addEventListener("click", function() {
modal.classList.add('modal-fullscreen')   })

}

    document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
    modal.classList.remove('modal-fullscreen')
})


      
//       document.querySelector('.maximize-modal').addEventListener("click", function() {
//       modal.classList.contains('modal-fullscreen')
//       modal.classList.remove('modal-fullscreen')
//       modal.classList.add('modal-fullscreen')
      

//  })

//       maxScreen.addEventListener("click", function(){
//       if (modal.classList.contains('modal-fullscreen')){
//         modal.classList.remove('modal-fullscreen')

//       }

//       modal.classList.add('modal-fullscreen')
//   })

//     document.querySelector('.maximize-modal').addEventListener("click", function() {
// })
// if (modal.classList.contains('modal-fullscreen') !=true ) {
//     document.querySelector('.maximize-modal').addEventListener("click", function() {
//     modal.classList.add('modal-fullscreen')
//     })} else {
        
//         modal.classList.remove('modal-fullscreen')  
//     }





// modal.classList.contains('modal-fullscreen')