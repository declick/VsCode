/* SOUS-MENU */

const toggleSubMenu = (element) => {
  // Trouve le sous-menu correspondant à l'élément cliqué
  let submenu = element.querySelector('.submenu');

  // Vérifie si l'élément a un sous-menu
  if (!submenu) {
      return;
  }

  // Cache tous les autres sous-menus
  let allSubmenus = document.querySelectorAll('.submenu');
  allSubmenus.forEach((item) => {
      if (item !== submenu) {
          item.style.display = 'none';
      }
  });

  // Positionne le sous-menu en dessous de l'élément cliqué
  let rect = element.getBoundingClientRect();
  submenu.style.position = 'absolute';
  submenu.style.top = rect.bottom + 'px';
  submenu.style.left = rect.left + 'px';

  // Affiche ou masque le sous-menu actuel
  if (submenu.style.display === 'block') {
      submenu.style.display = 'none';
  } else {
      submenu.style.display = 'block';
  }
};


            
/* TACHTBOT */

let terminal = document.getElementById("terminal");
let i = 0;
let a = 0;
let input = document.getElementById(`input${i}`);
let terminalBody = document.getElementById("terminal-body");
let main = document.querySelector("div.main");
let extend = document.getElementsByClassName("banner-button-extend")[0];
let closeWindow = document.getElementsByClassName("banner-button-close")[0];
let closeWindowPopup = document.getElementsByClassName("banner-button-close")[1];
let btnPopup = document.getElementById("btn-design");
let popup = document.getElementById("popup");
let filter = document.getElementById("filter");
let icon = document.getElementById("icon");
const root = document.querySelector(":root");
let svg = document.getElementById("githubcorner");
let localisation = document.getElementById("localisation");
let bannerTitle = document.getElementById("banner-title"); 
let banner = document.getElementById("banner");
let historic = [];
let secret = 0;
let y = 0;

window.addEventListener("click", () => {
  document.getElementById(`input${i}`).focus();
});

window.addEventListener("keydown", logKey);


function logKey(e){
  input = document.getElementById(`input${i}`)
  let result = input.value.toLowerCase();
  if (result[result.length -1] === " "){
    let modification = result.split('');
    modification.pop();
    result = Object.values(modification);
    result = result.join('');
  }

  if(e.ctrlKey && e.code === "KeyU"){
    input.value = "";
  }

  if(e.key === "ArrowUp"){
    if (historic.length > 0){
      if(a >= historic.length){
        a = historic.length - 1;
      }
      input.value = historic[a];
      a++;
    }
    e.preventDefault(); 
  }

  if(e.key === "ArrowDown"){
      if(a < 0){
        input.value = "";
        a = 0;
      }else{
        a--;
        if(historic[a-1] === undefined){
          input.value = "";
          a = 0;
        }else{
          input.value = historic[a - 1];
        }
      }
    e.preventDefault();
  }


  if (e.key === 'Tab'){
    if (y === -1){
      if(result[0] === "g"){
        input.value = "Quentin\\ MINZIERE/";
      } 
      if(result[0] === "c" && !result.includes(" ") && result[1] !== "d"){
        input.value = "clear";
      }
    } else if (y === 0){
      if(result[0] === "a" && language === "french"){
        input.value = "a-propos";
      } else if (result[0] === "a" && language === "english"){
        input.value = "about-me";
      }
      if(result[0] === "c" && !result.includes(" ") && result[1] !== "d"){
        input.value = "clear";
      }
      if(result[0] === "e"){
        input.value = "experiences";
      }
      if(result.includes("mes-projets[") && !result.includes("]") && typeof result[12] !== "undefined" &&result[12].match(/\d/) && language === 'french'){
        input.value = `${result}]`;
      }
      if(result.includes("my-projects[") && !result.includes("]") && typeof result[12] !== "undefined" &&result[12].match(/\d/) && language === 'english'){
        input.value = `${result}]`;
      }
      if(result.includes("mes-projets") && !result.includes("mes-projets[") && language === 'french'){
        input.value = "mes-projets[";
      }
      if(result.includes("my-projects") && !result.includes("my-projects[") && language === 'english'){
        input.value = "my-projects[";
      }
      if(result.includes("mes-projets[") || result.includes("my-projects[")){
        if(result.includes("]") && !result.includes(".website") && result[13] === "]"){      
          input.value = `${result.substr(0,14)}.website`;
        }
      }
      if(result[0] === "f"){
        input.value = "formations";
      }
      if(result[0] === "g"){
        input.value = "get ";
      }
      if(result.includes("get c")){
        input.value = "get cv";
      }
      if(result.includes("get l")){
        input.value = "get linkedin";
      }
      if(result.includes("get g")){
        input.value = "get github";
      }
      if(result[0] === "h"){
        input.value = "help";
      }
      if(result[0] === "m" && result !== "mes-projets" && !result.includes("mes-projets[") && language === "french") {
        input.value = "mes-projets";
      }
      if(result[0] === "m" && result !== "my-projects" && !result.includes("my-projects[") && language === "english") {
        input.value = "my-projects";
      }
      if(result[0] === "p"){
        input.value = "passions";
      }
      if(result[0] === "c"){
        input.value = "clear";
      }
      if(result[0] === "e"){
        input.value = "exit";
      }

    }
    e.preventDefault();
  }

  if(e.key === 'Enter'){
    if(result === ""){
      e.preventDefault();
    }else{
      a = 0;
      historic.unshift(result);
      let answer = document.getElementById(`answer${i}`);
      let inputDelete = document.getElementById(`input${i}`);
      inputDelete.remove();
      answer.insertAdjacentHTML("beforeend", `<p class="resultwrite">${input.value}</p>`);
      i++;

      if (y === -1){
        
       
      } else 
      
      if (y === 0){
        if(result === "help"){
          help();
        

        } else if(result === "ls" || result === "ls -a"){
          ls(y, result, secret);
        } else if (result === "a-propos" || result === "about-me"){
          aboutMe();
        } else if (result === "clear"){
          clear();
        } else if (result === "experiences"){
          experiences();
        } else if( result === "get cv"){
          getCv();
        } else if (result === "get linkedin"){
          getLinkedin();
        } else if (result === "get github"){
          getGithub();
        } else if (result === "passions"){
          hobby();
        } else if (result === "mes-projets" || result === "my-projects"){
          project();
        } else if (result === "mes-projets[1].website" || result === "my-projects[1].website"){
          website(result);
        } else if (result === "mes-projets[2].website" || result === "my-projects[2].website"){
          website(result);
        } else if (result === "mes-projets[3].website" || result === "my-projects[3].website"){
          website(result);
        } else if (result === "mes-projets[4].website" || result === "my-projects[4].website"){
          website(result);
        } else if (result === "mes-projets[5].website" || result === "my-projects[5].website"){
          website(result);
        } else if (result === "mes-projets[6].website" || result === "my-projects[6].website"){
          website(result);
        } else if (result === "mes-projets[7].website" || result === "my-projects[7].website"){
          website(result);
        } else if (result === "mes-projets[8].website" || result === "my-projects[8].website"){
          website(result);
        } else if (result === "mes-projets[9].website" || result === "my-projects[9].website"){
          website(result);
        
        
        }      
        else{
          terminal = document.getElementById("terminal");
          terminal.insertAdjacentHTML("beforeend", `<p class="notfound result">${result}: command not found
         ${data[language].notfound}`);
        }
      } else {

        if (result === "exit" ){
          y --;
          terminal.insertAdjacentHTML("beforeend", `<br>`);
          localisation.textContent = "/portfolio";
        } else if (result === "clear"){
          clear();
        } else if (result === "ls" || result === "ls -a"){
          ls(y, result, secret);
       
        } 
        
        else {
          terminal = document.getElementById("terminal");
          terminal.insertAdjacentHTML("beforeend", `<p class="notfound result">${result}: command not found
          ${data[language].notfoundmenu}`);
        }        
      }
      if (y === 1){
        terminal = document.getElementById("terminal");
      
      } else {
        terminal = document.getElementById("terminal");
        terminal.insertAdjacentHTML("beforeend", `<i class="far fa-lightbulb">&nbsp;<p class="commande" id="answer${i}">PS C:/Desktop/vscode:~/portfolio$</p><input type="text" autofocus class="input" id="input${i}" tabindex="-1">`);
      }
      document.getElementById(`input${i}`).focus();
     
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  }
}



/* POPUP PHOTO */

document.addEventListener('DOMContentLoaded', () => {
  let profileIcon = document.getElementById('profileIcon');
  let profileImage = document.getElementById('profileImage');
  let profileText = document.getElementById('profileText');

  // Gestionnaire pour le survol
  profileIcon.addEventListener('mouseover', () => {
    profileImage.src = './assets/images/me.png';
    profileImage.style.display = 'block';
    profileText.style.display = 'block';
  });

  // Gestionnaire pour quitter le survol
  profileIcon.addEventListener('mouseout', () => {
    profileImage.style.display = 'none';
    profileText.style.display = 'none';
  });
});


/* MINIMAP */
