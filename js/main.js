var form = document.getElementById("form");
// var status = document.getElementById("status")
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
      form.reset()
    status.classList.add('success'); 
    status.innerHTML = "Gracias! te contáctare a la brevedad";
    
  }).catch(error => {
    status.classList.add('error'); 
    status.innerHTML = "Oops! Parece que ha ocurrido un error!"
  });
}
form.addEventListener("submit", handleSubmit)




// const $form = document.querySelector('#form')

// $form.addEventListener('submit', handleSubmit)

//  async function handleSubmit(event){
//     event.preventDefault()
//     const form = new FormData(this)
//    const response = await fetch(this.action,{
//         method: this.method,
//         body: form,
//         headers: {
//             'Accept': 'application/json'
//         }
//     }) 
//     if (response.ok){
//         this.reset()
//         alert('Gracias por escribirme, me pondre en contacto contigo a la brevedad...')
//     }
// }