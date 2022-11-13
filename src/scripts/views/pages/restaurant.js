// eslint-disable-next-line import/no-unresolved
import RestaurantSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const ListOfRestaurants = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Our Partners</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listOfRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default ListOfRestaurants;
