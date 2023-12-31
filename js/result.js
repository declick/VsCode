const aboutMe = () => {
  terminal.insertAdjacentHTML("beforeend",
    `<p class="result aboutmeresult">
          ${data[language].aboutme}
        </p>`);
};

const skills = () => {
  terminal.insertAdjacentHTML("beforeend",
    `<p class="result skillsresult">
          ${data[language].skills}
        </p>`);
};
const education = () => {
  terminal.insertAdjacentHTML("beforeend",
    `<p class="result educationresult">
          ${data[language].education}
        </p>`);
};

const clear = () => {
  terminalBody.innerHTML = "";
  terminalBody.insertAdjacentHTML("afterbegin", `<div id="terminal"></div>`);
};

const experiences = () => {
  terminal.insertAdjacentHTML("beforeend", `
  <table class="result experienceresult">
      ${data[language].experience}
  </table>`);
};

const getCv = () => {
  terminal.insertAdjacentHTML("beforeend",
    `<p class="result cvresult">${data[language].cv}</p>`);
  const a = document.createElement("a");
  a.href = "ressources/CV Quentin Minziere.pdf";
  a.setAttribute("download", "CV Quentin Minziere.pdf");
  a.setAttribute("target", "blank");
  a.click();
}

const getLinkedin = () => {
  terminal.insertAdjacentHTML("beforeend",
    `<p class="result redirectresultLinkedin">${data[language].redirectLinkedin}</p>`);
  const a = document.createElement("a");
  a.href = "https://www.linkedin.com/in/quentin-minziere/";
  a.setAttribute("target", "blank");
  a.click();
}

const getGithub = () => {
  terminal.insertAdjacentHTML("beforeend",
    `<p class="result redirectresultGithub">${data[language].redirectGithub}</p>`);
  const a = document.createElement("a");
  a.href = "https://github.com/declick";
  a.setAttribute("target", "blank");
  a.click();
}

const help = () => {
  terminal.insertAdjacentHTML("beforeend",
    `<p class="result">
          <ul class="helpresult">
            ${data[language].help}
          </ul>
        </p>`);
};

const hobby = () => {
  terminal.insertAdjacentHTML("beforeend",
    `<p class="result hobbyresult">
          ${data[language].hobby}
        </p>`);
};


const project = () => {
  terminal.insertAdjacentHTML("beforeend",
    `<div class="resultproject">
        ${data[language].project}
    </div>`);
};


const website = (result) => {
  terminal.insertAdjacentHTML("beforeend",
    `${data[language].website}`);
  const a = document.createElement("a");

  if (result === "projets[1].website" || result === "projects[1].website") {
    a.href = "https://herokuapp.com/";
  } else if (result === "projets[2].website" || result === "projects[2].website") {
    a.href = "https://herokuapp.com/";
  } else if (result === "projets[3].website" || result === "projects[3].website") {
    a.href = "https://herokuapp.com/";
  } else if (result === "projets[4].website" || result === "projects[4].website") {
    a.href = "https://herokuapp.com/";
  } else if (result === "projets[6].website" || result === "projects[6].website") {
    a.href = "https://herokuapp.com/";
  } else if (result === "projets[7].website" || result === "projects[7].website") {
    a.href = "https://herokuapp.com/";
  } else if (result === "projets[8].website" || result === "projects[8].website") {
    a.href = "https://herokuapp.com/  ";
  } else if (result === "projets[9].website" || result === "projects[9].website") {
    a.href = "https://herokuapp.com/";
  }
  a.setAttribute("target", "blank");
  a.click();
}

const ls = (y, result) => {
  if (y === 0 && result === "ls -a") {
    terminal.insertAdjacentHTML("beforeend",
      `<div class="result ls lsresult1">${data[language].ls1}</div>`);
  } else if (y === 0 && result === "ls") {
    terminal.insertAdjacentHTML("beforeend",
      `<div class="result ls lsresult2">${data[language].ls2}</div>`);
  } else if (y === -1 && result === "ls") {
    terminal.insertAdjacentHTML("beforeend",
      `<div class="result ls">
          </div>`);
  } else if (y === -1 && result === "ls -a") {
    terminal.insertAdjacentHTML("beforeend",
      `<div class="result ls">
    </div>`);
  }
}
