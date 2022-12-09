
const hidden = document.getElementsByClassName("faqs-content");


for(let item of hidden) {
    item.onclick= function(){
        const elements = document.getElementsByClassName("faqs-body");  
        for(let element of elements){
            element.classList.toggle("active");
        }
    }
}




// hidden.forEach(function(item) {
//     console.log(item);
//     item.onclick = function(){
//         const element = document.getElementsByClassName("faqs-body");
//         element.forEach(item2=>{
//             item2.classList.toggle("active");
//         })   
// }
// })



//magic scoll
// document.getElementById
// document.getElementsByClassName
// document.querySelector
// const observer = new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         console.log(entry);
//         if(entry.isIntersecting){
//             entry.target.classList.add('show')
//         }else{
//             entry.target.classList.remove('show')
//         }
//     })
// })

// const hiddenElements = document.querySelectorAll(".hidden")
// hiddenElements.forEach((el)=>observer.observe(el));