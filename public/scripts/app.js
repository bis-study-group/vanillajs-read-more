const moreButton = document.getElementById("more");
const output = document.getElementById("output");

let page = 1;

moreButton.addEventListener("click", function() {
  axios.get("/api/gifs?page=" + page).then(response => {
    // HTMLを追加する
    output.appendChild(buildHTML(response.data.items));
    // 最後のページであれば「もっと見る」ボタンは隠す
    /* Insert code here... */
    if (response.data.last) {
      moreButton.classList.add("hidden");
      //5秒で初期化
      setTimeout(function() {
        moreButton.classList.remove("hidden");
        output.textContent = null;
      }, 5000);
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
  for (let i = 0; i < 3; i++) {
    let html = "<img class='column is-one-third' src='" + items[i].url + "'>";
    row.innerHTML += html;
  }

  return row;
}
