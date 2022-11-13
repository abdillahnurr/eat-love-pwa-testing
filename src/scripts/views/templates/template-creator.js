import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
  <h2 tabindex="0" class="resto__name">${restaurant.name}</h2>
  <picture>
        <source media="(max-width: 600px)" srcset="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}">
        <img  tabindex="0" class="resto__image" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}" />
      </picture>
  
  <div class="resto__info">
  <h3>Information</h3>
    <h4 tabindex="0">Address</h4>
    <p tabindex="0">${restaurant.address}</p>
    <h4 tabindex="0">Kota</h4>
    <p tabindex="0">${restaurant.city}</p>
    <h4 tabindex="0">Rating</h4>
    <p tabindex="0">${restaurant.rating}</p>
    <h4 tabindex="0">Categories</h4>
    <p tabindex="0">${restaurant.categories.map((category) => category.name).join(' - ')}</p>
  </div>
  <div class="resto__overview">
    <div tabindex="0" class="description">
      <h3>Description</h3>
      <p>${restaurant.description} minutes</p>
    </div>
    <div class="detail-menus">
      <h3 tabindex="0">Drinks</h3>
      <p tabindex="0">${restaurant.menus.foods.map((food) => food.name).join(' - ')}</p>
    </div>
    <div class="detail-menus">
      <h3 tabindex="0">Foods</h3>
      <p tabindex="0">${restaurant.menus.drinks.map((drink) => drink.name).join(' - ')}</p>
    </div>
    <div class="detail-reviews">
      <h3 tabindex="0">Reviews</h3>
      ${restaurant.customerReviews.map((review) => `
      <div class="detail-review">
          <h4 tabindex="0">${review.name}</h4>
          <p tabindex="0" class="date-review">${review.date}</p>
          <p tabindex="0">${review.review}</p>
      </div>
      `).join('')}
    </div>
  </div>
  
`;

const createRestoItemTemplate = (restaurant) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <picture>
        <source media="(max-width: 600px)" srcset="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <img class="resto-item__header__poster lazyload item-image" alt="${restaurant.name}" 
          data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      </picture>
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3 class="restaurant__detail"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
