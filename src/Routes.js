import AddIngredients from './pages/AddIngredients';
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
];

export { Home as Default };
export default Routes;
