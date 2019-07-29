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
window.onload = () => {
   let today = new Date();
   let welcomeWord = (today.getFullYear() + "年" + (today.getMonth()+1) + "月" + today.getDate() +"日"+ today.getHours() + "時" +today.getMinutes()+ "分" + today.getSeconds() + "秒のお客様です");
   let nowHour = today.getHours();
   let nowMinute = today.getMinutes();
   console.log(welcomeWord);
   console.log(nowHour);
   if ( nowHour > 4 && nowHour <= 10 ) {
     $('#people').html('おはよう！ただいまの時刻は' + nowHour + '時' + nowMinute + '分だよ。<br>今日も頑張ろう！');
     $('#people').fadeIn(1500);
   } else if( nowHour > 10 && nowHour <= 17 ) {
     $('#people').html('こんにちは！ただいまの時刻は' + nowHour + '時' + nowMinute + '分だね。<br>ちゃんと休憩取ってる？');
     $('#people').fadeIn(1500);
   } else if( nowHour > 17 && nowHour <= 23 ){
     $('#people').html('こんばんは！ただいまの時刻は' + nowHour + '時' + nowMinute + '分だよ〜。<br>今日もお疲れ！');
     $('#people').fadeIn(1500);
   }else{
     $('#people').html( 'ふにゃふにゃ..ただいまの時刻は深夜' + nowHour + '時' + nowMinute + '分...<br>夜更かししすぎないでね...ふにゃふにゃ');
     $('#people').fadeIn(1500);
   }
}
// イベントの基本形
// $().イベント名(function() {
  //イベント時に実行したい処理
// });
// 上記を踏まえて下記クリックイベントの処理の書き方
$('#people').click(function() {
  $('#people').html('ごゆっくりどうぞ').css('background-color','rgba(255,215,0,0.5)').slideUp(3000);
});
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
