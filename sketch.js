const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,rand,image,infected,doctor,doctorimg,infectedimg;


function preload(){
    infectedimg=loadImage("corona.png")
    doctorimg=loadImage("doctor.png")
    place()
}
function setup(){
createCanvas(900,500)

engine=Engine.create()
world=engine.world

npc1=new npc(100,400)
infected=Bodies.rectangle(500,300,10,10,{isStatic:true})
doctor=Bodies.rectangle(300,300,30,30,{isStatic:true})

World.add(world,infected)
World.add(world,doctor)
}

function draw(){
    background("red")
    Engine.update(engine)
    text(mouseX+","+mouseY,mouseX,mouseY)
    npc1.display();

    image(doctorimg,doctor.position.x,doctor.position.y,200,200)
    image(infectedimg,infected.position.x,infected.position.y,75,75)

    if(keyDown("w")){
                doctor.position.y-=5
}
if(keyDown("a")){
    doctor.position.x-=5
}   
 if(keyDown("s")){
    doctor.position.y+=5
}    
if(keyDown("d")){
    doctor.position.x+=5
}
//----------------------
if(keyDown("UP")){
    infected.position.y-=5
}
if(keyDown("down")){
    infected.position.y+=5
}

if(keyDown("left")){
    infected.position.x-=5
}
if(keyDown("right")){
    infected.position.x+=5
}
}
function place(){
        rand=random(1,4)
if(rand == 1){
    image=loadImage("man.png")
}
else if(rand==2){
    image=loadImage("man2.png")

}
else if(rand==3){
   image=loadImage("man3.png")

}
else if(rand==4){
    image=loadImage("man4.png")

} 
}