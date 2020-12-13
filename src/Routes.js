import GenerateRecipes from './pages/GenerateRecipes';
import AddIngredients from './pages/AddIngredients';
import GuessKiller from './pages/GuessKiller';
import RecipeSteps from './pages/RecipeSteps';
import TheStory from './pages/TheStory';
import Finit from './pages/Finit';
import Home from './pages/Home';

// Routes is used in App.js to map route definitions to <Route> components
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
