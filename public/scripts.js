const { edit } = require("../src/app/controllers/ArticleController");

function openNav() {
  document.getElementById("myTopnav").style.width = "90%"
}

function closeNav() {
  document.getElementById("myTopnav").style.width = "0"
}


ClassicEditor
    .create( document.querySelector( '#editor' ) )
    .then( editor => {
        console.log( editor );
    } )
    .catch( error => {
        console.error( error );
    } );



function checkState(element) {
  if(element.checked){
    element.value='1'
  }  else {
    element.value='0'
  }
  
}
  


