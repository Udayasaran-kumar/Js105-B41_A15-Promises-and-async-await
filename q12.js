 let timer=prompt();
function displayMessage(timer) {
    console.log(`Timer of ${timer}ms is finished`);
  }
    function getUserInput(callback) {
    setTimeout(function() {callback(timer);
    }, timer);
    }
     getUserInput(displayMessage);
