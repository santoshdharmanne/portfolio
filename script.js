
// menu-buttuon--------------
$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});
$('.overlay-menu a').click(function() {
  $('.button_container').toggleClass('active');
  $('#overlay').toggleClass('open');
  return false;
});

// text-animation---------
const animation = document.querySelectorAll("#text-animation path");
console.log(animation);

for(let i = 0; i<animation.length; i++){
  console.log(`letter ${i}  ${animation[i].getTotalLength()}`);
}



$(document).ready(function() {
	$('#my-work').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});