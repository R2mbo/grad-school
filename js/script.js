let myhome = document.getElementById("p01");


document.addEventListener("scroll",function(){
    if(window.scrollY === 0){
        myhome.classList.add("active")
    }else {
        myhome.classList.remove("active")
    }
})