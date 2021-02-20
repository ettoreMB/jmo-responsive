function openNav() {
  document.getElementById("myTopnav").style.width = "90%"
}

function closeNav() {
  document.getElementById("myTopnav").style.width = "0"
}

ClassicEditor
.create( document.querySelector( '#editor' ) )
.catch( error => {
    console.error( error );
} );