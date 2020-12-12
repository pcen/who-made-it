import AddIngredients from './pages/AddIngredients';
import RecipeSteps from './pages/RecipeSteps';
import Home from './pages/Home';
import TheStory from './pages/TheStory';

const Routes = [
  {
    path: '/add-ingredients',
    component: AddIngredients,
  },
  {
    path: '/story',
    component: TheStory,
  },
  {
    path: '/recipe-steps',
    component: RecipeSteps,
  },
];

export { Home as Default };
export default Routes;
