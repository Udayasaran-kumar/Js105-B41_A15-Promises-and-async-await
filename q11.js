function displayMessage(name) {
    console.log(`Hello, ${name}`);
  }
  
  function getUserInput(callback) {
    const name = "Alice";
    setTimeout(function() {
      callback(name);
       }, 1000);
      
    
  }
  
  displayMessage("saran");
  getUserInput(displayMessage);
  
