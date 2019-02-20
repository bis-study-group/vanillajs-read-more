const moreButton = document.getElementById("more");
const output = document.getElementById("output");

let page = 1;

moreButton.addEventListener("click", function() {
  axios.get("/api/gifs?page=" + page).then(response => {
    // HTMLを追加する

    //追加用のHTML
    const html = `
  <div class="columns">
    <img class="column is-one-third" src="..." alt="" />
    <img class="column is-one-third" src="..." alt="" />
    <img class="column is-one-third" src="..." alt="" />
  </div>
`;
    //HTMLの文字列をDOMに変換
    const domParser = new DOMParser();
    const domHtml = domParser.parseFromString(html, "text/html");

    //HTMLの.columnの数だけsrc要素の変換処理
    const columnHtml = domHtml.querySelectorAll(".columns");
    columnHtml.forEach(function(element, i) {
      element.setAttribute("src", response.data.items[i].url);
    });

    //src要素置換処理後のdomHTMLを画面に描画
    /*-- 
    "domHtml.body.innerHTML" でsrc要素置換後のHTMLを取得できるが、
    いつcolumnHtmlの内容が反映されたか謎
    23行目はobjectの中身を参照しているだけ？
    --*/
    output.insertAdjacentHTML("beforeend", domHtml.body.innerHTML);

    // 最後のページであれば「もっと見る」ボタンは隠す
    if (response.data.last == true) {
      moreButton.setAttribute("class", "hidden");
    }
  });
  page++;
});

/**
 * 一行分の要素を生成する
 */
function buildHTML(items) {
  const row = document.createElement("div");
  row.className = "columns";
  let html = "";
  /* Insert code here... */
  row.innerHTML = html;
  return row;
}
