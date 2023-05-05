function makeBigger(){
  document.getElementById("text").style.fontSize = '24pt';
}

function fancify(){
  if(document.getElementById("i2").checked){
    document.getElementById("i2").checked = false;
  }
  document.getElementById("text").style.fontWeight = 'bold';
  document.getElementById("text").style.color = 'blue';
  document.getElementById("text").style.textDecoration = 'underline';
}

function clearStyles(){
  if(document.getElementById("i1").checked){
    document.getElementById("i1").checked = false;
  }
  document.getElementById("text").style.fontWeight = null;
  document.getElementById("text").style.color = null;
  document.getElementById("text").style.textDecoration = null;
}

function mooify(){
  const text = document.getElementById("text").value.toUpperCase();
  const sentences = text.split(".");
  document.getElementById("text").value = sentences.join("-Moo");
}