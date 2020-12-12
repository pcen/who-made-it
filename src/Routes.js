import AddIngredients from './pages/AddIngredients';
import GuessKiller from './pages/GuessKiller';
import RecipeSteps from './pages/RecipeSteps';
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
  {
    path: '/recipe-steps',
    component: RecipeSteps,
  },
];

export { Home as Default };
export default Routes;
