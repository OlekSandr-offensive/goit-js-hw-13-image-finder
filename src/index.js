import './sass/main.scss';
import NewsApiService from './partials/apiService';

const refs = {
  searchForm: document.querySelector('.search-form'),
  articlesList: document.querySelector('.articles-list'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('input', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;

  newsApiService.fetchArticles();
}

function onLoadMore() {
  newsApiService.fetchArticles();
}
