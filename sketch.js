const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, man,manImg,lightning,lighningImg;
var drop = [];
var maxDrops=150;

function preload() {
manImg = loadImage("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");
}

function setup() {
    var canvas = createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    if(frameCount%150===0){
        for (var i = 0; i < maxDrops; i++) {
            drop.push(new Drops(random(0, 800), random(0, 800)))
        }
    }
    var manoptions={
        'restitution':1.0,
        'friction':0.2,
        'density':1.0,
        isStatic: true
    }
    man=Bodies.circle(400,650,110,manoptions);
    World.add(world,man)
    if(frameCount%800===0){

    }

}


function draw() {
    background("black");
    Engine.update(engine);
    for(var i=0;i<maxDrops;i++){
        drop[i].display();
        drop[i].updateY();
    }
    imageMode(CENTER)
    image(manImg,man.position.x,man.position.y,300,300)
}