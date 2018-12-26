const moreButton = document.getElementById('more');
const output = document.getElementById('output');

let page = 1;

moreButton.addEventListener('click', function() {
  axios.get('/api/gifs?page=' + page)
    .then(response => {
      /* Insert code here... */
      const data = response.data;
      const items = data.items;
      const flg = data.last;
      
      // HTMLを追加する
      output.appendChild(buildHTML(items));
      // 最後のページであれば「もっと見る」ボタンは隠す
      flg ? moreButton.classList.add('hidden') : null;
      /* Insert code here... */
    });
  page++;
});

/**
 * 一行分の要素を生成する
 */
function buildHTML(items) {
  const row = document.createElement('div');
  row.className = 'columns';
  let html = '';
  /* Insert code here... */
  for (let i in items) {
    const image = document.createElement('img');

    image.className = 'column is-one-third';
    image.src = items[i].url;
    html += image.outerHTML;
  }
  /* Insert code here... */
  row.innerHTML = html;
  return row;
}
