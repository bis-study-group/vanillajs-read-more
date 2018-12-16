const express = require('express');
const app = express();

const data = require('./data/gifs.json');

const ITEMS_PER_PAGE = 3;

const paginate = (list, page, itemsPerPage) => {
  const start = itemsPerPage * (page - 1);
  const end = start + itemsPerPage;
  const isLastPage = end >= list.length - 1;
  return {
    items: list.slice(start, end),
    last: isLastPage
  };
}

app.use(express.static('public'));

app.get('/api/gifs', (req, res) => {
  const page = req.query.page || 1;
  res.send(paginate(data, page, ITEMS_PER_PAGE));
});

const port = process.env.PORT || 8008;
app.listen(port, () => console.log(`App listening on port ${port}`));
