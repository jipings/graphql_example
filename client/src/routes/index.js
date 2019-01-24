
import FeedPage from './FeedPage';
import Todos from './Todos';
import FeedList from './FeedList';
const routes = [
    {
        path: '/',
        name: 'home',
        exact: true,
        component: FeedPage,
      },
      {
        path: '/feed/:type',
        name: 'feed',
        component: FeedPage,
      },
      {
        path: '/feedlist',
        name: 'feedList',
        component: FeedList
      },
      {
        path: '/todos',
        name: 'todo',
        component: Todos
      }
];

export default routes;