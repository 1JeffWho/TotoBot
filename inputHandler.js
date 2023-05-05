    vxr_value = 5;
    vxl_value = -5;
    vy_value = 5;
    vy_minus_value = -5;

document.getElementById("faster").onclick = function(){
    if (bal >= 100){
        vxr_value += 2.5;
        vxl_value -= 2.5;
        vy_value += 2.5;
        vy_minus_value -= 2.5;
        bal -= 100;
        document.getElementById("speed").innerHTML = vxr_value;
        document.getElementById("balance").innerHTML = bal;
    }
    }

document.addEventListener("keydown", function(e){
    if (e.code == "KeyD") vxr = vxr_value;
    if (e.code == "KeyA") vxl = vxl_value;
    if (e.code == "KeyS") vy = vy_value;
    if (e.code == "KeyW") vy = vy_minus_value;
    });
    
    document.addEventListener("keyup", function(e){
    if (e.code == "KeyD") vxr = 0;
    if (e.code == "KeyA") vxl = 0;
    if (e.code == "KeyS") vy = 0;
    if (e.code == "KeyW") vy = 0;
    });
    
// Get the buttons for each key
const wButton = document.getElementById('w');
const aButton = document.getElementById('a');
const sButton = document.getElementById('s');
const dButton = document.getElementById('d');

// Add a click event listener to the wButton
wButton.addEventListener('mousedown', () => {
    vy = vy_minus_value;
});
wButton.addEventListener('mouseup', () => {
    vy = 0;
});

// Add a touch event listener to the wButton
wButton.addEventListener('touchstart', () => {
    vy = vy_minus_value;
});
wButton.addEventListener('touchend', () => {
    vy = 0;
});

// Add a click event listener to the sButton
sButton.addEventListener('mousedown', () => {
    vy = vy_value;
});
sButton.addEventListener('mouseup', () => {
    vy = 0;
});

// Add a touch event listener to the sButton
sButton.addEventListener('touchstart', () => {
    vy = vy_value;
});
sButton.addEventListener('touchend', () => {
    vy = 0;
});

// Add a click event listener to the aButton
aButton.addEventListener('mousedown', () => {
    vxl = vxl_value;
});
aButton.addEventListener('mouseup', () => {
    vxl = 0;
});

// Add a touch event listener to the aButton
aButton.addEventListener('touchstart', () => {
    vxl = vxl_value;
});
aButton.addEventListener('touchend', () => {
    vxl = 0;
});

// Add a click event listener to the dButton
dButton.addEventListener('mousedown', () => {
    vxr = vxr_value;
});
dButton.addEventListener('mouseup', () => {
    vxr = 0;
});

// Add a touch event listener to the dButton
dButton.addEventListener('touchstart', () => {
    vxr = vxr_value;
});
dButton.addEventListener('touchend', () => {
    vxr = 0;
});

            