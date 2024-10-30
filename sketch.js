let palavra;
function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();
}


function palavraAleatoria(){
  let palavras = ["renan", "eduardo", "lindo"];
  return  random(palavras);
}

function inicializaCores(){
  background("rgb(233,68,0)");
  fill("#2196F3")
  textSize(70)
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo){
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}
  
function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
  
  
/*if (mouseX < 50){
  let palavra = "a";
  text(palavra, 200, 200);
  } else if (mouseX < 100){
    let palavra = "ay";
    text(palavra, 200, 200);
  } else if(mouseX < 150){
     let palavra = "ays";
    text(palavra, 200, 200);
  } else if(mouseX < 200){
       let palavra = "aysh";
    text(palavra, 200, 200);
  } else if(mouseX < 250){
       let palavra = "aysha";
    text(palavra, 200, 200);
   } else if(mouseX < 300){
     
   }*/
}