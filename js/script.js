/* SOUS-MENU */
const toggleSubMenu = (element) => {
  let submenu = element.querySelector('.submenu');

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

  if (submenu.style.display === 'block') {
    submenu.style.display = 'none';
  } else {
    submenu.style.display = 'block';
  }
};


/* SIDE-MENU TOGGLE */
document.addEventListener('DOMContentLoaded', () => {
  const toggleMenuButton = document.getElementById('toggleMenu');
  const menuOption = document.querySelector('.menu-option');
  const console = document.querySelector('.console');
  const portfolio = document.querySelector('.portfolio');
  const tabsContainer = document.querySelector('.tabs-container');
  const urlContainer = document.querySelector('.url-container');

  const disableToggleMenuButton = () => {
    toggleMenuButton.disabled = true;
  };

  if (window.innerWidth < 920) {
    disableToggleMenuButton();
  }

  toggleMenuButton.addEventListener('click', () => {
    // Vérifie à nouveau la largeur de la fenêtre avant de permettre le clic
    if (window.innerWidth >= 920) {
      menuOption.classList.toggle('hidden');
      console.classList.toggle('menu-hidden');
      portfolio.classList.toggle('menu-hidden');
      tabsContainer.classList.toggle('menu-hidden');
      urlContainer.classList.toggle('menu-hidden');
    }
  });
});


/* CONSOLE TOGGLE */
document.addEventListener('DOMContentLoaded', () => {
  const toggleConsole = document.getElementById('toggleConsole');
  const menuOption = document.querySelector('.console');
  const portfolio = document.querySelector('.portfolio');
  const mouse = document.querySelector('.home-hero__mouse-scroll-cont');

  const disableToggleConsole = () => {
    toggleConsole.disabled = true;
  };

  if (window.innerWidth < 920) {
    disableToggleConsole();
  }

  toggleConsole.addEventListener('click', () => {
    if (window.innerWidth >= 920) {
      menuOption.classList.toggle('hidden');
      portfolio.classList.toggle('console-hidden');
      mouse.classList.toggle('console-hidden');
    }
  });
});


/* NAVIGATION */
document.addEventListener('DOMContentLoaded', () => {
  const scrollToSection = (targetSection) => {
    let targetElement = document.getElementById(targetSection);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // Écoute les clics sur les éléments du menu
  let menuItems = document.querySelectorAll('.show-pre li');
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (e) => {
      e.preventDefault();
      let targetSection = menuItem.querySelector('span').textContent.toLowerCase().trim();
      scrollToSection(targetSection);
    });
  });

  // Écoute les clics sur les onglets
  let tabItems = document.querySelectorAll('.tabs-container .tabs');
  tabItems.forEach((tabItem) => {
    tabItem.addEventListener('click', (e) => {
      e.preventDefault();
      let targetSection = tabItem.textContent.toLowerCase().trim();
      scrollToSection(targetSection);
    });
  });
});


/* POPUP PHOTO */
document.addEventListener('DOMContentLoaded', () => {
  let profileIcon = document.getElementById('profileIcon');
  let profileImage = document.getElementById('profileImage');
  let profileText = document.getElementById('profileText');

  // Gestionnaire pour le survol
  profileIcon.addEventListener('mouseover', () => {
    profileImage.src = './assets/images/me.WebP';
    profileImage.style.display = 'block';
    profileText.style.display = 'block';
  });

  // Gestionnaire pour quitter le survol
  profileIcon.addEventListener('mouseout', () => {
    profileImage.style.display = 'none';
    profileText.style.display = 'none';
  });
});


/* EFFET WOW*/
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('confetti-trigger');
  const canvas = document.querySelector('#confetti-canvas');

  const onButtonClick = (event) => {
    // Récupére les coordonnées du bouton
    const buttonRect = event.target.getBoundingClientRect();
    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;

    const startX = window.innerWidth / 2;
    const startY = window.innerHeight;

    let myConfetti = confetti.create(canvas, {
      resize: true,
      useWorker: true
    });
    myConfetti({
      particleCount: 100,
      spread: 160,
      origin: { x: buttonX / window.innerWidth, y: buttonY / window.innerHeight }
    });
  }

  btn.addEventListener('click', onButtonClick);
});



/* EASTER EGG */
const modal = document.getElementById('videoModal');
const easterEggTrigger = document.getElementById('easterEggTrigger');
const closeModal = document.getElementById('closeModal');
const video = document.getElementById('easterEggVideo');

video.addEventListener('timeupdate', function () {
  if (video.currentTime === video.duration) {
    closeModal.click();
  }
});

easterEggTrigger.addEventListener('click', () => {
  modal.style.display = 'block';
  video.play();
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  video.pause();
  video.currentTime = 0;
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    video.pause();
    video.currentTime = 0;
  }
});


/* DARK MODE */
document.addEventListener('DOMContentLoaded', () => {
  const configIcon = document.getElementById('config-icon')
  const portfolio = document.getElementById('portfolio')

  // Tableau de couleurs que je souhaite utiliser
  let colors = ['#003847', '#181f2f', '#1e1e1e']

  if (configIcon && portfolio) {
    let colorIndex = 0; // Variable pour suivre l'index de la couleur actuelle

    configIcon.addEventListener('click', () => {
      // Change la couleur du portfolio en utilisant l'index actuel dans le tableau de couleurs
      portfolio.style.backgroundColor = colors[colorIndex]

      // Incrémente l'index pour passer à la couleur suivante
      colorIndex++;

      // Si l'index dépasse la dernière couleur, reviens à la première couleur
      if (colorIndex === colors.length) {
        colorIndex = 0;
      }
    })
  } else {
    console.error('Element with ID not found.')
  }
})


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


function logKey(e) {
  input = document.getElementById(`input${i}`)
  let result = input.value.toLowerCase();
  if (result[result.length - 1] === " ") {
    let modification = result.split('');
    modification.pop();
    result = Object.values(modification);
    result = result.join('');
  }

  if (e.ctrlKey && e.code === "KeyU") {
    input.value = "";
  }

  if (e.key === "ArrowUp") {
    if (historic.length > 0) {
      if (a >= historic.length) {
        a = historic.length - 1;
      }
      input.value = historic[a];
      a++;
    }
    e.preventDefault();
  }

  if (e.key === "ArrowDown") {
    if (a < 0) {
      input.value = "";
      a = 0;
    } else {
      a--;
      if (historic[a - 1] === undefined) {
        input.value = "";
        a = 0;
      } else {
        input.value = historic[a - 1];
      }
    }
    e.preventDefault();
  }


  if (e.key === 'Tab') {
    if (y === -1) {
      if (result[0] === "g") {
        input.value = "Quentin\\ MINZIERE/";
      }
      if (result[0] === "c" && !result.includes(" ") && result[1] !== "d") {
        input.value = "clear";
      }
    } else if (y === 0) {
      if (result[0] === "a" && language === "french") {
        input.value = "a propos";
      } else if (result[0] === "a" && language === "english") {
        input.value = "about me";
      }
      if (result[0] === "c" && !result.includes(" ") && result[1] !== "d") {
        input.value = "clear";
      }
      if (result[0] === "e") {
        input.value = "experiences";
      }
      if (result.includes("projets[") && !result.includes("]") && typeof result[12] !== "undefined" && result[12].match(/\d/) && language === 'french') {
        input.value = `${result}]`;
      }
      if (result.includes("projects[") && !result.includes("]") && typeof result[12] !== "undefined" && result[12].match(/\d/) && language === 'english') {
        input.value = `${result}]`;
      }
      if (result.includes("projets") && !result.includes("projets[") && language === 'french') {
        input.value = "projets[";
      }
      if (result.includes("projects") && !result.includes("projects[") && language === 'english') {
        input.value = "projects[";
      }
      if (result.includes("projets[") || result.includes("projects[")) {
        if (result.includes("]") && !result.includes(".website") && result[13] === "]") {
          input.value = `${result.substr(0, 14)}.website`;
        }
      }
      if (result[0] === "f") {
        input.value = "formations";
      }
      if (result[0] === "s") {
        input.value = "skills";
      }
      if (result[0] === "ed") {
        input.value = "education";
      }
      if (result.includes("c")) {
        input.value = "cv";
      }
      if (result.includes("l")) {
        input.value = "linkedin";
      }
      if (result.includes("g")) {
        input.value = "github";
      }
      if (result[0] === "h") {
        input.value = "help";
      }
      if (result[0] === "m" && result !== "projets" && !result.includes("projets[") && language === "french") {
        input.value = "rojets";
      }
      if (result[0] === "m" && result !== "projects" && !result.includes("projects[") && language === "english") {
        input.value = "projects";
      }
      if (result[0] === "p") {
        input.value = "passions";
      }
      if (result[0] === "c") {
        input.value = "clear";
      }
      if (result[0] === "e") {
        input.value = "exit";
      }

    }
    e.preventDefault();
  }

  if (e.key === 'Enter') {
    if (result === "") {
      e.preventDefault();
    } else {
      a = 0;
      historic.unshift(result);
      let answer = document.getElementById(`answer${i}`);
      let inputDelete = document.getElementById(`input${i}`);
      inputDelete.remove();
      answer.insertAdjacentHTML("beforeend", `<p class="resultwrite">${input.value}</p>`);
      i++;

      if (y === -1) {


      } else

        if (y === 0) {
          if (result === "help") {
            help();


          } else if (result === "ls" || result === "ls -a") {
            ls(y, result, secret);
          } else if (result === "a propos" || result === "about me") {
            aboutMe();
          } else if (result === "clear") {
            clear();
          } else if (result === "experiences") {
            experiences();
          } else if (result === "skills") {
            skills();
          } else if (result === "education") {
            education();
          } else if (result === "cv") {
            getCv();
          } else if (result === "linkedin") {
            getLinkedin();
          } else if (result === "github") {
            getGithub();
          } else if (result === "passions") {
            hobby();
          } else if (result === "projets" || result === "projects") {
            project();
          } else if (result === "projets[1].website" || result === "projects[1].website") {
            website(result);
          } else if (result === "projets[2].website" || result === "projects[2].website") {
            website(result);
          } else if (result === "projets[3].website" || result === "projects[3].website") {
            website(result);
          } else if (result === "projets[4].website" || result === "projects[4].website") {
            website(result);
          } else if (result === "projets[5].website" || result === "projects[5].website") {
            website(result);
          } else if (result === "projets[6].website" || result === "projects[6].website") {
            website(result);
          } else if (result === "projets[7].website" || result === "projects[7].website") {
            website(result);
          } else if (result === "projets[8].website" || result === "projects[8].website") {
            website(result);
          } else if (result === "projets[9].website" || result === "projects[9].website") {
            website(result);


          }
          else {
            terminal = document.getElementById("terminal");
            terminal.insertAdjacentHTML("beforeend", `<p class="notfound result">${result}: command not found
         ${data[language].notfound}`);
          }
        } else {

          if (result === "exit") {
            y--;
            terminal.insertAdjacentHTML("beforeend", `<br>`);
            localisation.textContent = "/portfolio";
          } else if (result === "clear") {
            clear();
          } else if (result === "ls" || result === "ls -a") {
            ls(y, result, secret);

          }

          else {
            terminal = document.getElementById("terminal");
            terminal.insertAdjacentHTML("beforeend", `<p class="notfound result">${result}: command not found
          ${data[language].notfoundmenu}</p>`);
          }
        }
      if (y === 1) {
        terminal = document.getElementById("terminal");

      } else {
        terminal = document.getElementById("terminal");
        terminal.insertAdjacentHTML("beforeend", `<i class="far fa-lightbulb">&nbsp;<p class="commande" id="answer${i}">PS C:/Desktop/VsCode:~/portfolio$</p><input type="text" class="input" id="input${i}" tabindex="-1">`);
        document.getElementById(`input${i}`).focus();
      }
      document.getElementById(`input${i}`).focus();
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  }
};



