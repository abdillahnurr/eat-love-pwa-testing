/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant__not__found');

  I.amOnPage('/');
  I.seeElement('.restaurant__detail a');

  const firstRestaurant = locate('.restaurant__detail a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.resto-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__detail');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant__not__found');

  I.amOnPage('/');
  I.seeElement('.restaurant__detail a');
  I.click(locate('.restaurant__detail a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.resto-item');

  I.click(locate('.restaurant__detail a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant__not__found');
});

Scenario('liking multiple restaurants', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant__not__found');

  I.amOnPage('/');
  I.seeElement('.restaurant__detail a');

  const names = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant__detail a').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    names.push(await I.grabTextFrom('.resto__name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/like');
  I.seeElement('.resto-item');

  for (let i = 1; i <= 3; i++) {
    const visibleRestaurant = locate('.restaurant__detail a').at(i);
    const visibleRestaurantName = await I.grabTextFrom(visibleRestaurant);
    assert.strictEqual(visibleRestaurantName, names[i - 1]);
  }
});
