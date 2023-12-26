$(document).ready(function() {
    var $galleryContainer = $('.gallery').isotope({
      itemSelector: '.item',
      layoutMode: 'fitRows'
    });

    $('.button-group .button').on('click', function() {
        
      var value = $(this).attr('data-filter');
      $galleryContainer.isotope({
        filter: value
      });
    });
  });
function sendEmail(){
    Email.send({
    SecureToken : "fdebcd21-074f-499f-9fce-370655767e6a ",
    To : document.getElementById('email').value,
    From : "abdussami2307e@aptechgdn.net",
    Subject : document.getElementById('subject').value,
    Body : "NAME : "+document.getElementById('tname').value+'<br><br>'+document.getElementById('messagebox').value
}).then(
  message => alert(message)
);
}
function hamburger() {
  var links = document.getElementsByClassName('links-tag-a');
  
  // Check if there are elements with the class name 'links-tag-a'
  if (links.length > 0) {
    for (var i = 0; i < links.length; i++) {
      links[i].classList.toggle('links-tag-a-toggle');
    }
  }

  var headerIcon = document.getElementsByClassName('header-icons')[0];

  // Check if the element with class name 'header-icons' exists
  if (headerIcon) {
    headerIcon.classList.toggle('header-icons-toggle');
 
  }
  var main= document.getElementsByTagName('main')[0];
  if(main.style.display=='none'){
    main.style.display='block'
  }
  else{
    main.style.display='none'
  }
}

