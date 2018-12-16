# もっと見る機能を作ろう

## 課題

後述する仕様の通りに動作するように `js/app.js` を編集しましょう。  
穴埋めになっているので `/* Insert code here... */` の箇所にコードを足してください。

HTML と CSS は出来ているので変更しません。

## 提出方法

`solution/{your name}` のルールでブランチを作成してください。

```console
$ git clone git@github.com:bis-study-group/vanillajs-read-more.git
$ git checkout -b solution/name
```

解き終わったらリモートリポジトリにプッシュしてください。

```console
$ git push origin solution/name
```

## 仕様

- 最初は「もっと見る」ボタンだけが表示されています。
- 「もっと見る」ボタンをクリックすると、猫のGIFが一行に三枚表示されます。
- 表示できる GIF がなくなったら「もっと見る」ボタンを非表示にします。

GIF 画像取得 API（`/api/gifs`）は以下の形式の JSON を返却します。  
返却できる GIF がなくなると、`last` が `true` になります。

```json
{
  "items": [
    { "url": string },
    { "url": string },
    { "url": string }
  ],
  "last": boolean
}
```

「もっと見る」をクリックしたあと、このような HTML を構築してください。

```html
<div id="output" class="gifs">
  <div class="columns">
    <img class="column is-one-third" src="..." alt="" />
    <img class="column is-one-third" src="..." alt="" />
    <img class="column is-one-third" src="..." alt="" />
  </div>
</div>
```

「もっと見る」をさらにクリックすると、このように要素を追加します。

```html
<div id="output" class="gifs">
  <div class="columns">
    <img class="column is-one-third" src="..." alt="" />
    <img class="column is-one-third" src="..." alt="" />
    <img class="column is-one-third" src="..." alt="" />
  </div>
  <div class="columns">
    <img class="column is-one-third" src="..." alt="" />
    <img class="column is-one-third" src="..." alt="" />
    <img class="column is-one-third" src="..." alt="" />
  </div>
</div>
```

## 起動方法

今回も`server.js` を起動して動作確認します。

まずは依存パッケージをインストールしてください。

```console
$ npm install
```

起動するには以下のコマンドを実行します。

```console
$ npm start
```

http://localhost:8008 を開いてください。
