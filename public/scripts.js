function openNav() {
  document.getElementById("myTopnav").style.width = "90%"
}

function closeNav() {
  document.getElementById("myTopnav").style.width = "0"
}

var quill = new Quill('#editor-container', {
  theme: 'snow'
});



function quillGetHTML(inputDelta) {
  var tempQuill=new Quill(document.createElement("div"));
  tempQuill.setContents(inputDelta);
  return tempQuill.root.innerHTML;
}




function checkState(element) {
  if(element.checked){
    element.value='1'
  }  else {
    element.value='0'
  }
}
