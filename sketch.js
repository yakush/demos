var v;

function setup() {
  noCanvas();
  createP('a');
  //v= createCapture(VIDEO);
  v= createCapture({
    audio: false,
    video: {
      facingMode: "environment"
    }
  });
  v.style('border','1px solid black');

  v.id('vid');
  v.size(document.body.clientWidth,document.body.scrollHeight);
}
