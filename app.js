let hgb = document.querySelector(".hamburger");

let navMenu = document.querySelector(".nav-menu");

// hgb.addEventListener("click", ()=>{
//     let appear =hgb.classList.contains("active")
//     if (!appear){
//         hgb.classList.toggle("active");
//         navMenu.classList.toggle("active");

//     }else{
//         hgb.classList.remove("active");
//         navMenu.classList.remove("active");
//     }
// })

function hamburg(){
    let appear= hgb.classList.contains("active");
    if(!appear){
        hgb.classList.toggle("active");
        navMenu.classList.toggle("active");
    }else{
        hgb.classList.remove("active");
        navMenu.classList.remove("active");
    }
}
hgb.addEventListener("click", hamburg);