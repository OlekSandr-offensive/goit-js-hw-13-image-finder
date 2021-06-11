export default class NewsApiService {
  component() {
    this.loadQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    console.log(this);
    const API_KEY = '21988624-a694c57feb3b9caad270c2fa0';

    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.loadQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.page += 1;
      });
  }

  get query() {
    return this.loadQuery;
  }

  set query(newQuery) {
    this.loadQuery = newQuery;
  }
}
