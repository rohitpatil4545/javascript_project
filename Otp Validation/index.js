 var btn = document.getElementById("button"); 
var value=0;
 btn.addEventListener("click", function() {
    if (value==0){ 
        btn.textContent="Light-Mode";
        document.body.style.backgroundColor="black";
        value=1;
    }
    else{
        btn.textContent='Dark-Mode';
        document.body.style.backgroundColor='white';
        value=0;
    }
});

