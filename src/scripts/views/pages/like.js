/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-unresolved
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    const restaurants = await FavoriteRestoIdb.getAllRestos();
    if (restaurants.length) {
      return `
      <style>
        hero-img {
          display: none;
        }
      </style>
      <div class="content">
        <h2 class="content__heading">Favorite</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
    }
    return `
          <h2 class="content-heading">Favorite</h2>
          <div id="restaurants" class="restaurants">

          </div>
          <div class="restaurant__not__found">Tidak ada restaurant untuk ditampilkan</div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestos();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Like;
