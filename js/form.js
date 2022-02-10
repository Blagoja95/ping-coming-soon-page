const form = document.querySelector('.main__form');
const input = document.querySelector('.main__input');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let txt = input.value;
    console.log(txt);

    let part1 = txt.split('@');
    console.log(part1);

    let part2 = part1[1].split('.'); 
    console.log(part2);
    
    if(txt === ""){
        form.classList.add('active');
    }
    else if(part1[0]){
        form.classList.add('active');

    }
    else{
        form.classList.remove('active');

    }
})