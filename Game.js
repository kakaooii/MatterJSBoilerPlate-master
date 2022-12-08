constructor() {}
//BP
getState() {
  var gameStateRef = database.ref("gameState");
  gameStateRef.on("value", function(data) {
    gameState = data.val();
  });
}
//BP
update(state) {
  database.ref("/").update({
    gameState: state
  });
}