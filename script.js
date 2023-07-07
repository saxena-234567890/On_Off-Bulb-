var btn=document.getElementById("toggleButton")
var bulb=document.getElementById("bulb");
btn.addEventListener('click',ToggleBulb);
function ToggleBulb(e){
    if(btn.textContent.includes('on')){
        bulb.src="light_bulb.png";
        btn.textContent="turn off"
    }
    else{
        bulb.src="bulb_off.jpg";
        btn.textContent="turn on"
    }

}