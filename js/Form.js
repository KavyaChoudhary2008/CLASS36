class Form{
constructor(){

}
display(){
    var title = createElement('h2');
    title.html('car racing game');
    title.position(130,40);

    var input = createInput('name');
    input.position(230,200);

    var button = createButton('play');
    button.position(500,280);

    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name = input.value();
        
        var greeting = createElement('h2');
greeting.html("hello "+name);
greeting.position(500,200);

playerCount = playerCount+1;
player.update(name);
player.updateCount(playerCount)
  })
}
}