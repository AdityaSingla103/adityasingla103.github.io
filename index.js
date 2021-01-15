let order =[0,0,0,0,0];
let para=document.getElementsByClassName("num")

function addorder(idnum){
    let txt = para[idnum].textContent
    txt = parseInt(txt) +1;
    para[idnum].textContent = txt;
    order[idnum] = txt;
    console.log(order);
}
function suborder(idnum){
    let txt = para[idnum].textContent
    txt = parseInt(txt) -1;
    para[idnum].textContent = txt;
    order[idnum] = txt; 
    console.log(order);
}
