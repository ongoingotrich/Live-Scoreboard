let ButtonS1 = document.getElementById("S1");
let ButtonS2 = document.getElementById("S2");
let Reset = document.getElementById("Reset");
let ButtonG1 = document.getElementById("G1");
let ButtonG2 = document.getElementById("G2");
let ResetG = document.getElementById("ResetG");

let Score1 = 0;
let Score2 = 0;
let Games1 = 0;
let Games2 = 0;

localStorage.setItem('S1', Score1);
localStorage.setItem('S2', Score2);
localStorage.setItem('G1', Games1);
localStorage.setItem('G2', Games2);


ButtonS1.addEventListener("click", function() {
    Score1 = Score1 + 1;
    localStorage.setItem('S1', Score1);
});

ButtonG1.addEventListener("click", function() {
    Games1 = Games1 + 1;
    localStorage.setItem('G1', Games1);
});

ButtonS2.addEventListener("click", function() {
    Score2 = Score2 + 1;
    localStorage.setItem('S2', Score2);
});

ButtonG2.addEventListener("click", function() {
    Games2 = Games2 + 1;
    localStorage.setItem('G2', Games2);
});

Reset.addEventListener("click", function() {
    Score2 = 0
    Score1 = 0
    localStorage.setItem('S2', Score2);
    localStorage.setItem('S1', Score1);
});

ResetG.addEventListener("click", function() {
    Games2 = 0
    Games1 = 0
    localStorage.setItem('G2', Games2);
    localStorage.setItem('G1', Games1);
});

function passvalues(){
    
    var team1 = document.getElementById("text").value;
    localStorage.setItem("T1",team1);
    
    

}

function passvalues2(){
    
    var team2 = document.getElementById("text2").value;
    localStorage.setItem("T2",team2);
    
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
    localStorage.setItem("C2",rgbaColor);
    

    
   
})



