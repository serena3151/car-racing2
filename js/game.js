class Game{
    constructor(){
    }
getState(){
    var gameStateRef = database.ref("gameState")
    gameStateRef.on("value",function(data){
    gameState=data.val();
    })
}
updateState(gameState){
    database.ref("/").update({
        gameState:gameState
    })
}
start(){
    if(gameState===0){
        form = new Form();
        form.display();
        player = new Player();
        player.getCount();
    }
}
play(){
form.hide()
textSize(25)
text("game start",150,100)
Player.getAllPlayersinfo();
if(allPlayers!== undefined){
    var displayPosition = 150
    for(var i in allPlayers){
        if(i==="player"+player.index){
            fill("red")
        }
        else{
            fill("black")
        }
        displayPosition +=20
        text(allPlayers[i].name+":"+allPlayers[i].distance,120,displayPosition)
    }

    if(keyDown(UP_ARROW)&& player.index !== null){
        player.distance+=50
        player.update();
    }
}
}
}