// AUTO slider

$(document).ready(function () {
  function bannerSwitcher() {
    const next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
  }

  // Start the slider
  let bannerTimer = setInterval(bannerSwitcher, 5000);

  // Reset timer on manual navigation
  $('nav .controls label').click(function () {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000);
  });
});
