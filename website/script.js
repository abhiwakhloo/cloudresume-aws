function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const counter = document.querySelector(".counter-number");
async function updateCounter(){
   try {
    counter.innerHTML = `Loading...`;
    let response = await fetch("https://q7ak7fz2qv7muetgdlzdjsbsvu0sopwi.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
    
   } catch (error) {
    counter.innerHTML = "Couldn't load views";
   }
 
}
updateCounter();