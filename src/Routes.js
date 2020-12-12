import AddIngredients from './pages/AddIngredients';
import GuessKiller from './pages/GuessKiller';
import RecipeSteps from './pages/RecipeSteps';
import Home from './pages/Home';
import TheStory from './pages/TheStory';
import Finit from './pages/Finit';
import GenerateRecipes from './pages/GenerateRecipes';

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
  {
    path: '/story',
    component: TheStory,
  },
  {
    path: '/finit',
    component: Finit,
  },
  {
    path: '/generate-recipes',
    component: GenerateRecipes,
  },
];

export { Home as Default };
export default Routes;
