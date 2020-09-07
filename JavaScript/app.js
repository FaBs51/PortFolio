const NavItems = document.getElementsByClassName('item');
const ShareBtn = document.querySelector('.clickBtn');
const Icons = document.querySelectorAll('.icons');


ShareBtn.addEventListener("click",EnableClickBtn);

function EnableClickBtn (){
    let x;
    for( x of Icons){
        x.classList.toggle('show');
    }
}
   

function ActiveClassAdd(){
    for (let i = 0; i < NavItems.length; i++) {
        const element = NavItems[i];
        element.addEventListener('click', function(){
            let still = document.getElementsByClassName('active');
            for (let j = 0; j < still.length; j++) {
                const change = still[j];
                if(change.classList.contains('active')){
                    change.className= 'item';
                }
            }
            this.className+= ' active';            
        });
    }
}

ActiveClassAdd();
