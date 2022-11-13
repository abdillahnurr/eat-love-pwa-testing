import ListOfRestaurants from '../views/pages/restaurant';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': ListOfRestaurants,
  '/restaurant': ListOfRestaurants,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
