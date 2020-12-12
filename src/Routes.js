import AddIngredients from './pages/AddIngredients';
import GuessKiller from './pages/GuessKiller';
import Home from './pages/Home';

const Routes = [
  {
    path: '/add-ingredients',
    component: AddIngredients,
  },
  {
    path: '/guess-killer',
    component: GuessKiller,
  },
];

export { Home as Default };
export default Routes;
