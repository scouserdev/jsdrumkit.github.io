window.addEventListener("keydown", (e) => {
  let classTriggered = document.getElementsByClassName("key");
  let keyPressed = e.key;
  for (let i = 0; i < classTriggered.length; i++) {
    let buttonValue = document.getElementsByTagName("kbd")[i];
    if(keyPressed.toUpperCase()===buttonValue.innerText){
         classTriggered[i].classList.toggle('effect');
         const audio = document.getElementsByTagName('audio')[i];
         if(audio.innerText===buttonValue.innerText){
             audio.currentTime=0;
             audio.play();
         }  
        classTriggered[i].addEventListener("transitionend",() => {
            classTriggered[i].classList.remove('effect')
        })
        }
}
})

  
