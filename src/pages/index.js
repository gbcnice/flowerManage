import Loadable from 'react-loadable';
import Loading from '@common/loading';
 
const Home = Loadable({
  loader: () => import('./home'),
  loading: Loading,
});
const Login = Loadable({
    loader: () => import('./login'),
    loading: Loading,
});
const ShopList = Loadable({
    loader: () => import('./shop/shopList'),
    loading: Loading,
});
const ShopHot = Loadable({
    loader: () => import('./shop/shopHot'),
    loading: Loading,
  });
const Users = Loadable({
    loader: () => import('./users'),
    loading: Loading,
});
export {
    ShopList,
    ShopHot,
    Home,
    Login,
    Users
}