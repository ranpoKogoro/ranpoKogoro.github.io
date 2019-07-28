// jQueryの基本形
// $(function () {
// $('セレクタ').メソッド(引数);
// });
// 例えば下記だとpタグを1.5秒で消し、1.5秒で表示させる
// セレクタ(選択したものを)メソッド(どうするか)

$(function() {

$('.gameP').fadeIn(1500);
$('.gameP2').fadeIn(1500);
$('.gameP3').fadeIn(1500);
$('.gameP4').fadeIn(1500);
// $('.body1').fadeOut(1500);
// $('.body1').fadeIn(1500);
//('slow')という引数の表記も可能
window.onload = () => {
   let today = new Date();
   let welcomeWord = (today.getFullYear() + "年" + (today.getMonth()+1) + "月" + today.getDate() +"日"+ today.getHours() + "時" +today.getMinutes()+ "分" + today.getSeconds() + "秒のお客様です");
   let nowHour = today.getHours();
   console.log(welcomeWord);
   console.log(nowHour);
   if ( nowHour > 4 && nowHour <= 10 ) {
     $('#people').html('おはよう！　' + nowHour + '時だね。今日も頑張ろう！');
     $('#people').fadeIn(1500);
   } else if( nowHour > 10 && nowHour <= 17 ) {
     $('#people').html('こんにちは！　' + nowHour + '時だね。ちゃんと休憩取ってる？');
     $('#people').fadeIn(1500);
   } else if( nowHour > 17 && nowHour <= 23 ){
     $('#people').html('こんばんは！　' + nowHour + 'だね。今日もお疲れ様！');
     $('#people').fadeIn(1500);
   }else{
     $('#people').html( '深夜' + nowHour + '時です。夜更かししすぎないでね...');
     $('#people').fadeIn(1500);
   }
}
// イベントの基本形
// $().イベント名(function() {
  //イベント時に実行したい処理
// });
// 上記を踏まえて下記クリックイベントの処理の書き方
$('.readme').click(function() {
  $('.readme').hide();
  $('.readmeClose').show();
  $('.Sentence').fadeIn('slow');
});
$('.readmeClose').click(function() {
  $('.readmeClose').hide();
  $('.Sentence').hide();
  $('.readme').show();
});
});
