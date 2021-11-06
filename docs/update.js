function reload(){
 document.getElementById('scoreOne').innerHTML = localStorage.getItem('S1');
 document.getElementById('scoreTwo').innerHTML = localStorage.getItem('S2');

 document.getElementById('gamesOne').innerHTML = localStorage.getItem('G1');
 document.getElementById('gamesTwo').innerHTML = localStorage.getItem('G2');
 document.getElementById('teamOne').innerHTML = localStorage.getItem('T1');
 document.getElementById('teamTwo').innerHTML = localStorage.getItem('T2');
 document.getElementById('teamOne').style.backgroundColor = localStorage.getItem('C1');
 document.getElementById('teamTwo').style.backgroundColor = localStorage.getItem('C1');
 
 
 


 
} setInterval ('reload()', 1)



