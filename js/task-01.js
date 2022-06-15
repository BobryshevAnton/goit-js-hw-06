// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const ul = document.querySelector( "#categories" );

const message = ul.children.length;
console.log( `Number of categories: ${ message } ` );


const liAll = document.querySelectorAll( ".item" );

liAll.forEach( ( item ) => {
    item.children;
    console.log('Category: ', item.children[ 0 ].textContent );
    console.log( 'Elements: ', item.children[ 1 ].children.length );
} );
