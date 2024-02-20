const toggle_mode= document.getElementById("toggle_mode")
const dark_mode= document.getElementById("dark_mode")
const mainC = document.querySelector(".containermain")
const followerc = document.querySelector(".followerC")
toggle_mode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
   if( toggle_mode.style.display = 'none'
   ) { 
    dark_mode.style.display = 'block'
    mainC.style.backgroundColor = "#1E2A47"
    followerc.style.backgroundColor = "#141D2F" 
    containerChild.style.backgroundColor = "#1E2A47"
    followersContainer.style.backgroundColor = "#1E2A47" 

   } else {

    toggle_mode.style.display = 'block'
   }
  });
  



  
  
const input = document.querySelector(".input")
const button = document.querySelector(".search")
const containermain = document.querySelector(".containermain")
const main = document.querySelector(".mains")
const header = document.querySelector(".header")
const loader = document.querySelector('.loader')


button.addEventListener('click' , () => {
    
   

    let searchTerm = input.value;
    fetch(`https://api.github.com/users/${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {

header.style.marginTop = "100px"
main.style.marginTop = "-500px"
        const content_container = document.createElement("div")
        const content = document.getElementById("content")
        
        containermain.style.display = "none";
        content_container.innerHTML = `
        <div class="containerChild">
        <div class="textcontainer">
        <img src=${data.avatar_url} alt=${data.login}/>
        <div class="text1">
        <h1 class="hname">${data.name} </h1>
        <p class="p2">${data.bio}</p>
        </div>
        </div>
        <div class="followersContainer">
        <div class="ptexts">
        <p>Repos</p>
        <p>${data.public_repos} </p>
        </div>
        <div class="ptexts">
        <p>Followers</p>
        <p> ${data.followers} </p>
        </div>
        <div class="ptexts">
        <p>Following</p>
        <p> ${data.following} </p>
        </div>
        </div>
        <div class="locationcontainer">
        <div class="textdiv">
        <p> <i class="fa-solid fa-location-dot"></i> ${data.location } </p>
        <p> <i class="fa-brands fa-twitter"></i> Not Avalaible </p>
        </div>
        <div class="textdivB">
        <p><i class="fa-solid fa-link"></i>  ${data.gists_url }  </p>
        <p> <i class="fa-light fa-apartment"></i> @github  </p>
        </div>

        </div>

        </div>
        </div>
        ` ;
       
        content.appendChild(content_container);
        containerChild.style.backgroundColor = 'white'

    })
})
.catch((error) => {
    console.error("enter valid username", error);
});



