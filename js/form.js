class Form{
    constructor(){
        this.button = createButton("PLAY")
        this.input = createInput("name")
        this.greeting = createElement("h3")
    }
hide(){
this.button.hide()
this.input.hide()
this.greeting.hide()
}
display(){
var title = createElement("h2")
title.html("car racing game")
title.position(150,20)


this.input.position(150,150)

this.button.position(150,190)

this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
    player.name = this.input.value()
    playerCount = playerCount+1
    player.index = playerCount
    player.updateCount(playerCount)
    player.update(player.name)

this.greeting.html("hi "+ player.name)
this.greeting.position(150,200)
})
}
}