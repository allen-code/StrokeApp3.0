//create acceleration arrays
var ax = new Array();
var ay = new Array();
var az = new Array();

//create speed arrays
var vx = new Array();
var vy = new Array();
var vz = new Array();

//create position arrays
var lx = new Array();
var ly = new Array();
var lz = new Array();

//create the calculated acceleration array
var ac = new Array();

//create variables for motion local storage
var acx = 0; 
var acy = 0; 
var acz = 0; 
var acc = 0;


//function to gather data
function gatherData(){
  for(index = 0; index < ac.length; index++){
    localStorage.setItem('index', 'ac[index]');
  }
}

//timer funcition to set time out

function countDown(secs, elem){
  var element = document.getElementById("status");
  element.innerHTML = secs + " more seconds to go" ;
  if(secs < 1){
    clearTimeout(timer);
    element.innerHTML = '<h2>Your score is</h2>';
  }
  secs--;
  var timer = setTimeout('countDown('+secs+',"'+elem+'")',1000)
}

//functions for motion sensing and gather acceleration data
function motion(event){
  /*document.getElementById("accelerometer").innerHTML = "Accelerometer: "
    +"x:"+ event.acceleration.x + ", "+"  y:"
    + event.acceleration.y + ", "
    + "  z:"+event.acceleration.z;*/
  acx = event.accelerationIncludingGravity.x;
  acy = event.accelerationIncludingGravity.y;
  acz = event.accelerationIncludingGravity.z;
  setInterval(function(){
    ax.push(acx);
    ay.push(acy);
    az.push(acz);

    ac.push(acx);
    ac.push(acy);
    ac.push(acz);
  },500); 
  for (var i = 0, result = 0; i < ac.length; result += Math.pow(ac[i++],2) );
  window.result = result / ac.length;

  marginLeft=20*event.accelerationIncludingGravity.x;
  marginTop=-20*event.accelerationIncludingGravity.y;
  //document.getElementById("accelerometer").innerHTML= document.getElementById("ball").innerHTML;
  //document.getElementById("accelerometer").innerHTML= marginLeft+" "+marginTop;
  document.getElementById("accelerometer").innerHTML= '<div id="ball" style="margin-left: '+marginLeft+'px; margin-top:'+marginTop+'px"></div>';
  /*<div class="b
  lock" style=""></div>
  /*document.getElementById("accelerometer").innerHTML= marginLeft+" "+marginTop*/
}
function orientation(event){
  document.getElementById("magnetometer").innerHTML = "Magnetometer: "
    + event.alpha + ", "
    + event.beta + ", "
    + event.gamma;
}
function go(){
  if(window.DeviceMotionEvent){
    window.addEventListener("devicemotion", motion, false);
  }else{
    var status = document.getElementById("status");
    status.innerHTML = status.innerHTML.replace(
      "is supported", "is not supported"
    );
  }
  /*if(window.DeviceOrientationEvent){
    window.addEventListener("deviceorientation", orientation, false);
  }else{
    var status = document.getElementById("status");
    status.innerHTML = status.innerHTML.replace(
      "is supported", "is not supported"
    );
  }*/
;}

//function to set time out for the go() test
function timeoutGo(){
  var startTime = new Date().getTime();
  go();
  if(new Date().getTime() - startTime > 10000){
    return;
  }
}

function showDiv() {
  document.getElementById('testzone').style.display = "inline";
}

function hideDiv(){
  document.getElementById('status').innerHTML = "The test result is "+result;
  document.getElementById('testzone').style.display = "none";
  gatherData();
}

//time picker js
var now = new Date();
var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 8, 0, 0) - now;
if (millisTill10 < 0) {
     millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
}
setTimeout(function(){alert("It's time to take a test!")}, millisTill10);