const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const rqTxt = document.querySelector('.txt');
const mainTxt = document.getElementById('main-txt');
let yPadding = 30;
let nPadding = 8;
let counter = 0;
const noTexts = ['please🥺','Thoda to soch ke dekho pika🥺','Please🥺','Ab aisa karegi?😟',`aren't you a good girl?🥺`, 'Kitkat khawabo🥺', 'Kinder Joy?🥺', 'Please🥺','please pika🥺','NehaPikaaaaa🥺',`:(`,':((('];
yesBtn.style.padding = `${yPadding}px 79px`;
yesBtn.style.fontSize = '20px';
const vDay = 14;
function checkForDate() {
    const date = new Date();
    console.log(date.getDate());
    if(date.getDate() < vDay) {
        document.body.innerHTML = '<h1 style="margin-top: 50vh; color: white">Ato Tara kiser?</h>';
        document.body.style.backgroundColor = 'black';
    }
    
}
checkForDate();



noBtn.style.padding = `${nPadding}px`
function increaseYes () {
    yesBtn.style.fontSize = `${yPadding+counter*25}px`;
}
function restoreYBtn() {
    yesBtn.style.padding = `${yPadding}px 79px`;
    yesBtn.style.fontSize = '20px';
}
function toggleGif(counter=0) {
    if(counter === 0) {
        document.querySelector('.gif-area').innerHTML = `<img src="g1.gif" class="gif">`;
    }else if(counter === 1){
        document.querySelector('.gif-area').innerHTML = `<img src="g5.gif" class="gif">`;
    }else if(counter === 2) {
        document.querySelector('.gif-area').innerHTML = `<img src="g2.gif" class="gif">`;
    }else if(counter === 3) {
        document.querySelector('.gif-area').innerHTML = `<img src="g4.gif" class="gif">`;
    }else if(counter === 4) {
        document.querySelector('.gif-area').innerHTML = `<img src="g6.gif" class="gif">`;
    }else if(counter === 5) {
        document.querySelector('.gif-area').innerHTML = `<img src="g2.gif" class="gif">`;
    }
    
}
noBtn.addEventListener('click',()=>{
    
    if(counter < noTexts.length) {
        
        increaseYes();
        rqTxt.innerHTML = noTexts[counter];
        counter++;
        toggleGif(counter);
    }else if(counter >= noTexts.length) {
        counter++;
        increaseYes();
    }

    

})

yesBtn.addEventListener('click', ()=>{
    document.querySelector('.gif-area').innerHTML = `<img src="g3.gif" class="gif">`;
    noBtn.remove();
    document.querySelector('.rq-text').remove();
    restoreYBtn();
    yesBtn.innerHTML = `<img src="heart-here.gif" class="gif-final">`;
    yesBtn.classList.add('ybs');
    mainTxt.innerHTML = `That's the best decision you've ever made !❤️`

})
