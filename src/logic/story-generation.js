import { randFrom, commaAndAndSeparate } from './utils';

{/*
This file lists all the variable components in the murder mystery story.
The variables will be randomly selected, created a unique story every time
The variables include:
  - The day of the week
  - An adjective to describe the day
  - The venue
  - The suspects
  - The victim
*/}

{/* The variables and potential values */}
const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DayDescriptors = ['Last', 'One rainy', 'One dark and stormy', 'One dreary'];

const Locations = ['at a party', 'at a dinner engagement', 'at the dance'];

const Actors = ['Elizabeth', 'Margaret', 'Raymond'];
const ActorsBecameSuspects = 'Elizabeth, Margaret, and Raymond became suspects in a mysterious poisoning';

const Victims = ['Mr. Robert Hughes', 'Mrs. Betty Green', 'Mr. Charles Clarke', 'Mrs. Dorothy Jones'];
const VictimDescriptors = ['esteemed', 'benevolent', 'influential', 'controversial']

{/* Randomly selects a value from each variable */}
const generateStory = recipe => {
  let day = randFrom(DayDescriptors).concat(' ', randFrom(Days));
  let victim = randFrom(Victims);
  let victimFirstName = victim.split(' ')[1];
  let victimDescriptor = randFrom(VictimDescriptors);
  let atLocation = randFrom(Locations);
  let ingredients = commaAndAndSeparate(recipe.ingredients);

  {/* Inserts the variables into the story */}
  let story = `
    ${day}, ${atLocation}, ${ActorsBecameSuspects}.
    The unfortunate victim was the ${victimDescriptor} ${victim}.
    ${victimFirstName} was seen enjoying drinks made by each suspect.
    Below you will find the name of the drink that they each mixed.
    The detective has a description of an individual who purchased
    ${ingredients} at the local market. We need your help determining
    which suspect used these ingredients to make the poisonous concoction.
    Have fun and good luck!
  `
  return story;
}

export { generateStory, Actors };
