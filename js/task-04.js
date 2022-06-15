
const value = document.querySelector( "#value" );

let counterValue = 0;

const buttonMinus = document.querySelector( 'button[data-action="decrement"]' );

const buttonPlus = document.querySelector( 'button[data-action="increment"]' );


buttonMinus.addEventListener( "click", () => {
    counterValue -= 1;
    value.textContent = counterValue;
} );

buttonPlus.addEventListener( "click", () => {
    counterValue += 1;
    value.textContent = counterValue;
} );


