export default function getRefs() {
  return {
    searchForm: document.querySelector('.search-form'),
    imageList: document.querySelector('.icon-gallery'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    loadContainer: document.querySelector('.container'),
  };
}
