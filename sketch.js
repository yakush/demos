var v;

function setup() {
  noCanvas();
  createP('a');
  v= createCapture(VIDEO);
  v.style('border','1px solid black');

  v.id('vid');  
}
