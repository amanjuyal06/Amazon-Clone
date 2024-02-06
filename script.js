// this imgs will contain an array of all images 
const imgs = document.querySelectorAll('.header-slider ul img') ;
const prev_btn = document.querySelector('.control-prev') ;
const next_btn = document.querySelector('.control-next') ;

let n = 1 ;   // first image 

function changeSlide(){
    for(let i=0; i< imgs.length; i++){
        imgs[i].style.display = 'none' ; // will hide all elements
    }
    imgs[n].style.display = 'block' ; // displays the first element 
}
changeSlide() ; // removes all images from the page

// setting the prev and next button 
prev_btn.addEventListener('click', (e)=>{
    if(n > 0){
        n-- ;
    }else{
        n = imgs.length - 1 ;
    }
    changeSlide() ; 
})

next_btn.addEventListener('click', (e)=>{
    if(n < imgs.length-1){
        n++;
    }else{
        n =0;
    }
    changeSlide() ; 
})


// setting up mouse scroller to slide images in products-slider div

const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault() ;
        item.scrollLeft += evt.deltaY ;
    });
    
}


