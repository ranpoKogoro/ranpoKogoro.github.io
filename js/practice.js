
$(function(){

  $('#line1').fadeIn('slow');
  $('#line2').fadeIn('slow');
  $('#murder').fadeIn('slow');
  $('#line1').fadeOut('slow');
  $('#murder').fadeOut('slow');
  $('#line2').fadeOut('slow');
  $('#line1').fadeIn('slow');
  $('#line2').fadeIn('slow');
  $('#murder').fadeIn('slow');

  $('#hide-text').click(() => {
    $('#zetubo').slideUp('slow');
  });

  $('#big-text').click(() => {
    $('#hope').css('color','#F0DDC3');
    $('#hope').css('font-size','40px');
    $('#hope').text('HOPE');
  });

//thisを用いる場合はfunctionじゃなきゃダメかも??letには出来る...
let $book = $('.book');
$book.click(function() {
$(this).css('color','royalblue').html('●▲■●▲■●▲■●▲■')
.fadeOut('slow').fadeIn('slow');
});
  $('#clear').click(() => {
    $('#change').html('<a href="index.html">New</a>');
  });

$('#hotOcha').hover(
  function() {
  $('#kieru').fadeIn('1000');
  },
  function() {
  $('#kieru').fadeOut('1000');
  }
);
$('.waku').click(() => {
  $('#nakami').children('a').fadeOut();
});

  // $('#hoge p').fadeOut(2000);
  // $('#hoge p').css('margin', '10px');
  // $('.free').css('color', 'red');
  // 上記freeのようにクラスも使用出来るが、処理が遅くなるため
  // なるべくidを使用する。
  // $('#light img').slideUp(2500);


});
