import './sass/main.scss';
import imageFingerPtl from './partials/image-finger.hbs';
import debounce from 'lodash.debounce';
import NewsApiService from './partials/apiService';
import getRefs from './partials/getRefs';
import LoadMoreBtn from './partials/loadMoreBtn';

const refs = getRefs();

const loadMore = new LoadMoreBtn({
  selector: '[data-action="load-more"], spinner',
  hidden: true,
});

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('input', debounce(onSearch, 500));
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  loadMore.show();
  loadMore.disable();
  newsApiService.query = e.target.value;
  newsApiService.resetPage();
  newsApiService.fetchImages().then(data => {
    ClearImageList();
    appendImagesMarkup(data);
    loadMore.enable();
  });
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
