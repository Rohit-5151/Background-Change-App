let btn1  = document.querySelector("#btn")
let crntmd = "light";
let body = document.querySelector("body");

btn1.addEventListener("click", ()=>{
    if(crntmd==="light")
    {
        crntmd="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        crntmd="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(crntmd)
})