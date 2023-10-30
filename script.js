const randomColor =function(){
    const hex ='0123456789ABCDEF';
    let color ='#';
    for(let i=0;i<6;i++){
        color +=hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
// console.log(randomColor());
let interwalId
const startChangingColor =function(){
     if(!interwalId){
        interwalId=setInterval(changeBgColor,1000)
     }
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor()
    }
 
};
const stoptChangingColor=function(){
clearInterval(interwalId)
interwalId =null;

}
document.querySelector("#start").addEventListener('click',startChangingColor)
document.querySelector("#stop").addEventListener('click',stoptChangingColor)
