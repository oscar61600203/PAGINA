const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {

    alert('AY NO QUE GRAVE :( , CREI QUE NOS LLEVABAMOS BIEN')
    alert('FELIZ DIA DE LA MUJER MELANY, QUE TENGAS UN HERMOSO DIA. ERES UNA MUJER MUY AMABLE')
});


const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {

    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);

    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');

    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
    
})