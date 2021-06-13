const API_KEY = '21988624-a694c57feb3b9caad270c2fa0';
const BASE_URL = 'https://pixabay.com/api';

export default class NewsApiService {
  constructor() {
    this.loadQuery = '';
    this.page = 1;
    this.per_page = 12;
  }

  fetchImages() {
    console.log(this);
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.loadQuery}&page=${this.page}&per_page=${this.per_page}&key=${API_KEY}`;

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.incrementPage();
        return data;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.loadQuery;
  }

  set query(newQuery) {
    this.loadQuery = newQuery;
  }
}
