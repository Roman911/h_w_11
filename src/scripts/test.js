function modal (selector) {
   const rootElement = document.querySelector(selector);
   const button = rootElement.querySelector('.btn');
   const modal = rootElement.querySelector('.modal');

   function addClassActive () {
      modal.classList.add('active');
      }

   setTimeout(function() {
      modal.classList.remove('active');
   }, 5000);


   button.addEventListener('click', addClassActive);

   button.addEventListener('click', function () {

      if(addClassActive == true) {
         } else {
         addClassActive
      }
   });
}

export default modal;
