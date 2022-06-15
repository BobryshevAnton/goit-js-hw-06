const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const li = document.createElement( "li" );
li.textContent = "item";
console.log( li );

const ulIngredients = document.querySelector( '#ingredients' );

const newIngredients = ingredients.map( ( element ) => {

  const li = document.createElement( "li" );
  li.textContent = element;
  return li;

} );

console.log( newIngredients );

ulIngredients.append( ...newIngredients );