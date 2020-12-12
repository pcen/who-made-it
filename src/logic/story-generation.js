const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randFrom = list => {
  let index = randInt(0, list.length - 1);
  return list[index];
}

const commaAndAndSeparate = a => {
  return a.join(', ').replace(/,(?!.*,)/gmi, ' and');
}

const getIngredientArray = recipe => {
  let ingredientArray = [];
  recipe.ingredients.forEach(item => {
    ingredientArray.push(item.ingredient);
  });
  return ingredientArray;
}

const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DayDescriptors = ['Last', 'One rainy', 'One dark and stormy', 'One dreary'];

const Locations = ['at a party', 'at a dinner engagement', 'at the dance'];

const ActorsBecameSuspects = 'Elizabeth, Margaret, and Raymond became suspects in a mysterious poisoning';

const Victims = ['Mr. Robert Hughes', 'Mrs. Betty Green', 'Mr. Charles Clarke', 'Mrs. Dorothy Jones'];
const VictimDescriptors = ['esteemed', 'benevolent', 'influential', 'controversial']

const generateStory = (recipe, options) => {
  let day = randFrom(DayDescriptors).concat(' ', randFrom(Days));
  let victim = randFrom(Victims);
  let victimFirstName = victim.split(' ')[1];
  let victimDescriptor = randFrom(VictimDescriptors);
  let atLocation = randFrom(Locations);
  let ingredients = commaAndAndSeparate(getIngredientArray(recipe));

  let story = `
    ${day}, ${atLocation}, ${ActorsBecameSuspects}.
    The unfortunate victim was the ${victimDescriptor} ${victim}.
    ${victimFirstName} was seen enjoying dishes made by each suspect.
    Below you will find the name of the dish that they each brought.
    The detective has a description of an individual who purchased
    ${ingredients} at the local market. We need your help determining
    which suspect used these ingredients to make the poisonous concoction.
    Have fun and good luck!
  `

  return story;
}

export { generateStory };
