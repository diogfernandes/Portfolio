const toogle = document.getElementById('toogle-dark');
const body = document.querySelector('body');
const animation = document.querySelector('after')

toogle.addEventListener('click', function(){
    this.classList.toggle('bi-moon-fill')
    if(this.classList.toggle("bi-brightness-high-fill")){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1.5s';
    }else{
        body.style.background ='black';
        body.style.color = 'white';
        body.style.transition = '1.5s';
    }
})

