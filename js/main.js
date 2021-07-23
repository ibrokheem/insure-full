var elToggler = document.querySelector('.site-header__toggler');
var elModal = document.querySelector('.site-nav');

elToggler.addEventListener('click', function(){
  elModal.classList.toggle('site-nav--mobile');
});