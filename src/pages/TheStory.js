import React from 'react';
import { Button } from '@material-ui/core';
import { generateStory } from '../logic/story-generation';
import { useHistory } from 'react-router-dom';

import Elizabeth from '../assets/beth.png';
import Margaret from '../assets/marge.png';
import Raymond from '../assets/ray.png';

import '../styles/the-story.css';
import '../styles/buttons.css';

// Component for actor name, drink, and image
const ActorProfile = props => {
  const { image, name, item } = props;
  return (
    <div className='actor-profile'>
      <img className='actor-image' alt={name} src={image} />
      <br></br>
      <div className='actor-name'>{name}</div>
      <div>mixed the</div>
      <div className="drink-red">{item}</div>
    </div>
  );
}

const TheStory = (props) => {
  const { recipe, suspects } = props;
  const history = useHistory();
  let story = generateStory(recipe);

  const toSteps = () => {
    history.push('/recipe-steps?step=1&guessed=false');
  };

  return (
    <div className='story-container'>
      <div className="storyTitle">A Speakeasy Murder Mystery</div>
      <br></br><br></br>
      <div className='story'>{story}</div>
      <br></br>
      <Button variant='contained' className='buttonBlack' onClick={toSteps}>
        Begin!
      </Button>
      <br></br><br></br>

      <div className="white-card-story">
        <div className="title">The Suspects</div>
        <br></br><br></br>
        {/* Potential Suspects */}
        <div className='killer-profiles'>
          <ActorProfile name='Elizabeth' image={Elizabeth} item={suspects.Elizabeth.recipe} />
          <ActorProfile name='Margaret' image={Margaret} item={suspects.Margaret.recipe} />
          <ActorProfile name='Raymond' image={Raymond} item={suspects.Raymond.recipe} />
        </div>
        <br></br><br></br>
      </div>
    </div>
  );
}

export default TheStory;
