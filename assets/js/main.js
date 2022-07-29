// Toggle menu button
var toggleBtnList = $('[data-toggle-btn]');

$(toggleBtnList).each(function () {
  var menu = $(`[data-toggle-menu="${this.dataset.toggleBtn}"]`)[0];
  $(menu).css({
    display: 'none',
  });

  this.onclick = function () {
    if (menu.style.display === 'none') {
      $(menu).css({
        display: 'block',
      });
    } else {
      $(menu).css({
        display: 'none',
      });
    }

    if (this.dataset.toggleBtn === 'nav-mobile-list') {
      var subnavMobileList = $('[data-toggle-menu^="subnav"]');
      if (subnavMobileList) {
        $(subnavMobileList).each(function () {
          $(this).css({
            display: 'none',
          });
        });
      }
    }
  };
});

// Scroll smooth
$(document).ready(function () {
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

// Automation led color link
var authorLink = $('.footer-author > a')[0];
var i = 0;
setInterval(() => {
  $(authorLink).css({
    color: 'red',
    filter: `hue-rotate(${i}deg)`,
  });
  if (i === 360) i = 0;
  i += 20;
}, 1000);

