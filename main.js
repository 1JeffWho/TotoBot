console.log("Main.js loaded")

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 2;
let vxl = 0;
let vxr = 0;
let vy = 0;
let x_coin = Math.floor(Math.random() * 950);
let y_coin = Math.floor(Math.random() * 550);
let score = 0;
let bal = 0;
let y_enemy = 600;
let x_enemy = 1000;
var gameActive = true;
var coin_area = 25;
let enemy_speed = 2;

function update(){
    if (gameActive == true){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        x += vxl;
        x += vxr;
    
        // coin
        ctx.fillStyle = "gold";
        ctx.beginPath();
    
        ctx.arc(x_coin, y_coin, coin_area, 0, 2 * Math.PI);
    
        ctx.stroke();
        ctx.fill();
    
        // coin border
        if (x_coin < 50){
            x_coin = 50;
        }
        if (y_coin < 50){
            y_coin = 50;
        }
        if (y_coin > 550){
            y_coin = 550;
        }
        if (x_coin > 950){
            x_coin = 950;
        }


        document.getElementById("coinarea").onclick = function(){
            if (bal >= 100){
                coin_area += 25;
                bal -= 100;
                document.getElementById("balance").innerHTML = bal;
            }
        }
        

        // if player gets coin
        if (coin_area == 25){
            if ((x+25 <= x_coin+(coin_area*2)) && (x+25 >= x_coin-(coin_area*2))){
                if ((y+25 <= y_coin+(coin_area*2)) && (y+25 >= y_coin-(coin_area*2))){
                    score += 1;
                    bal += 5;
                    x_coin = Math.floor(Math.random() * 950);
                    y_coin = Math.floor(Math.random() * 550);
                    document.getElementById("balance").innerHTML = bal;
                    document.getElementById("scoreh1").innerHTML = score;
                    enemy_speed += 0.022;
                    var rounded = Math.round((enemy_speed + Number.EPSILON) * 100) / 100;
                    document.getElementById("enemyspeed").innerHTML = rounded
                }     
            }     
        }
        else if ((x+25 <= x_coin+(coin_area+coin_area/2)) && (x+25 >= x_coin-(coin_area+coin_area/2))){
            if ((y+25 <= y_coin+(coin_area+coin_area/2)) && (y+25 >= y_coin-(coin_area+coin_area/2))){
                score += 1;
                bal += 5;
                x_coin = Math.floor(Math.random() * 950);
                y_coin = Math.floor(Math.random() * 550);
                document.getElementById("balance").innerHTML = bal;
                document.getElementById("scoreh1").innerHTML = score;
                enemy_speed += 0.022;
                var rounded = Math.round((enemy_speed + Number.EPSILON) * 100) / 100;
                document.getElementById("enemyspeed").innerHTML = rounded
            }
        }
    
        // enemy
        ctx.fillStyle = "red";
        ctx.fillRect(x_enemy, y_enemy, 50, 50);    
    
        // enemy movement
        if (x < x_enemy){
            x_enemy -= enemy_speed;
        }
        else{
            x_enemy += enemy_speed;
        }
        if (y < y_enemy){
            y_enemy -= enemy_speed;
        }
        else{
            y_enemy += enemy_speed;
        }    
        
    
        // enemy border
        if (x_enemy < 0){
            x_enemy = 1;
        }
        if (y_enemy < 3){
            y_enemy = 3;
        }
        if (y_enemy > 549){
            y_enemy = 549;
        }
        if (x_enemy > 950){
            x_enemy = 950;
        }
    
        // enemy touches player
        if ((x <= x_enemy+49) && (x >= x_enemy-49)){
            if ((y <= y_enemy+49) && (y >= y_enemy-49)){
                gameActive = false;
            }
        }
        // border
        if (x < 0){
            x = 0;
        }
        if (y < 0){
            y = 0;
        }
        if (y > 550){
            y = 550;
        }
        if (x > 950){
            x = 950;
        }
    
        y += vy;
        ctx.fillStyle = "black";
        ctx.fillRect(x, y, 50, 50);
    
        requestAnimationFrame(update)
    }
    else{     
        alert("So middle! Try it again.");
    }
}

update()    