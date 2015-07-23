(function() {

  var oscPort = new osc.WebSocketPort({
    url: "ws://localhost:8081" // URL to your Web Socket server.
  });

  oscPort.on("message", function (oscMsg) {
    console.log("OSC message", oscMsg);
  });

  oscPort.open();

})();
