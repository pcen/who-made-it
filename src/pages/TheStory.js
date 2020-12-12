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
  const { recipe, suspects } = props;
  let story = generateStory(Recipes.drinks.ScotchTomCollins, ['Scotch Tom Collins', 'Scotch Rickey', 'Whiskey Sour']);

  return (
    <div className='story-container'>
      <div className="storyTitle">TITLE PLACEHOLDER</div>
      <br></br><br></br>
      <div className='story'>{story}</div>
      <br></br>
      <div className='actors-container'>
        <ActorProfile name='Elizabeth' image={Elizabeth} item={suspects.Elizabeth.recipe} />
        <ActorProfile name='Margaret' image={Margaret} item={suspects.Margaret.recipe} />
        <ActorProfile name='Raymond' image={Raymond} item={suspects.Raymond.recipe} />
      </div>
    </div>
  );
}

export default TheStory;
