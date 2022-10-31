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
        document.getElementById("balance").innerHTML = bal;
    }
    }

addEventListener("keydown", function(e){
    if (e.code == "KeyD") vxr = vxr_value;
    if (e.code == "KeyA") vxl = vxl_value;
    if (e.code == "KeyS") vy = vy_value;
    if (e.code == "KeyW") vy = vy_minus_value;

})

addEventListener("keyup", function(e){
    if (e.code == "KeyD") vxr = 0;
    if (e.code == "KeyA") vxl = 0;
    if (e.code == "KeyS") vy = 0;
    if (e.code == "KeyW") vy = 0;
})