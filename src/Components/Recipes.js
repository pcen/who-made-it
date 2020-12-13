// This file stores a database of all drink recipes including their:
//    - Name of Drink
//    - Ingredients Required
//    - Steps to make the drink
//
// After selecing the ingredients that you have in your kitchen, three recipes that you can make will be selected from this list
// One of these selected recipes will be the one that you make
//
// The layout of each item is as follows
// Drink: {
//    Ingredients List []
//    Steps []
//    Name
// }


const Recipes = {
  drinks: {
    TomCollins: {
      ingredients: ['lemon', 'whisky', 'ice', 'soda water'],
      steps: [
        'combine sugar and 1/3 cup water in a jar',
        'pour in 1.5 shots of whisky',
        'add 1/2 cup of soda water',
        'squeeze in lemon juice'
      ],
      name: 'Tom Collins',
    },
    CapeCodder: {
      ingredients: ['cranberry juice', 'vodka', 'lime', 'ice'],
      steps: [
        'add 1 shot of vodka to a highball glass',
        'add 1-2 ice cubes',
        'squeeze in 3/4 ounce lime juice',
        'add 3 ounces of cranberry juice',
      ],
      name: 'Cape Codder',
    },
    Daiquiri: {
      ingredients: ['rum', 'lime', 'sugar', 'ice'],
      steps: [
        'add all the ingredients into a shaker with ice, and shake until well-chilled',
        'Strain into a chilled coupe',
        'garnish with a lime twist',
      ],
      name: 'Daiquiri',
    },
    WhiteWineSprizer: {
      ingredients: ['white wine', 'soda water', 'lemon'],
      steps: [
        'add 1/4 cup of soda water to a glass',
        'add 3/4 cup of white wine to the glass',
        'garnish with a lemon rind',
      ],
      name: 'White Wine Spritzer',
    },
    Margarita: {
      ingredients: ['tequila', 'lime', 'ice', 'salt','triple sec'],
      steps: [
        'moisten the rim of a glass with a lime wedge',
        'dip the rim in a coarse salt',
        'fill a cocktail shaker with fresh ice',
        'add tequila, triple sec, and lime juice',
        'cover and shake vigorously until outside of the shaker has froster',
        'strain into the prepared glass and garnish with a slice of lime',
      ],
      name: "Margarita",
    },
    Cosmopolitan: {
      ingredients: ['vodka', 'triple sec', 'lime', 'cranberry juice', 'ice'],
      steps: [
        'add 1 shot of vodka',
        'add ice cubes',
        'add 1 tablespoon of triple sec',
        'add 2 tablespoons of cranberry juice',
        'squeeze in 1/2 ounce of lime juice'
      ],
      name: 'Cosmopolitan',
    },
    MoscowMule: {
      ingredients: ['vodka', 'ginger beer', 'lime', 'ice'],
      steps: [
        'add 2 shots of vodka to a glass',
        'add 1/2 ounce of lime to glass',
        'add 2-3 ice cubes',
        'stir in 1/2 cup of ginger beer',
        'drop in lime wedge'
      ],
      name: 'Moscow Mule',
    },
    ClassicMartini: {
      ingredients: ['gin', 'vermouth', 'ice', 'lemon'],
      steps: [
        'add a 1.5 shots of gin to a glass',
        'add half a shot of vermouth to the glass',
        'add cubed ice and stir for 30 seconds',
        'add a lemon peel to the glass'
      ],
      name: 'Classic Martini',
    },
    VodkaMartini: {
      ingredients: ['vodka', 'vermouth', 'ice', 'lemon'],
      steps: [
        'add a 1.5 shots of vodka to a glass',
        'add half a shot of vermouth to the glass',
        'add cubed ice and stir for 30 seconds',
        'add a lemon peel to the glass'
      ],
      name: 'Vodka Martini',
    },
    Mojito: {
      ingredients: ['mint', 'rum', 'lime', 'soda water', 'sugar'],
      steps: [
        'add 1-2 lime wedges to a glass',
        'add 2 tablespoons of sugar',
        'optional step: add 2-3 ice cubes',
        'add 1 shot of rum',
        'add 1/2 cup of soda water',
        'add 5-10 mint leaves'
      ],
      name: 'Mojito',
    },
    French75: {
      ingredients: ['gin', 'sugar', 'lemon', 'champagne'],
      steps: [
        'add 3/4 ounce of lemon juice to a glass',
        'add 1.5 shots of gin to the glass',
        'add 0.5 tablespoon of sugar and 1 tablespoon of water',
        'add 1.5 shots of champagne'
      ],
      name: 'French 75',
    },
    Gimlet: {
      ingredients: ['gin', 'sugar', 'lime'],
      steps: [
        'add 1.5 shots of gin to a glass',
        'add 0.5 shot of lime juice',
        'add 0.5 tablespoon of sugar and 1 tablespoon of water',
      ],
      name: 'Gimlet',
    },
    DarkandStormy: {
      ingredients: ['rum', 'ginger beer', 'ice'],
      steps: [
        'add two shots of ginger beer to a glass',
        'optional: add 0.5 shots of lime juice to glass',
        'add 1.5 shots of rum to glass',
        'add icecubes and stir'
      ],
      name: 'Dark and Stormy',
    },
    MaiTai: {
      ingredients: ['rum', 'orange', 'sugar', 'triple sec'],
      steps: [
        'add 2 shots of rum to a glass',
        'add 0.5 cup of orange juice to the glass',
        'add 1 shot of triple sec to the glass',
        'add 0.5 tabespoon of sugar to the glass'
      ],
      name: 'Mai Tai',
    },
    Southside: {
      ingredients: ['gin', 'mint', 'lime'],
      steps: [
        'add 1.5 shots of gin to a glass',
        'add 0.5 shot of lime juice',
        'add 1-2 mint leaves',
      ],
      name: 'Southside',
    },
    GingerSpritz: {
      ingredients: ['white wine', 'ginger beer', 'lime'],
      steps: [
        'add 3 shots of white win to a glass',
        'add 2 shots of ginger beer to the glass',
        'garnish with half a lime',
      ],
      name: 'Ginger Spritz',
    },
    Screwdriver: {
      ingredients: ['orange', 'tequila', 'ice'],
      steps: [
        'add 2-3 ice cubes to a glass',
        'add 1.5 shots of tequila to a glass',
        'add 4 shots of orange juice to the glass',
      ],
      name: 'Screwdriver',
    },
    OrangeBlossom: {
      ingredients: ['orange', 'gin', 'vermouth'],
      steps: [
        'add 1 shot of gin to a glass',
        'add 1 shot of vermouth',
        'add 1 shot of orange juice',
      ],
      name: 'Orange Blossom',
    },
    BishopCocktail: {
      ingredients: ['rum', 'red wine', 'sugar', 'lime'],
      steps: [
        'add 0.5 tablespoon of sugar and 1 tablespoon of water to a glass',
        'add 2 shots of rum to the glass',
        'add 1 shot of red wine',
        'squeeze in half a lime'
      ],
      name: 'Bishop Cocktail',
    },
    RedWineSpritzer: {
      ingredients: ['red wine', 'soda water', 'ice', 'mint'],
      steps: [
        'fill glass 1/2 full of ice',
        'pour wine over ice till 1/2 full',
        'fill remaining glass with soda water',
        'garnish with mint leaves'
      ],
      name: 'Red Wine Spritzer',
    },
  },
  food: {

  },
};

export default Recipes;
