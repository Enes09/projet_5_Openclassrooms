
$(".burgerButton").click(function (){

	//$('.menuLink').fadeToggle();

  if( $('.menuLink').css('display') === 'none' ){

    $('.menuLink').fadeIn();
    $('.menuLink').css('display', 'inline-flex');
    setTimeout(function(){ 

      $('.menuLink').fadeOut();
      //$('.menuLink').css('display', 'none'); 

  }, 3000);
    
  }
  else if ($('.menuLink').css('display') === 'inline-flex') {
    $('.menuLink').fadeOut();
    //$('.menuLink').css('display', 'none');
  }

});



$('#stripeBtn5').click(function (){
	$('#donationInput').attr('value','5,00');
  $('#donationInput').html('5,00');

});
$('#stripeBtn10').click(function (){
	$('#donationInput').attr('value','10,00');
  $('#donationInput').html('10,00');

});

$('#stripeBtn20').click(function (){
	$('#donationInput').attr('value','20,00');
  $('#donationInput').html('20,00');

});

$('#stripeBtn50').click(function (){
	$('#donationInput').attr('value','50,00');
  $('#donationInput').html('50,00');

});


jQuery(function () {

    $("#donationInput").keyup(function () {
        var VAL = this.value;

        var inputStripe = new RegExp('^[0-9]{1,3}\,[0-9]{2}$');

        if (!inputStripe.test(VAL)) {
            $('#stripeError').css('display', 'inline');
            $('#submitStripe').css('display', 'none');
        }
        else{
            $('#stripeError').css('display', 'none');
            $('#submitStripe').css('display', 'block');

        }
    });
});


$(function() { 

	var windowWidth = $(window).width();

	if(windowWidth<760){
		
		$('.logout').html('<i class="fas fa-sign-out-alt"></i>');
		$('.login').html('<i class="fas fa-sign-in-alt"></i>');
		$('.register').html('<i class="far fa-clipboard"></i>');
		$('.register').css('font-size', '1.2em');



		$('.show').html('<i class="far fa-eye"></i>');
		
		$('.deleteTd').css('display', 'none');
		$('.contactTd').css('display', 'none');

		$('textarea.contactUserTextarea').attr('cols',35);
		$('textarea.contactSiteArea').attr('cols',35);

	}

var center = 1;

  var slide1 = $('#slide1');
  var slide2 = $('#slide2');
  var slide3 = $('#slide3');

function slideToRight (){

  switch (center)
    {
      case 1:
              slide1.fadeOut('slow');
              slide2.fadeIn('slow');
              center = 2;
              break;

      case 2: 
              slide2.fadeOut('slow');
              slide3.fadeIn('slow');
              center = 3;
              break;

      case 3:
              slide3.fadeOut('slow');
              slide1.fadeIn('slow');
              center = 1;
              break;

      default:
              console.log('slide\'s center image\'s not found');
    }     

}

function slideToLeft (){

  switch (center)
    {
      case 1:
              slide2.fadeOut('slow');
              slide1.fadeOut('slow');
              slide3.fadeIn('slow');
              center = 3;
              break;

      case 2: 
              slide2.fadeOut('slow');
              slide1.fadeIn('slow');
              center = 1;
              break;

      case 3:
              slide3.fadeOut('slow');
              slide2.fadeIn('slow ');
              center = 2;
              break;

      default:
              console.log('slide\'s center image\'s not found');
    }     

}

var slideIntervall = setInterval(function(){ slideToRight(); }, 6000);

//slide to right

$('#arrowDivRight').click(function () {
  clearInterval(slideIntervall);
  slideToRight();
  slideIntervall = setInterval(function(){ slideToRight(); }, 6000);
});

jQuery( window ).on('swiperight', function (event) { 
  clearInterval(slideIntervall);
  slideToRight();
  slideIntervall = setInterval(function(){ slideToRight(); }, 6000);
 });


//slide to left

$('#arrowDivLeft').click(function () {
  clearInterval(slideIntervall);
  slideToLeft();
  slideIntervall = setInterval(function(){ slideToRight(); }, 6000);
});

jQuery( window ).on('swipeleft', function (event) { 
  clearInterval(slideIntervall);
  slideToLeft();
  slideIntervall = setInterval(function(){ slideToRight(); }, 6000);
 });

//on commence ici à mettre en place stripe

// Create a Stripe client.
var stripe = Stripe('pk_test_Lole4koYMcOc24v8lzChgIaP');

// Create an instance of Elements.
var elements = stripe.elements();

// Custom styling can be passed to options when creating an Element.
// (Note that this demo uses a wider set of styles than the guide below.)
var style = {
  base: {
    color: '#32325d',
    lineHeight: '18px',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};

// Create an instance of the card Element.
var card = elements.create('card', {style: style});

// Add an instance of the card Element into the `card-element` <div>.
card.mount('#card-element');

// Handle real-time validation errors from the card Element.
card.addEventListener('change', function(event) {
  var displayError = document.getElementById('card-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
});

// Handle form submission.
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  stripe.createToken(card).then(function(result) {
    if (result.error) {
      // Inform the user if there was an error.
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {
      // Send the token to your server.
      stripeTokenHandler(result.token);
    }
  });
});

// Submit the form with the token ID.
function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  var form = document.getElementById('payment-form');
  var hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);

  // Submit the form
  form.submit();
}




});