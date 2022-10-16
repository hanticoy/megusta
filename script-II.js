let likTot1 = 0
let likTot2 = 0
let likTot3 = 0



function addlike(id) {

    let Total = document.querySelector('#cantLike' + id);
    console.log(Total)
    if (id==1){
        likTot1++
        Total.innerText =  likTot1 + ' like(s)'
    }
    if (id==2){
        likTot2++
        Total.innerText =  likTot2+ ' like(s)'
    }
    if (id==3){
        likTot3++
        Total.innerText =  likTot3 + ' like(s)'
    }   
}