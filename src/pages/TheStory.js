import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { generateStory } from '../logic/story-generation';
import { useHistory } from 'react-router-dom';

import Elizabeth from '../assets/beth.png';
import Margaret from '../assets/marge.png';
import Raymond from '../assets/ray.png';

import '../styles/the-story.css';
import '../styles/buttons.css';

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
  const history = useHistory();

  let story = generateStory(recipe);

  const toSteps = () => {
    history.push('/recipe-steps?step=1&guessed=false');
  };

  return (
    <div className='story-container'>
      <div className="storyTitle">A Speakeasy Mystery</div>
      <br></br><br></br>
      <div className='story'>{story}</div>
      <br></br>
      <Button variant='contained' className='buttonBlack' onClick={toSteps}>
        Begin!
      </Button>
      <br></br>

      <div className='actors-container'>
        <Grid container direction="row">
          <Grid item xs={12}>
            <br></br>
            <div class="suspectsTitle">The Suspects</div>
            <br></br>
          </Grid>
          <Grid container item xs={12}>
            <ActorProfile name='Elizabeth' image={Elizabeth} item={suspects.Elizabeth.recipe} />
            <ActorProfile name='Margaret' image={Margaret} item={suspects.Margaret.recipe} />
            <ActorProfile name='Raymond' image={Raymond} item={suspects.Raymond.recipe} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default TheStory;
