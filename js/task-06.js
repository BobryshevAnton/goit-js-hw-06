const input = document.querySelector( "#validation-input" );

const enterNumber = input.getAttribute("data-length" );

input.addEventListener( "blur", () => {
    if ( input.value.length !== Number( enterNumber ) ) {
        
        input.classList.remove( "valid" );
        input.classList.add( "invalid" );
     
    }
    else {
        input.classList.remove( "invalid" );
        input.classList.add( "valid" );
    }
} );