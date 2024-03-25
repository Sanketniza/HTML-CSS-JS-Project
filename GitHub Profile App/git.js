const APIURL = "https://api.github.com/users/";

const main = document.querySelector("#main");
const searchBox = document.querySelector("#search");

const getUser = async(username) => {
    const response = await fetch(APIURL + username);
    const data = await response.json()
    const card = `
        <div class="card">

            <div>
                <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
            </div>

            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>

                <ul class="info">
                    <li>${data.followers}<strong>Followers</strong></li>
                    <li>${data.following}<strong>Following</strong></li>
                    <li>${data.public_repos}<strong>Repos</strong></li>
                </ul>

                <div id="repos">
                  
                </div>

            </div>

        </div>
    `
    main.innerHTML = card;
    getRepos(username)
}


// init call
getUser("sanketniza")


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
    if (searchBox.value != "") {
        getUser(searchBox.value);
        searchBox.value = ""
    }
    return false;
}


searchBox.addEventListener(
        "focusout",
        function() {
            formSubmit()
        }
    )
    /**
     *   <a class="repo" href="#" target="_blank">Repo 1</a>
                        <a class="repo" href="#" target="_blank">Repo 2</a>
                        <a class="repo" href="#" target="_blank">Repo 3</a>
     */