
 const text = [
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam vel rerum debitis dicta tenetur molestias, nesciunt autem? At eius voluptates et illum. Alias id consequuntur voluptatum qui, perferendis esse.",
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam vel rerum debitis dicta tenetur molestias, nesciunt autem? At eius voluptates et illum. Alias id consequuntur voluptatum qui, perferendis esse.",
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam vel rerum debitis dicta tenetur molestias, nesciunt autem? At eius voluptates et illum. Alias id consequuntur voluptatum qui, perferendis esse.",
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam vel rerum debitis dicta tenetur molestias, nesciunt autem? At eius voluptates et illum. Alias id consequuntur voluptatum qui, perferendis esse.",
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam vel rerum debitis dicta tenetur molestias, nesciunt autem? At eius voluptates et illum. Alias id consequuntur voluptatum qui, perferendis esse.",
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam vel rerum debitis dicta tenetur molestias, nesciunt autem? At eius voluptates et illum. Alias id consequuntur voluptatum qui, perferendis esse.",
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam vel rerum debitis dicta tenetur molestias, nesciunt autem? At eius voluptates et illum. Alias id consequuntur voluptatum qui, perferendis esse.",
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam vel rerum debitis dicta tenetur molestias, nesciunt autem? At eius voluptates et illum. Alias id consequuntur voluptatum qui, perferendis esse.",
 ];

 const num = document.querySelector("#item");
 const btn =  document.querySelector("button");
 const para = document.querySelector("#data");

const generator =() => {
   if(isNaN(num.value) || num.value < 0 || num.value > 7)
    {
      const randomIndex = Math.floor(Math.random() * text.length);
      para.innerHTML =`<p>{text[randomIndex]}</p>`;
    }

    else
    {
      
    }
}