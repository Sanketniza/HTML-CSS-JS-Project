
 const qrinput = document.getElementById("qr-input");
 const qrimage = document.getElementById("qr-image");
 const savebtn = document.getElementById("save-btn");
 const btn = document.getElementById("qr-btn");

 console.log(qrinput , qrimage , savebtn , btn);

 btn.addEventListener("click" , () => {

     const inputValue = qrinput.value;
     console.log(inputValue);

     if(!inputValue) {
         alert("Please enter a URL");
         return;
     }

     else {
         qrimage.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${inputValue}`;
      
     }

     savebtn.addEventListener("click" , () => {
         link = document.createElement("a");
         link.download = "qrcode.png";
         link.href = qrimage.src;
         link.click();
     })


 })