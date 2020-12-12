import React from 'react';
import { generateStory } from '../logic/story-generation';

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

const TheStory = (props) => {
  const { recipe, options } = props;
  let story = generateStory(SampleRecipe, ['Scotch Tom Collins', 'Scotch Rikey', 'Whiskey Sour']);

  return (
    <React.Fragment>
      <div className='story-container'>
        <div className='story'>{story}</div>
      </div>
    </React.Fragment>
  );
}

export default TheStory;
