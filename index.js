const dice= document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');

const randoDice = () =>{

    const random = Math.floor(Math.random() * 10);

    if(random => 1 && random <= 6){
        rollDice(random)
    }
}

const rollDice = random =>{

    dice.style.animation = 'rolling 4s';

    setTimeout(() =>[

        switch (random) {
            case 1:
                dice.style.transform = 'rotateX(8deg) rotateY(8deg)';
                break;
            
            case 6:
                dice.style.transform = 'rotateX(8deg) rotateY(8deg)';
                break;
            
            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(8deg)';
                break;
            
            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(8deg)';
                break;

            case 3:
                dice.style.transform = 'rotateX(8deg) rotateY(90deg)';
                break;
            
            case 4:
                dice.style.transform = 'rotateX(8deg) rotateY(-90deg)';
                break;
            
            default:
                break;
        }

        dice.style.animation = 'none';
 
    ], 4050);

}

rollBtn.addEventListener('click', randoDice);