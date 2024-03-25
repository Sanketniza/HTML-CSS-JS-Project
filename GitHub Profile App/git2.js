
const APIURL = "https://api.github.com/users/";

const main = document.querySelector("#main");
const searchBox = document.querySelector("#search");

const gitUser = async (username) => {
    const response = await fetch(APIURL);
    const data = await response.json();

    const card = 
    `
       <div class="card">

       <div>
       <img id="avatar"  src="" alt="profile photo's">
     </div>
        
   <div>
         <h1>name</h1>
         <h2>bio</h2>

         <ul> 
           <li>### <strong>Following</strong></li>    
           <li>## <strong>Followers</strong></li>    
           <li>### <strong>Repos</strong></li>       
       </ul>

       <div id = "repos>
        //!    <a class="repo" href="###" target="_blank" >person 1</a>
        //!    <a class="repo" href="###" target="_blank" >person 1</a>
        //!    <a class="repo" href="###" target="_blank" >person 1</a>
       </div>
   </div>

</div> `

main.innerHTML = card;
getRepos(username)
}

const getRepos = async(username) => {
    const repos = document.querySelector("#repos")
    const response = await fetch(APIURL + username + "/repos")
    const data = await response.json();
    data.forEach(
        (item) => {

            const elem = document.createElement("a") // creating element a ( a tag)
            elem.classList.add("repo")  // given class name to created element or tag a 
            elem.href = item.html_url   // in href what url we are locating 
            elem.innerText = item.name  // print in html page
            elem.target = "_blank"      //
            repos.appendChild(elem)     // create this a tag for every repository , create automatically
        }
    )
}



const formSubmit = () => {
    if(searchBox.value != "") {
        getUser(searchBox.value);
        searchBox.value = "";
    }
}

searchBox.addEventListener(
    "focusout",
    function() {
        formSubmit()
    }
)