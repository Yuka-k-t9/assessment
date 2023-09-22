'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');


assessmentButton.onclick = () => {
  const userName = userNameInput.value;
  if(userName.length >= 1){
    //診断結果の文字列
  const result = assessment(userName);
  resultDivision.innerHTML = '<h3>診断結果</h3><p>' + result + '</p>';
  tweetDivision.innerHTML = `<a 
  id = "tweetbutton"
  href="https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw" 
  class="twitter-hashtag-button" 
  data-text="` + result +`" 
  data-show-count="false">Tweet #あなたのいいところ</a>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
  }

  if (userName.length === 0) {
    // 名前が空の時は処理を終了する
    return;
  }

  

  
  // TODO ツイートエリアの作成
  tweetDivision.innerText = '';
  //Tweet ボタンをプログラムから扱ってみよう
  //ツイートエリアへ a タグを入れるコードを追加します。
  const anchor = document.createElement('a');
  const hrefValue =
    'https://twitter.com/intent/tweet?button_hashtag= ' + encodeURIComponent('あなたのいいところ') + ' &ref_src=twsrc%5Etfw';

  anchor.setAttribute('href', hrefValue);
  anchor.setAttribute('class', 'twitter-hashtag-button');
  anchor.setAttribute('data-text', result);
  //ツイートの文章に診断結果をのせてみよう
  anchor.innerText = 'Tweet #あなたのいいところ';

  tweetDivision.appendChild(anchor);

  //widgets.js スクリプトを設定し実行するコードを追加します。
  const script = document.createElement('script');
  script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
  tweetDivision.appendChild(script);
}; 



const answers = [
  '###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
  '###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
  '###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
  '###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
  '###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
  '###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
  '###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
  '###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
  '###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。',
  '###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
  '###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
  '###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
  '###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
  '###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
  '###userName###のいいところはその全てです。ありのままの###userName###自身がいいところなのです。',
  '###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。',
];


/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @returns {string} 診断結果
 */


function assessment(userName) {
  // TODO 診断処理を実装する
  // 全文字のコード番号を取得してそれを足し合わせる
  let sumOfCharCode = 0;

  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode = sumOfCharCode + userName[i].charCodeAt(0);
  }
  
//16パターン
//0 ~ 15までの数字にすれば結果が出る
//ある数字を16で割ったあまりにすれば0 ~ 15になる  
const index = sumOfCharCode % answers.length;  
let result = answers[index];
result = result.replaceAll('###userName###',userName);
return result;

}

userNameInput.onkeydown = event => {
  if (event.key === 'Enter') {
    // TODO ボタンのonclick() 処理を呼び出す
    assessmentButton.onclick();
  }
};

