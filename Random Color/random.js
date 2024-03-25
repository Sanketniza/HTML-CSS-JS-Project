

 const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomColor = "#" + randomNumber.toString(16);
    console.log(randomNumber,randomColor);  // TODO: due to this we can see the color code in console also
    document.body.style.backgroundColor = randomColor;
    document.getElementById("color-code").innerText = randomColor;  // TODO: due to this random color code we can see in the place of h2

    navigator.clipboard.writeText(randomColor); // TODO: due to this randomColor code we be auto copied only you have to paste it any where.

//?  document.getElementById("btn").addEventListener("click",getColor)

 }

 document.getElementById("btn").addEventListener("click",getColor)
 // event call

 // init call 
 // todo : this getColor function should applied random color to background when page is loaded.every loading time should be changed in background color.
 getColor();
  

