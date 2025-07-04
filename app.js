var thumb = document.querySelectorAll(".thumb .box-img");
var content = document.querySelectorAll(".content");
var btnnext = document.querySelector(".next");
var btnprev = document.querySelector(".prev");
var textContent = document.querySelectorAll(".text-content");
console.log(textContent);
thumb.forEach(function(item){
    item.addEventListener("click",function(){
        // console.log(this.querySelector("img").src);
        var srcImage = this.querySelector("img").src
        content[3].style = `background: url(${srcImage}) center/cover no-repeat`;
    })
})
var index = 0;
setInterval(function(){
    
    if(index >=1){
        thumb[index-1].classList.remove('shadow');
    }
    index ++;
    if(index >4){
        index = 1;
        // console.log(index);
        content[3].style = `background: url(${index}.jpg) center/cover no-repeat`;
        // console.log(thumb[index-1]);
        thumb[index-1].classList.add('shadow');
        textContent[3].classList.add("move");
        btnnext.style = `background-color:white;color:black`;
    }
    else{
        // console.log(index);
        content[3].style = `background: url(${index}.jpg) center/cover no-repeat`;
        textContent[3].classList.add("move");
        // console.log(thumb[index-1]);
        thumb[index-1].classList.add('shadow');
        btnnext.style = `background-color:white;color:black`;
    }
    setTimeout(function(){
        textContent[3].classList.remove("move");
        btnnext.style = `background-color: rgb(14, 135, 18);`;
    },3000)
},2000)

btnnext.addEventListener("click",function(){
    var content = document.querySelectorAll(".content");
    console.log(content[index-1]);
    console.log(index);

})

btnprev.addEventListener("click",function(){


})
