var btn=document.getElementById("btn")
var change=document.getElementById("name")
var value=0;
btn.addEventListener("click",function(){
    // change.textContent="Friends" 
    // change.style.color="green" 
    if (value==0)
    {
        change.textContent="Friends"
        change.style.color='green'
        btn.textContent='Remove-friend'
        value=1;
    }
    else 
    {
        change.textContent='Add Friend'
        change.style.color="red"
        btn.textContent="Friends" 
        value=0;
    }
})
