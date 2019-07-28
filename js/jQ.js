// jQueryの基本形
// $(function () {
// $('セレクタ').メソッド(引数);
// });
// 例えば下記だとpタグを1.5秒で消し、1.5秒で表示させる
// セレクタ(選択したものを)メソッド(どうするか)

$(function() {

$('#people').slideUp(3000);
$('.gameP').fadeIn(1500);
$('.gameP2').fadeIn(1500);
$('.gameP3').fadeIn(1500);
$('.gameP4').fadeIn(1500);
// $('body1').fadeOut(1500);もともとcssでアニメーション設定したものは使えない？
//('slow')という引数の表記も可能

// イベントの基本形
// $().イベント名(function() {
  //イベント時に実行したい処理
// });
// 上記を踏まえて下記クリックイベントの処理の書き方
$('.readme').click(function() {
  $('.Sentence').fadeIn('slow');
});
});
