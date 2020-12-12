import AddIngredients from './pages/AddIngredients';
import GuessKiller from './pages/GuessKiller';
import RecipeSteps from './pages/RecipeSteps';
import Home from './pages/Home';
import TheStory from './pages/TheStory';
import CorrectGuess from './pages/CorrectGuess';
import IncorrectGuess from './pages/IncorrectGuess';

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
    path: '/correct-guess',
    component: CorrectGuess,
  },
  {
    path: '/incorrect-guess',
    component: IncorrectGuess,
  },
];

export { Home as Default };
export default Routes;
