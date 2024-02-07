const dBtn= document.getElementById("dBtn");
const rBtn= document.getElementById("rBtn");
const iBtn= document.getElementById("iBtn");
const myLabel= document.getElementById("myLabel");
let count =0;

iBtn.onclick = function(){
    count++;
    myLabel.textContent=count;
}
rBtn.onclick = function(){
    count=0;
    myLabel.textContent=count;
}
dBtn.onclick = function(){
    count--;
    myLabel.textContent=count;
}
