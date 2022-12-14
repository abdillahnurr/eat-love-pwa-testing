/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestoIdb from '../../src/scripts/data/favorite-resto-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestoIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
