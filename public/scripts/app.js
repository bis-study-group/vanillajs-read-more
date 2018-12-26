const moreButton = document.getElementById("more");
const output = document.getElementById("output");

let page = 1;

moreButton.addEventListener("click", function() {
    axios.get("/api/gifs?page=" + page).then(response => {
        let html = output.innerHTML;
        const items = response.data.items;
        html += '<div class="columns">';
        items.forEach(item => {
            html +=
                '<img class="column is-one-third" src="' +
                item.url +
                '" alt="" />';
        });
        html += "</div>";
        output.innerHTML = html;
        if (response.data.last) {
            moreButton.classList.add("hidden");
        }
        /* Insert code here... */
        // 最後のページであれば「もっと見る」ボタンは隠す
        /* Insert code here... */
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
