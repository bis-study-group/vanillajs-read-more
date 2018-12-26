const moreButton = document.getElementById("more");
const output = document.getElementById("output");

let page = 1;

moreButton.addEventListener("click", function() {
    axios.get("/api/gifs?page=" + page).then(response => {
        const items = response.data.items;
        const row = buildHTML(items);
        output.appendChild(row);
        if (response.data.last) {
            moreButton.classList.add("hidden");
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
    items.forEach(item => {
        html +=
            '<img class="column is-one-third" src="' + item.url + '" alt="" />';
    });
    row.innerHTML = html;
    return row;
}
