import React from 'react';
import { generateStory, Actors } from '../logic/story-generation';

import Elizabeth from '../assets/beth.png';
import Margaret from '../assets/marge.png';
import Raymond from '../assets/ray.png';

import '../styles/the-story.css';

const SampleRecipe = {
  ingredients: [
    {
      ingredient: 'lemon',
      amount: '5-6 dashes',
    },
    {
      ingredient: 'scotch',
      amount: '1 large glass',
    },
    {
      ingredient: 'ice',
      amount: '2-3 lumps',
    },
    {
      ingredient: 'soda',
      amount: '1 glass',
    },
  ],
  steps: []
};

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
  let story = generateStory(SampleRecipe, ['Scotch Tom Collins', 'Scotch Rickey', 'Whiskey Sour']);

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
