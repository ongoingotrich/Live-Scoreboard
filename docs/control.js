

let ButtonS1 = document.getElementById("S1");
let ButtonS2 = document.getElementById("S2");
let ButtonMS1= document.getElementById("SM1");
let ButtonMS2= document.getElementById("SM2");
let Reset1 = document.getElementById("Reset1");
let Reset2 = document.getElementById("Reset2");
let ButtonG1 = document.getElementById("G1");
let ButtonG2 = document.getElementById("G2");
let ButtonMG1= document.getElementById("GM1");
let ButtonMG2= document.getElementById("GM1");
let ResetG1 = document.getElementById("ResetG1");
let ResetG2 = document.getElementById("ResetG2");
let ResetA = document.getElementById("ResetA");
let remove = document.getElementById("remove");
let show = document.getElementById("show");




let Score1 = 0;
let Score2 = 0;
let Games1 = 0;
let Games2 = 0;






localStorage.setItem('S1', Score1);
localStorage.setItem('S2', Score2);
localStorage.setItem('G1', Games1);
localStorage.setItem('G2', Games2);


remove.addEventListener("click", function() {

        var myobj = document.getElementById("SM1");
        var myobj2 = document.getElementById("SM2");
        var myobj3 = document.getElementById("GM1");
        var myobj4 = document.getElementById("GM2");
        myobj.remove();
        myobj2.remove();
        myobj3.remove();
        myobj4.remove();
      
});

show.addEventListener("click", function() {
    location.reload();
});




ButtonS1.addEventListener("click", function ctrl1() {
    Score1 = Score1 + 1;
    localStorage.setItem('S1', Score1);
});

//shortcuts
document.getElementById('sd').addEventListener('keydown', (event) => {
  
});

let keysPressed = {};

document.addEventListener('keydown', (event) => {
   keysPressed[event.key] = true;
});




 document.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
 
    if (keysPressed['Control'] && event.key == '1') {
        Score1 = Score1 + 1;
        localStorage.setItem('S1', Score1);
    }
 });
 
 document.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
 });



ButtonMS1.addEventListener("click", function() {
    Score1 = Score1 - 1;
    localStorage.setItem('S1', Score1);
});

ButtonMS2.addEventListener("click", function() {
    Score2 = Score2 - 1;
    localStorage.setItem('S2', Score2);
});

ButtonMG2.addEventListener("click", function() {
    Games2 = Games2 - 1;
    localStorage.setItem('G2', Games2);
});

ButtonMG1.addEventListener("click", function() {
    Games1 = Games1 - 1;
    localStorage.setItem('G1', Games1);
});

ButtonG1.addEventListener("click", function() {
    Games1 = Games1 + 1;
    localStorage.setItem('G1', Games1);
});

//shortcuts-----------------------------------------------------------------
document.getElementById('sd2').addEventListener('keydown', (event) => {
  
});

let keysPressed2 = {};

document.addEventListener('keydown', (event) => {
   keysPressed2[event.key] = true;
});




 document.addEventListener('keydown', (event) => {
    keysPressed2[event.key] = true;
 //if
    if (keysPressed2['Control'] && event.key == '2') {
        Games1 = Games1 + 1;
        localStorage.setItem('G1', Games1);
    }
 });
 
 document.addEventListener('keyup', (event) => {
    delete keysPressed2[event.key];
 });
//end--------------------------------------------------------------------------
ButtonS2.addEventListener("click", function() {
    Score2 = Score2 + 1;
    localStorage.setItem('S2', Score2);
});

//shortcuts-----------------------------------------------------------------
document.getElementById('sd3').addEventListener('keydown', (event) => {
  
});

let keysPressed3 = {};

document.addEventListener('keydown', (event) => {
   keysPressed3[event.key] = true;
});




 document.addEventListener('keydown', (event) => {
    keysPressed3[event.key] = true;
 //if
    if (keysPressed3['Control'] && event.key == '3') {
        Score2 = Score2 + 1;
        localStorage.setItem('S2', Score2);
    }
 });
 
 document.addEventListener('keyup', (event) => {
    delete keysPressed3[event.key];
 });
//end--------------------------------------------------------------------------

ButtonG2.addEventListener("click", function() {
    Games2 = Games2 + 1;
    localStorage.setItem('G2', Games2);
});

//shortcuts-----------------------------------------------------------------
document.getElementById('sd4').addEventListener('keydown', (event) => {
  
});

let keysPressed4 = {};

document.addEventListener('keydown', (event) => {
   keysPressed4[event.key] = true;
});




 document.addEventListener('keydown', (event) => {
    keysPressed4[event.key] = true;
 //if
    if (keysPressed3['Control'] && event.key == '4') {
        Games2 = Games2 + 1;
        localStorage.setItem('G2', Games2)
    }
 });
 
 document.addEventListener('keyup', (event) => {
    delete keysPressed4[event.key];
 });
//end--------------------------------------------------------------------------



//shortcuts-----------------------------------------------------------------
document.getElementById('sd5').addEventListener('keydown', (event) => {
  
});

let keysPressed5 = {};

document.addEventListener('keydown', (event) => {
   keysPressed5[event.key] = true;
});




 document.addEventListener('keydown', (event) => {
    keysPressed5[event.key] = true;
 //if
    if (keysPressed5['Control'] && event.key == '5') {
        Score1 = 0
        localStorage.setItem('S1', Score1);

        Score2 = 0
    
        localStorage.setItem('S2', Score2);


    }
 });
 
 document.addEventListener('keyup', (event) => {
    delete keysPressed5[event.key];
 });
//end--------------------------------------------------------------------------



//shortcuts-----------------------------------------------------------------
document.getElementById('sd6').addEventListener('keydown', (event) => {
  
});

let keysPressed6 = {};

document.addEventListener('keydown', (event) => {
   keysPressed5[event.key] = true;
});




 document.addEventListener('keydown', (event) => {
    keysPressed6[event.key] = true;
 //if
    if (keysPressed6['Control'] && event.key == '6') {
        Games1 = 0
        localStorage.setItem('G1', Games1);
        Games2 = 0
        localStorage.setItem('G2', Games2);

    }
 });
 
 document.addEventListener('keyup', (event) => {
    delete keysPressed6[event.key];
 });
//end--------------------------------------------------------------------------

Reset1.addEventListener("click", function() {
    Score1 = 0
    localStorage.setItem('S1', Score1);
});

Reset2.addEventListener("click", function() {
    Score2 = 0
    
    localStorage.setItem('S2', Score2);
});

ResetG1.addEventListener("click", function() {
    Games1 = 0
    localStorage.setItem('G1', Games1);
});

ResetG2.addEventListener("click", function() {
    Games2 = 0
    localStorage.setItem('G2', Games2);
});

ResetA.addEventListener("click", function() {
    Games2 = 0
    Games1 = 0
    Score2 = 0
    Score1 = 0
    localStorage.setItem('G2', Games2);
    localStorage.setItem('G1', Games1);
    localStorage.setItem('S2', Score2);
    localStorage.setItem('S1', Score1);
});
let team1 = document.getElementById("text").value;
let team2 = document.getElementById("text2").value;


function passvalues(){
    
    var team1 = document.getElementById("text").value;
    localStorage.setItem("T1",team1);
    
    

}

function passvalues2(){
    
    var team2 = document.getElementById("text2").value;
    localStorage.setItem("T2",team2);
    
    return false;

}

function passcolor(){
    
    var gamec = document.getElementById("colorTwo").value;
    localStorage.setItem("TC2",gamec);
    
    return false;

}








// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'
    default: 'rgba(255, 17, 0, 1)',

    swatches: [
        'rgba(255, 17, 0, 1)',
        'rgba(0, 81, 255, 1)',
        'rgba(111, 0, 255, 1)',
        'rgba(255, 186, 0, 1)',
        'rgba(70, 87, 176, 1)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: false,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
           
        }
    }
});

pickr.on('change', (color, source, instance) => {
    
    const rgbaColor = color.toRGBA().toString();
    console.log(rgbaColor)
    localStorage.setItem("C1",rgbaColor);
    
    

    
   
})


// Simple example, see optional options for more configuration.
const pickr2 = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'
    default: 'rgba(0, 81, 255, 1)',

    swatches: [
        'rgba(255, 17, 0, 1)',
        'rgba(0, 81, 255, 1)',
        'rgba(111, 0, 255, 1)',
        'rgba(255, 186, 0, 1)',
        'rgba(70, 87, 176, 1)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: false,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            default: true,
           
        }
    }
});



