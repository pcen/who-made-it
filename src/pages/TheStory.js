import React from 'react';
import { generateStory } from '../logic/story-generation';
import Recipes from '../Components/Recipes';

import Elizabeth from '../assets/beth.png';
import Margaret from '../assets/marge.png';
import Raymond from '../assets/ray.png';

import '../styles/the-story.css';

const ActorProfile = props => {
  const { image, name, item } = props;
  return (
    <div className='actor-profile'>
      <img className='actor-image' alt={name} src={image} />
      <div className='actor-name'>{name}</div>
      <div>{item}</div>
    </div>
  );
}

const TheStory = (props) => {
  const { recipe, options } = props;
  let story = generateStory(Recipes.drinks.ScotchTomCollins, ['Scotch Tom Collins', 'Scotch Rickey', 'Whiskey Sour']);

  return (
    <div className='story-container'>
      <div className='story'>{story}</div>
      <div className='actors-container'>
        <ActorProfile name='Elizabeth' image={Elizabeth} item={'Scotch Tom Collins'} />
        <ActorProfile name='Margaret' image={Margaret} item={'Scotch Rickey'} />
        <ActorProfile name='Raymond' image={Raymond} item={'Whiskey Sour'} />
      </div>
    </div>
  );
}

export default TheStory;
