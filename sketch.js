//playerSprite......
var player;

//CoinCollector....
var coinCounter = 0;

//gameState....
var gameState;

function preload() {

	sound1 = loadSound("1.wav");
	playerImg = loadImage("charecte1r.gif");
	playerImg2 = loadImage("charecter.gif");
	coinImg = loadImage("2.png");
	spike = loadImage("spikes.png")
	collect = loadSound("collect.mp3")
	die = loadSound("jmp.mp3")
	backgroundSound = loadSound("back.wav")
}

function setup() {
	createCanvas(800, 700);
    backgroundSound.loop()
	ground = createSprite(400, 750, 880, 200);
	ground.shapeColor = "brown";

	platfoarm1 = createSprite(400, 450, 200, 20);
	platfoarm1.shapeColor = "brown";

	platfoarm2 = createSprite(300, 300, 200, 20);
	platfoarm2.shapeColor = "brown";

	platfoarm3 = createSprite(100, 200, 200, 20);
	platfoarm3.shapeColor = "brown";

	platfoarm4 = createSprite(600, 400, 200, 20);
	platfoarm4.shapeColor = "brown";

	coin = createSprite(400, 420, 20, 20);
	coin.shapeColor = "yellow";
	coin.scale = 0.4
	coin.addImage(coinImg);

	coin1 = createSprite(300, 270, 20, 20);
	coin1.shapeColor = "yellow";
	coin1.scale = 0.4;
	coin1.addImage(coinImg);

	coin2 = createSprite(600, 370, 20, 20);
	coin2.shapeColor = "yellow";
	coin2.scale = 0.4;
	coin2.addImage(coinImg);

	coin3 = createSprite(100, 170, 20, 20);
	coin3.shapeColor = "yellow";
	coin3.addImage(coinImg);
	coin3.scale = 0.4;

	player = createSprite(400, 626, 40, 50);
	player.addImage(playerImg);
	player.scale = 0.8;
	player.setCollider("rectangle", 0, 0, 30, 150);

	blockage1 = createSprite(-200, 600, 400, 500);
	blockage1.shapeColor = "brown";
	blockage2 = createSprite(1000, 700, 400, 500);
	blockage2.shapeColor = "brown";

	spikes = createSprite(600, 624, 40, 40);
	spikes.addImage(spike);
	spikes.scale = 0.4;

	spikes2 = createSprite(80, 624, 40, 40);
	spikes2.addImage(spike);
	spikes2.scale = 0.4;

	
}


function draw() {

	camera.position.x = player.x
	rectMode(CENTER);
	background("lightblue");
	textSize(40)
	fill("black")
	text("collect all coins to win!!", 200, 100)
	drawSprites();

	if (gameState == 0) {

		background(100)
		textSize(40)
		text("GameOver!!", 400, 500)
		player.velocityY = 0;
		player.velocityX = 0;
	}

	if (gameState == 1) {

		background(100)
		textSize(40)
		text("you lost", 400, 500)
		player.velocityY = 0;
		player.velocityX = 0;

	}

	if (keyDown("left")) {

		player.x = player.x - 6
		player.addImage(playerImg)
	}

	if (keyDown("right")) {

		player.x = player.x + 6

		player.addImage(playerImg2)

	}

	if (keyDown("space")) {

		player.velocityY = -10

	}

	if (player.isTouching(coin)) {

		coin.destroy()
		coinCounter = coinCounter + 1
		collect.play()
	}

	if (player.isTouching(coin1)) {

		coin1.destroy()
		coinCounter = coinCounter + 1
		collect.play()
	}

	if (player.isTouching(coin3)) {

		coin3.destroy()
		coinCounter = coinCounter + 1
		collect.play()
	}

	if (player.isTouching(coin2)) {

		coin2.destroy()
		coinCounter = coinCounter + 1
		collect.play()

	}

	if (player.isTouching(spikes)) {

		gameState = 1


	}

	if (player.isTouching(spikes2)) {

		gameState = 1

	}

	if (coinCounter === 4) {

		gameState = 0

	}


	player.velocityY = player.velocityY + 0.8
	player.collide(ground)
	player.collide(ground);
	player.collide(ground);;
	player.collide(ground);
	player.collide(ground);
	player.collide(ground);
	player.collide(platfoarm1);
	player.collide(platfoarm2);
	player.collide(platfoarm3);
	player.collide(platfoarm4);
	player.bounceOff(blockage1)
	player.collide(blockage1)
	player.collide(blockage2)
	player.collide(spikes)


}



