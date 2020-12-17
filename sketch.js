


function preload(){
 pointImage = loadImage("5point.PNG");
 backgroundImage = loadImage("background.jpg");
 fireballImage = loadImage("fireball.png");
 snowballImage = loadImage("snowball.PNG");
 snowmanImage = loadImage("snowman.png");
 tree1Image = loadImage("tree1.png");
 tree2Image = loadImage("tree2.png");
 tree3Image = loadImage("tree3.PNG");
}

function setup(){
    createCanvas(600,400);

    Background = createSprite(300,200);
    Background.addImage(backgroundImage);
    Background.velocityX = -3;
    Background.scale = 1.1;

    Snowman = createSprite(100,300);
    Snowman.addImage(snowmanImage);
    Snowman.scale = 0.3;

    ground = createSprite(300,390,600,10);
    ground.visible=false;

    treeGroup = createGroup()
}

function draw(){
    background("pink");

    if(Background.x<0){
        Background.x = 300;
    }

    if(keyDown(UP_ARROW)){
        Snowman.velocityY = -12;
    }
    Snowman.velocityY = Snowman.velocityY+0.5;

    Snowman.collide(ground);

    createTree();

    drawSprites()
}

function createTree(){
    if(frameCount%100===0){
        tree=createSprite(600,320);
        number=Math.round(random(1,3));
        if(number === 1){
            tree.addImage(tree1Image);
            tree.scale=0.3;
        }
        if(number === 2){
            tree.addImage(tree2Image);
            tree.scale=0.5
        }
        if(number === 3){
            tree.addImage(tree3Image);
            tree.scale = 0.5
        }
        tree.velocityX=-4;

        treeGroup.add(tree);

        
    }
}

