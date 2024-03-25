
const addbtn = document.querySelector("#addbtn");
const main = document.querySelector("#main");

// ^ secondary part...

 const addNote = (Text = "") => {

    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    
       <div class="tool">
       <i class="save fas fa-save"></i>
       <i class="trash fas fa-trash"></i> 
       </div>

       <textarea> ${text} </textarea>
    `;

    note.querySelector(".trash").addEventListener(
      "click" ,
        function() {
           note.remove();
           saveNotes();
        }
    )

    note.querySelector(".save").addEventListener(
      "click" ,
        function() {
           saveNotes();
        }
    )

    note.querySelector("textarea").addEventListener(
      "focusout" ,
         function() {
            saveNotes();
         }
    )

    main.appendChild(note);
    saveNotes();
 }

 const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");

    const data = [];
    notes.forEach(
       (note) => {
        data.push(note.value)
       }
    )

    console.log(data);

    if(data.length === 0 ){
       localStorage.removeItem("notes")
    }

    else{
      localStorage.setIem("notes",JSON.stringify(data))
    }
 }

 (
  function() {
     const lsnotes = JSON.parse(localStorage.getItem("notes"));
     if(lsnotes === null) return;
     lsnotes.forEach(
        (note) => {
           addNewNote(note);
        }
     )
  }
 )

 
 