const form = document.querySelector( ".login-form" );

form.addEventListener( "submit", handlerSubmit );

function handlerSubmit ( event ) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if ( email.value === "" || password.value === "" ) {
       return alert( "Enter your email and parrword, please" );
    }
    console.log( `Email: ${ email.value }, Password:${ password.value }` );
    event.currentTArget.reset();
}