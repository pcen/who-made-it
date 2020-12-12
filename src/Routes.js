import AddIngredients from './pages/AddIngredients';
import Home from './pages/Home';

const Routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/add-ingredients',
    component: AddIngredients,
  },
];

export const { Default } = Home;
export default Routes;
