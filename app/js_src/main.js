/*jQuery(document).ready(function () {
  "use script";
 
  var btn = $("._callback");
  btn.on("click", function(){
    alert("Its work");
    prompt();
  });
});*/
/*modal window*/
const btnModal = document.querySelector('._modalBtn');
const modalWindow = document.querySelector('._modalWindow');
const modalClose = document.querySelector('._closeModal');
btnModal.addEventListener('click', function(){
    modalWindow.classList.add('modal__open');
});
modalClose.addEventListener('click', function(){
  modalWindow.classList.remove('modal__open');
});
document.querySelector('.modal__mask').addEventListener('click', function(){
  modalWindow.classList.remove('modal__open');
});
document.querySelector('.modal__mask--body').addEventListener('click', function(event){
  event.stopPropagation();
});