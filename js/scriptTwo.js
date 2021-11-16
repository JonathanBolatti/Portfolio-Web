
let hideText_btnTwo = document.getElementById('hideText_btnTwo'); 
let hideTextTwo = document.getElementById('hideTextTwo'); 

hideText_btnTwo.addEventListener('click', toggleText); 


function toggleText(){
    hideTextTwo.classList.toggle('showTwo');  

    if(hideTextTwo.classList.contains('showTwo')){
        hideText_btnTwo.innerHTML = 'Leer Menos'
    }
    else{
        hideText_btnTwo.innerHTML = 'Leer Mas'
    }
}
