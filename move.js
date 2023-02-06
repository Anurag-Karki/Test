var boxes=document.querySelectorAll('.box');
window.addEventListener('scroll',checkBoxes);

checkBoxes();
function checkBoxes(){
    var tBottom=window.innerHeight/10 *3;

    boxes.forEach(box=>{
        var boxTop=box.getBoundingClientRect().top;

        if(boxTop<=tBottom){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
    })
    
}

function banner() {
    document.getElementById("Banner").setAttribute('style', 'background-image:url("scene.jpg"); ');
};
function banner_leave() {
    document.getElementById("Banner").setAttribute('style', 'background-image:url("astro.jpg"); ');
};

animated.onclick = function () {
    this.style.backgroundColor = 'white';
    this.style.color='black';
    this.style.border='none';
};