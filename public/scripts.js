const { text } = require("express");

function openNav() {
  document.getElementById("myTopnav").style.width = "90%"
}

function closeNav() {
  document.getElementById("myTopnav").style.width = "0"
}

const editor = new EditorJS({
  holder: 'editorjs',
  tools:{
    header:Header,
    delimiter: Delimiter,
    paragraph: {
     class: Paragraph,
     inlineToolbar: true,
   },
  },
},

);


function saveTextData() {
    editor.save().then((outputData) => {
    console.log('Article data: ', outputData)
  }) .catch((error) => {
    console.log('Saving failes: ', error)
  })

 
}




function checkState(element) {
  if(element.checked){
    element.value='1'
  }  else {
    element.value='0'
  }
}
