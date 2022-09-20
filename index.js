let count = 0;

document.getElementById("click").onclick = function(){

    count+=1;

    document.getElementById("counter").innerHTML = count;
}