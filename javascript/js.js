let hamburguer = document.querySelector('.menu-hamburguer')
let dropdown = document.querySelectorAll('.dropdown')


hamburguer.addEventListener('click', function(){
    let nav = document.querySelector('.nav')
    if(nav.style.display === ''){
        nav.style.display = 'flex';
        hamburguer.children[0].src = '/images/icon-close.svg'
        document.body.style.overflowY = 'hidden'
    }else {
        nav.style.display = '';
        hamburguer.children[0].src = '/images/icon-hamburger.svg'
        document.body.style.overflowY = 'scroll'
    }
})


for(const divs of dropdown){
        divs.addEventListener('click', function(){

        for(const divs of dropdown) {
                if(divs.children[1].classList.contains('dropdownContent-click')){
                    divs.children[1].classList.remove('dropdownContent-click')
                }  
            }
            divs.children[1].classList.add('dropdownContent-click');
        }
        )}

for(const list of dropdown) {
    list.addEventListener('mouseover', function(){
        console.log(list.firstElementChild.firstElementChild.src)
        if(list.firstElementChild.firstElementChild.getAttribute('src') == "/images/icon-arrow-light.svg"){
            list.firstElementChild.firstElementChild.src = "/images/icon-arrow-dark.svg"
            list.firstElementChild.firstElementChild.style = 'transform: rotate(180deg);'
        }
    })
}

for(const list of dropdown) {
    list.addEventListener('mouseout', function(){
        console.log(list.firstElementChild.firstElementChild.src)
        if(list.firstElementChild.firstElementChild.getAttribute('src') == "/images/icon-arrow-dark.svg"){
            list.firstElementChild.firstElementChild.src = "/images/icon-arrow-light.svg"
            list.firstElementChild.firstElementChild.style = 'transform: rotate(0deg);'

        }
    })
}



