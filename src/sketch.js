var balls = [];

function setup() {
  createCanvas(800, 800);
  background(200);

  for(let i = 0; i<1000; i++){
    let ball = {
      x:random(0,800),
      y:random(0,800),
      color:0
    };
    balls.push(ball);
  }
}

function isCollision(a, b){
  let dist = (a.x - b.x)**2 + (a.y - b.y)**2;
  if(dist < 400){
    return true;
  }else{
    return false;
  }
}

function draw() {
  background(200);
  for(let i = 0; i<1000; i++){
    fill(255,200,balls[i].color);
    balls[i].x += random(-1,1);
    balls[i].y += random(-1,1);
    ellipse(balls[i].x, balls[i].y, 10, 10);
  }

  for(let i = 0; i<1000; i++){
    for(let j = 0; j<1000; j++){
      if(i!=j && isCollision(balls[i], balls[j])){
        balls[i].color = 200;
        balls[j].color = 200;
      }else{
        balls[i].color = 0;
        balls[j].color = 0;
      }
    }
  }
  
}

