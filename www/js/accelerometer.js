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
  acz = event.acceleration.z;

  setInterval(function(){
    ax.push(acx);
    ay.push(acy);
    az.push(acz);

    ac.push(acx);
    ac.push(acy);
    ac.push(acz);

  },500); 
  for (var i = 0,result = 0; i < ac.length; result += Math.pow(ac[i++],2) );
  window.result = result / ac.length;
document.getElementById("justfortest").innerHTML=result/ac.length;
  marginLeft = 10*event.accelerationIncludingGravity.x;
  marginTop = -10*event.accelerationIncludingGravity.y;
  //document.getElementById("accelerometer").innerHTML= document.getElementById("ball").innerHTML;
  //document.getElementById("accelerometer").innerHTML= marginLeft+" "+marginTop;
 
  document.getElementById("accelerometer").innerHTML= '<div id="ball" style="margin-left: '+marginLeft+'px; margin-top:'+marginTop+'px"></div>';
  document.getElementById("none").innerHTML = result;
  
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
  document.getElementById('status').style.display = "none";
}

function hideDiv(){
  document.getElementById('status').style.display = "inline";

  if (Math.abs(result) < 1){
      document.getElementById('status').innerHTML = '<div id="test-success" class="image"></div>';
      //document.getElementById('test_ok').style.display = "inline";
  }else if(Math.abs(result) >= 1){
      document.getElementById('status').innerHTML = '<div id="test-fail" class="image" style="margin-left:7%"><i class="ion-alert-circled"></i>Sorry, could you please take the test again?</div>';
      document.getElementById('confirm').style.display = "inline";
      document.getElementById('test_later').style.display = "inline";
  }

  //document.getElementById('status').innerHTML = "The test result is "+result;
  document.getElementById('testzone').style.display = "none";

  gatherData();
}

function hideButton(elem){
  if(elem.id == "confirm" || elem.id == "test_later"){
    document.getElementById('confirm').style.display = "none"; 
    document.getElementById('test_later').style.display = "none";
    document.getElementById('status').style.display = "none";   
  }else{
  }
}


//time picker js
var now = new Date();
var myAudio;
var plusMinus = 12;
var selAPm = 1;
var selHour = 6;
var selMinute = 30;

function changeTestAPm(){
  selAPm = document.getElementById("am_pm").selectedIndex;
  if(selAPm == 0){
    plusMinus = 0;
  }else if(selAPm == 1){
    plusMinus = 12;
  }
  setTestTime();
}

function changeTestHour(){
  selHour = document.getElementById("hour").selectedIndex; 
  setTestTime();
}

function changeTestMin(){
  selMinute = document.getElementById("minute").selectedIndex;
  setTestTime();
}

function setTestTime(){
  var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), plusMinus+selHour, selMinute*5, 0, 0) - now;
  if (millisTill10 < 0) {
    millisTill10 += 86400000; 
  }
  setTimeout(initAudioPlayer, millisTill10);
}

function initAudioPlayer(){
  var playTime = 1;
  for(i=0; i<playTime; i++){
    myAudio = new Audio();
    myAudio.src = "audio/promt.m4a";
    myAudio.loop = false;
    myAudio.play();
  }
}


