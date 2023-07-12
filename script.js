function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  
 
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  
  var time = hours + ":" + minutes + ":" + seconds;
  
  
  document.getElementById("clock").textContent = time;
}

setInterval(updateClock, 1000);

