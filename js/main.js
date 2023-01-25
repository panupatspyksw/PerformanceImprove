document.addEventListener('DOMContentLoaded', () => {
  const burget_icon = document.querySelector('.burger_icon')
  burget_icon.addEventListener('click', () => {})
  burget_icon.addEventListener('click', () => {
    document.querySelector('header nav').classList.toggle('active')
  })

  $('.hero').parallax('50%', 0.3),
    $('html').niceScroll({
      scrollspeed: 50,
      autohidemode: !1,
      cursorwidth: 8,
      cursorborderradius: 8,
      cursorborder: '0',
      background: 'rgba(48, 48, 48, .4)',
      cursorcolor: '#1f1f1f',
      zindex: 999,
    }),
    $('#tslider').owlCarousel({
      items: 1,
      navigation: !0,
      pagination: !1,
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: !0,
      responsive: !0,
      autoPlay: !0,
      transitionStyle: 'fade',
    }),
    $('#submit_form').submit(function () {
      $('#mc_submit').attr('disabled', 'disabled'), e('icon', 'loading')
    })
  $('#play_video').click(function (e) {
    e.preventDefault()
    var i = $(this).data('video')
    ;(i =
      '<iframe src="' +
      i +
      '" width="500" height="208" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),
      $('.about_video').append(i).fadeIn(200)
  }),
    $('.close_video').click(function (e) {
      e.preventDefault(),
        $('.about_video').fadeOut(200, function () {
          $('iframe', this).remove()
        })
    })
})
