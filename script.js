let likTot = 0

function addlike() {
    
    likTot++

    let Total = document.querySelector("#cantLike");
    Total.innerText =  likTot + ' like(s)'
   
}