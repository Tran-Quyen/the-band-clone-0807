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

