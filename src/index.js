import './sass/main.scss';
import imageFingerPtl from './partials/image-finger.hbs';
import NewsApiService from './partials/apiService';
import getRefs from './partials/getRefs';

const refs = getRefs();
const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  ClearImageList();
  newsApiService.query = e.currentTarget.elements.query.value;
  newsApiService.resetPage();
  newsApiService.fetchImages().then(appendImagesMarkup);
}

function onLoadMore() {
  newsApiService.fetchImages().then(appendImagesMarkup);
}

function appendImagesMarkup(data) {
  refs.imageList.insertAdjacentHTML('beforeend', imageFingerPtl(data));
}

function ClearImageList() {
  refs.imageList.innerHTML = '';
}
