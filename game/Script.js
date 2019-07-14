enchant();

window.onload = function () {
	//window.onloadとはenchant.min.jsで定義されているのか？下記全てがコールバック関数として呼び出されるのは認識している。これはloadする関数。
	var game = new Game(400, 500);  				//画面サイズを400*500にする。（このサイズだとスマホでも快適なのでおススメ）

	//結果ツイート時にURLを貼るため、このゲームのURLをここに記入
	var url = "https://twitter.com/hothukurou";
	url = encodeURI(url); //きちんとURLがツイート画面に反映されるようにエンコードする
	/////////////////////////////////////////////////
	//ゲーム開始前に必要な画像・音を読み込む部分


	//クリック音読み込み
	var ClickSound = "click.wav";						//game.htmlからの相対パス
	game.preload([ClickSound]); 				//データを読み込んでおく

	// //背景の読み込み
	var HaikeiImg = "yakei.png";						//game.htmlからの相対パス
	game.preload([HaikeiImg]);					//データを読み込んでおく

	//ニュウドウカジカ係長読み込み
	var KajikaImg = "kajika4.png";						//game.htmlからの相対パス
	game.preload([KajikaImg]);					//データを読み込んでおく

	//リトライボタン読み込み
	var B_Retry = "Retry.png";						//game.htmlからの相対パス
	game.preload([B_Retry]);					//データを読み込んでおく

	//ツイートボタン読み込み
	// var B_Tweet = "Tweet.png";						//game.htmlからの相対パス
	// game.preload([B_Tweet]);					//データを読み込んでおく

	//読み込み終わり
	/////////////////////////////////////////////////


	game.onload = function () {					//ロードが終わった後にこの関数が呼び出されるので、この関数内にゲームのプログラムを書こう

		/////////////////////////////////////////////////
		//グローバル変数

		var Point = 0;									//ポイント
		var State = 0;								//現在のゲーム状態

		//グローバル変数終わり
		/////////////////////////////////////////////////



		var S_MAIN = new Scene();					//シーンのインスタンスを生成。Sceneクラスで作成
		game.pushScene(S_MAIN);  					//S_MAINシーンオブジェクトを画面に設置
		S_MAIN.backgroundColor = "rgba(0,150,200,1)"; 			//S_MAINシーンの背景は黒くした_色彩を変更_backgroundimageは設定できるのか
		//ポイント表示テキスト
		// S_MAIN.backgroundColor = "rgba(0,150,200,1)";
		var S_Text = new Label(); 					//テキストのインスタンス生成Labelクラス
		S_Text.font = "20px Meiryo";				//フォントはメイリオ 20px 変えたかったらググってくれ
		S_Text.color = 'rgba(255,255,255,1)';		//色　RGB+透明度　今回は白
		S_Text.width = 400;							//横幅指定　今回画面サイズ400pxなので、width:400pxだと折り返して二行目表示してくれる
		S_Text.moveTo(30, 30);						//移動位置指定
		S_MAIN.addChild(S_Text);					//S_MAINシーンにこの画像を埋め込む

		S_Text.text = "現在：" + Point;					//テキストに文字表示 Pointは変数なので、ここの数字が増える

		var bg = function( scene ) {
			var town = new Sprite(400, 500);
			town.image = game.assets[ 'yakei.png' ];
		}


		//係長ボタン
		var Kajika = new Sprite(166, 168);				//画像サイズをここに書く。使う予定の画像サイズはプロパティで見ておくこと
		//逆に画像を変えたければ上記を変更すればOK
		Kajika.moveTo(118, 100);						//係長ボタンの位置
		Kajika.image = game.assets[KajikaImg];			//読み込む画像の相対パスを指定。　事前にgame.preloadしてないと呼び出せない
		S_MAIN.addChild(Kajika);					//S_MAINにこの係長画像を貼り付ける

		Kajika.ontouchend = function () {				//係長ボタンをタッチした（タッチして離した）時にこの中の内容を実行する
			Point++;									//Pointを1増やす
			game.assets[ClickSound].clone().play();		//クリックの音を鳴らす。

			//クリックしたので係長画像のｘ位置を戻す
			this.y -= 300;							//this.xって何？と思った方、Kajikaの関数内で係長の座標を動かすときにはthisを使います。
			//所定の位置に戻したのちポイント数に応じて、Stateの値を変える

			//ポイントによって状態Stateを変更する
			if (Point < 3) {
				State = 1;
			} else if (Point < 6) {
				State = 2;
			} else if (Point < 9) {
				State = 3;
			} else if (Point < 12) {
				State = 4;
			} else if (Point < 15){
				State = 5;
			} else if (Point < 21){
				State = 6;
			} else {
				State = 7;
			}

		};
		//ここまで係長をワンクリックした時の処理。



		///////////////////////////////////////////////////
		//メインループ　ここに主要な処理をまとめて書こう
		game.onenterframe = function () {
			if (State == 0) { 							//State=0のとき、初期セット状態(Pointの状態を０にして)
				Kajika.x = 50;						//係長のｘ座標を指定
				Kajika.y = -100;						//係長のy座標を指定
				Point = 0;  							//point初期化
				State = 1;							//ゲームスタート状態に移行(ゲームスタートの前に初期化するのがポイント)
			}
			if (State == 1) {							//ゲームスタート　状態１
				Kajika.x += 1;
				Kajika.y += 5;
			}
			if (State == 2) {							//状態２（Point３以上なら）
				Kajika.y += 15;
			}
			if (State == 3) {							//状態３（Point６以上から）
				Kajika.y += 10;
				Kajika.x = 100 + Math.sin(Kajika.y / 100) * 200; // ｙ座標を振幅100pxのサイン波で移動(Sinは便利なので慣れとくといいよ！)
				//sin波は上下に売れ動きながら移動する設定だと思われる
			}
			if (State == 4) {							//状態４（Point９以上から）　4は初期セット状態（State=4）と移動状態（State=4.1)の2つに状態をわける
				Kajika.x = Math.random() * 100;			//ｙ座標の位置をランダムに決定
				State = 4.1;
			}
			if (State == 4.1) {							//状態４．１ 移動状態
				Kajika.y += 10;						//ただ移動します
			}
			if (State == 5) {							//状態５（Point１２以上から）　 ｙ軸が毎フレーム毎に変化する
				Kajika.y += 5;						//移動します。
				Kajika.x = Math.random() * 300;
						//ｙ座標の位置を枚フレーム毎にランダム決定
			}
			if (State == 6) {							//状態５（Point１２以上から）　 ｙ軸が毎フレーム毎に変化する
				Kajika.y += 10;						//移動します。
				Kajika.x = Math.random() * 300;
						//ｙ座標の位置を枚フレーム毎にランダム決定
			}
			if (State == 7) {							//状態５（Point１２以上から）　 ｙ軸が毎フレーム毎に変化する
				Kajika.y += 20;						//移動します。
				Kajika.x = Math.random() * 300;
						//ｙ座標の位置を枚フレーム毎にランダム決定
			}
			//現在のテキスト表示
			S_Text.text = "現在：" + Point; 				//Point変数が変化するので、毎フレームごとにPointの値を読み込んだ文章を表示する

			//ゲームオーバー判定
			if (Kajika.y >= 500) {						//画面端に係長画像が行ってしまったら
				game.popScene();					//S_MAINシーンを外す.このpopSceneとpushSceneでシーンの変更が出来る？
				game.pushScene(S_END);				//S_ENDシーンを読み込ませる

				//ゲームオーバー後のテキスト表示
				S_GameOverText.text = "GAMEOVER 記録：" + Point + "mはばたかせたよ!!";				//テキストに文字表示
			}

		};



		////////////////////////////////////////////////////////////////
		//結果画面
		S_END = new Scene();
		S_END.backgroundColor = "rgba(0,150,200,0.5)";

		//GAMEOVER
		var S_GameOverText = new Label(); 					//テキストはLabelクラス
		S_GameOverText.font = "20px Meiryo";				//フォントはメイリオ 20px 変えたかったらググってくれ
		S_GameOverText.color = 'rgba(255,255,255,1)';		//色　RGB+透明度　今回は白
		S_GameOverText.width = 400;							//横幅指定　今回画面サイズ400pxなので、width:400pxだと折り返して二行目表示してくれる
		S_GameOverText.moveTo(20, 30);						//移動位置指定
		S_END.addChild(S_GameOverText);						//S_ENDシーンにこの画像を埋め込む



		//リトライボタン
		var S_Retry = new Sprite(120, 60);				//画像サイズをここに書く。使う予定の画像サイズはプロパティで見ておくこと
		S_Retry.moveTo(150, 300);						//リトライボタンの位置
		S_Retry.image = game.assets[B_Retry];			//読み込む画像の相対パスを指定。　事前にgame.preloadしてないと呼び出せない
		S_END.addChild(S_Retry);					//S_ENDにこのリトライボタン画像を貼り付ける

		S_Retry.ontouchend = function () {				//S_Retryボタンをタッチした（タッチして離した）時にこの中の内容を実行する
			State = 0;
			game.popScene();						//S_ENDシーンを外す
			game.pushScene(S_MAIN);					//S_MAINシーンを入れる
		};

		//ツイートボタン
		var S_Tweet = new Sprite(120, 60);				//画像サイズをここに書く。使う予定の画像サイズはプロパティで見ておくこと
		S_Tweet.moveTo(230, 300);						//リトライボタンの位置
		S_Tweet.image = game.assets[B_Tweet];			//読み込む画像の相対パスを指定。　事前にgame.preloadしてないと呼び出せない
		S_END.addChild(S_Tweet);					//S_ENDにこのリトライボタン画像を貼り付ける

		S_Tweet.ontouchend = function () {				//S_Tweetボタンをタッチした（タッチして離した）時にこの中の内容を実行する
			//ツイートＡＰＩに送信

			window.open("http://twitter.com/intent/tweet?text=頑張って" + Point + "mはばたかせたよ!!&hashtags=ahoge&url=" + url); //ハッシュタグにahogeタグ付くようにした。
		};

	};
	game.start();
};
