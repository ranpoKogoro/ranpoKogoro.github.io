// jQueryの基本形
// $(function () {
// $('セレクタ').メソッド(引数);
// });
// 例えば下記だとpタグを1.5秒で消し、1.5秒で表示させる
// セレクタ(選択したものを)メソッド(どうするか)

$(function() {

$('#people').slideUp(3000);
$('.gameP').fadeOut(1500);
$('.gameP').fadeIn(1500);
$('.gameP2').fadeOut(1500);
$('.gameP2').fadeIn(1500);
$('.gameP3').fadeOut(1500);
$('.gameP3').fadeIn(1500);
$('.gameP4').fadeOut(1500);
$('.gameP4').fadeIn(1500);
$('p').fadeOut(1500);
$('p').fadeIn(1500);
// $('body1').fadeOut(1500);もともとcssでアニメーション設定したものは使えない？


});
