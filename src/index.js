import './sass/main.scss';
import imageFingerPtl from './partials/image-finger.hbs';
import NewsApiService from './partials/apiService';
import getRefs from './partials/getRefs';
import LoadMoreBtn from './partials/loadMoreBtn';
import * as basicLightbox from 'basiclightbox';
import '../node_modules/basiclightbox/dist/basiclightbox.min.css';

const refs = getRefs();

const loadMore = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
refs.imageList.addEventListener('click', onImageList);

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;
  if (newsApiService.query.length === 0) {
    return;
  }
  newsApiService.resetPage();
  newsApiService.fetchImages().then(data => {
    ClearImageList();
    appendImagesMarkup(data);
  });
}

function onLoadMore() {
  newsApiService.fetchImages().then(appendImagesMarkup);
}

function appendImagesMarkup(data) {
  refs.imageList.insertAdjacentHTML('beforeend', imageFingerPtl(data));
  if (data.hits.length < 12) {
    loadMore.removeButton();
    return;
  }
  loadMore.addButton();
  refs.loadMoreBtn.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}

function ClearImageList() {
  refs.imageList.innerHTML = '';
}

function onImageList(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.large}" alt="${e.target.alt}" width="800" height="600">
`);

  instance.show();
}
