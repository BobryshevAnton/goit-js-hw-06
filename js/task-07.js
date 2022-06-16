const input = document.querySelector( "#font-size-control" );
const span = document.querySelector( "#text" );

span.style.fontSize = input.value = "56px";
input.addEventListener( "input", handlerClick );

function handlerClick ( event ) {
    span.style.fontSize = event.currentTarget.value + "px";
};