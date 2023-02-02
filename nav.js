
//let link = document.querySelectorAll("nav ul a")
//
//link.forEach((element, index) => {
//    element.addEventListener("click", (e)=>{
//        e.preventDefault()
//
//    })
//})

let content = document.querySelector("[role='main']")

let pages = {
    "#page1": "page1.html",
    "#page2": "page2.html",
    "#page3": "page3.html",
}

window.addEventListener("hashchange", () => {
    loadPage(window.location.hash)
})  

function loadPage(pageHash) {
    fetch(pages[pageHash])
        .then((response) => response.text())
        .then((data) =>{
            content.innerHTML = data
        })
}

if(!window.location.hash){
    loadPage("#page1")
}
else{
    loadPage(window.location.hash)
}