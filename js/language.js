
const data = {
  "english":
  {

    "welcome": "Welcome to my portfolio !" + "</br>" +
      " <mark>&nbsp; *  History restored </mark>" + "</br>" +
      "guest@mirje.dev:$ ~(c) MIRJE. All rights reserved 2023." + "</br></br>" +
      "To display the available commands type <code>help</code>." + "</br>" +
      "To validate each command press <em>Enter</em>, you can use the <em>Tabulation</em> key to help you complete a command.",

    "help": `<li><code>about me</code> : Display information about me</li>
    <li><code>experiences</code> : Displays the list of my experiences</li>
    <li><code>skills</code> : Lists all the technologies I have worked with</li>
    <li><code>education</code> : Shows my education history</li>
    <li><code>cv</code> : Download my CV</li>
    <li><code>linkedin</code> : Link to my Linkedin</li>
    <li><code>github</code> : Link to my Github</li>
    <li><code>passions</code> : Displays the list of my hobbies</li>
    <li><code>projects</code> : Displays the list of my personal projects</li>
    <li><code>clear</code> : Clean the terminal</li>
    <li><em>You can use the TAB key to complete a command line</em></li>
    <li><em>You can find the old commands with the up and down arrows</em></li>`,

    "aboutme": `{<br>
      &nbsp;&nbsp;&nbsp;<span class='home1'>"id"</span> : "Quentin MINZIERE",<br>
      &nbsp;&nbsp;&nbsp;<span class='home1'>"formation"</span> : "600h+ in 6 months - Full-Stack Developer - Javascript",<br>
      &nbsp;&nbsp;&nbsp;<span class='home1'>"language"</span> : "HTML, CSS, JS, Node, Git",<br>
      &nbsp;&nbsp;&nbsp;<span class='home1'>"framework"</span> : "React, Express",<br>
      &nbsp;&nbsp;&nbsp;<span class='home1'>"tools"</span> : "GitHub, Netlify, Figma",<br>
      &nbsp;&nbsp;&nbsp;<span class='home1'>"softSkills"</span> : "Agile Method, Teamwork",<br>
      &nbsp;&nbsp;&nbsp;<span class='home1'>"city"</span> : "Nantes/Paris, France"<br>
    }`,

    "experience": `<tr>
    <th>Date</th>
    <th>Company</th>
    <th>Position</th>
    <th class="description">Description</th>
  </tr>
  <tr>
  <td class="center">Nov 2022 - Dec 2022</td>
  <td>My little lashes</td>
  <td>Web developer</td>
  <td>Setting up a showcase website with Bootstrap, JS (JavaScript), and PHP.</td>
</tr>
  <tr>
    <td class="center">Mars 2021 - Sept 2021</td>
    <td>Marelli & Fils</td>
    <td>Smoke Ventilation Business Manager</td>
    <td>Team management, Preparation of construction quotes, and providing guidance on project optimization.</td>
  </tr>
  <tr>
    <td class="center">2019 - 2020</td>
    <td>Kelly Services - temp.</td>
    <td>Handler</td>
    <td>Nothing particularly interesting to say about it...</td>
  </tr>
  <tr>
    <td class="center">2013 - 2018</td>
    <td>FKC</td>
    <td>Service manager</td>
    <td>Opening or closing the restaurant. Post-Rush management: cash counting, inventory management, HACCP.</td>
  </tr>`,

    "skills": `{<br>
    &nbsp;&nbsp;<span class='sk'><span class='home2'>my training, I had to try out different development languages that I master today.</span><br><br>
    &nbsp;&nbsp;&nbsp;I can easily write code in the following languages:<br><br>
    &nbsp;&nbsp;&nbsp;<span class='home4'><span class='bold'>HTML<br>&nbsp;&nbsp;&nbsp;CSS<br>&nbsp;&nbsp;&nbsp;JavaScript<br>&nbsp;&nbsp;&nbsp;Node.JS</span></span><br><br>
    &nbsp;&nbsp;&nbsp;I have experience with the following frameworks:<br><br>
    &nbsp;&nbsp;&nbsp;<span class='home4'><span class='bold'>React.JS<br>&nbsp;&nbsp;&nbsp;ExpressJS<br>&nbsp;&nbsp;&nbsp;Bootstrap<br>&nbsp;&nbsp;&nbsp;Tailwind</span></span><br><br>
    &nbsp;&nbsp;&nbsp;As well as certain database management systems:<br><br>
    &nbsp;&nbsp;&nbsp;<span class='home4'><span class='bold'>MySQL<br>&nbsp;&nbsp;&nbsp;FireBase</span></span><br><br>
    &nbsp;&nbsp;&nbsp;Tools I often use:<br><br>
    &nbsp;&nbsp;&nbsp;<span class='home4'><span class='bold'>Git<br>&nbsp;&nbsp;&nbsp;GitHub<br>&nbsp;&nbsp;&nbsp;Visual Studio Code<br>&nbsp;&nbsp;&nbsp;Figma</span></span><br><br>
    &nbsp;&nbsp;&nbsp;I often work under the operating system  <span class='home4'>Linux.</span></span><br>
  }`,

    "education": `{<br>
    &nbsp;&nbsp;&nbsp;<span class='home2'>I studied as a developer within the <span class='bold'><a class='alink' target='_blank' href='https://3wacademy.fr/'>3WAcademy</a>.</span></span><br><br>
    &nbsp;&nbsp;&nbsp;<span class='home4'>Application developer training.</span><br>&nbsp;&nbsp;&nbsp;Année : <span class='home3'>2023</span><br><br>
    &nbsp;&nbsp;&nbsp;<span class='home4'>Full-stack developer training.</span><br>&nbsp;&nbsp;&nbsp;Année : <span class='home3'>2022<br></span><br>
    &nbsp;&nbsp;&nbsp;<span class='home4'>Junior full-stack developer diploma.</span><br>&nbsp;&nbsp;&nbsp;Année <span class='home3'>:2023</span><br>
  }`,

    "cv": `The resume upload will begin.`,

    "redirectLinkedin": `You will be redirected to Linkedin.`,

    "redirectGithub": `You will be redirected to Github.`,

    "hobby": `{<br>
    &nbsp;&nbsp;&nbsp;<span class='home1'>"Sport"</span> : "Hockey"<br>
    &nbsp;&nbsp;&nbsp;<span class='home1'>"Programmation"</span> : "JS, Node"<br>
    &nbsp;&nbsp;&nbsp;<span class='home1'>"Gaming"</span> : "FPS"<br>
    &nbsp;&nbsp;&nbsp;<span class='home1'>"Other"</span> : "Design, blockchaine"<br>
  }`,

    "project": `<table class="result">
  <tr>
    <th>index</th>
    <th>Name</th>
    <th>Tech</th>
    <th class="description">Description</th>
    <th>As a team?</th>
    <th>Github</th>
  </tr>
  <tr>
    <td class="center">1</td>
    <td class="center">mylittlelashes</td>
    <td class="center">HTML CSS JS PHP Hostinger</td>
    <td>Setting up a showcase website with Bootstrap for a company specializing in facial beauty.</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/declick/mylittlelashes" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">2</td>
    <td class="center">HackGit</td>
    <td class="center">PYTHON</td>
    <td>The goal was to complete a year of contributions on GitHub. This hack accomplishes that!</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/declick/HackGit" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">3</td>
    <td class="center">Cryptique Hash</td>
    <td class="center">HTML CSS JS GOOGLE-PLAY</td>
    <td>An application that encrypts plain text and decrypts the encrypted text. The code is resistant to brute force attacks, implemented using SHA512 encryption.</td>
    <td class="center">No</td>
    <td class="center"><a href="https://play.google.com/store/apps/details?id=com.declick.cryptiquehash" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">4</td>
    <td class="center">Portfolio Node</td>
    <td class="center">HTML CSS JS NODE</td>
    <td>The portfolio uses Axios to fetch GitHub repositories and display them as examples on the homepage, as well as in full detail in the "Projects" section, leveraging the GitHub API.</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/declick/PortfolioNode" target="blank">Lien</a></td>
  </tr> 
  <tr>
  <td class="center">5</td>
  <td class="center">Projet Final</td>
  <td class="center">HTML CSS JS REACT NODE SQL</td>
  <td>Final year projects completed in one month, a showcase website built with React/Node and a database.</td>
  <td class="center">No</td>
  <td class="center"><a href="https://github.com/declick/Projet-Final" target="blank">Lien</a></td>
</tr> 
  <tr>
    <td class="center">6</td>
    <td class="center">Quizz App</td>
    <td class="center">HTML CSS JS</td>
    <td>You need to find words of varying lengths based on categories, fortunately, you have assistance.</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/declick/Quizz-App" target="blank">Lien</a></td>
  </tr> 
  <tr>
  <td class="center">7</td>
  <td class="center">Portfolio VsCode</td>
  <td class="center">HTML CSS JS</td>
  <td>Presentation of my portfolio with a nod to VSCode. Integration of autocomplete, command history, etc. for the terminal.</td>
  <td class="center">No</td>
  <td class="center"><a href="https://github.com/declick/VsCode" target="blank">Lien</a></td>
</tr>
  </table><br>
  <p class="result"><em>You can see the site attached to the project using the command</em> <code>projects[index].website</code><em>, index being the number associated with the project.</em></p>`,

    "notfound": `<span class="notfoundlanguage"><br><br>Type the command <code>help</code> to display the list of available commands.</p></span>`,

    "website": `<p class="result websiteresult">You will be redirected to the project website.</p>`,

    "ls1": `
    <div>about me</div>
    <div>experiences</div>
    <div>skills</div>
    <div>education</div>
    <div>CV</div>
    <div>linkedin</div>
    <div>github</div>
    <div>passions</div>
    <div>projects</div>
    <div>clear</div>
    <div>projects[1].website</div>
    <div>projects[2].website</div>
    <div>projects[3].website</div>
    <div>projects[4].website</div>
    <div>projects[5].website</div>
    <div>projects[6].website</div>
    <div>projects[7].website</div>
  `,

    "ls2": `
    <div>about me</div>
    <div>experiences</div>
    <div>skills</div>
    <div>education</div>
    <div>CV</div>
    <div>linkedin</div>
    <div>github</div>
    <div>passions</div>
    <div>projects</div>
    <div>clear</div>
    <div>projects[1].website</div>
    <div>projects[2].website</div>
    <div>projects[3].website</div>
    <div>projects[4].website</div>
    <div>projects[5].website</div>
    <div>projects[6].website</div>
    <div>projects[7].website</div>`,

  },


  "french":
  {
    "welcome": "Bienvenue sur mon Portfolio !" + "</br>" +
      " <mark>&nbsp; *  History restored </mark>" + "</br>" +
      "guest@mirje.dev:$ ~(c) MIRJE. All rights reserved 2023." + "</br></br>" +
      "Pour afficher les commandes disponibles tapez <code>help</code>." + "</br>" +
      "Pour valider chaque commande appuyez sur <em>Entrer</em>, utiliser la touche <em>Tabulation</em> pour compléter une commande.",

    "help": `<li><code>a propos</code> : Affiche les informations me concernant</li>
    <li><code>experiences</code> : Affiche la liste de mes expériences</li>
    <li><code>skills</code> : Répertorie toutes les technologies avec lesquelles j'ai travaillé</li>
    <li><code>education</code> : Affiche mon parcours scolaire</li>
    <li><code>cv</code> : Télécharge mon CV</li>
    <li><code>linkedin</code> : Lien vers mon Linkedin</li>
    <li><code>github</code> : Lien vers mon Github</li>
    <li><code>passions</code> : Affiche la liste de mes passes temps</li>
    <li><code>projets</code> : Affiche la liste de mes projets personnels</li>
    <li><code>clear</code> : Nettoie le terminal</li>
    <li><em>Vous pouvez utiliser la touche TAB afin de compléter une ligne de commande</em></li>
    <li><em>Vous pouvez retrouver les anciennes commandes avec les flèches haut et bas</em></li>`,

    "aboutme": `{<br>
      &nbsp;&nbsp;&nbsp;<span class='home1'>"id"</span> : "Quentin MINZIERE",<br>
      &nbsp;&nbsp;&nbsp;<span class='home1'>"formation"</span> : "600h+ en 6 mois - Développeur Full-Stack - Javascript",<br>
      &nbsp;&nbsp;&nbsp;<span class='home1'>"language"</span> : "HTML, CSS, JS, Node, Git",<br>
      &nbsp;&nbsp;&nbsp;<span class='home1'>"framework"</span> : "React, Express",<br>
      &nbsp;&nbsp;&nbsp;<span class='home1'>"outils"</span> : "GitHub, Netlify, Figma",<br>
      &nbsp;&nbsp;&nbsp;<span class='home1'>"softSkills"</span> : "Methode Agile, Teamwork",<br>
      &nbsp;&nbsp;&nbsp;<span class='home1'>"city"</span> : "Nantes/Paris, France"<br>
    }`,

    "experience": `<tr>
    <th>Date</th>
    <th>Entreprise</th>
    <th>Poste</th>
    <th class="description">Description</th>
  </tr>
  <td class="center">Nov 2022 - Dec 2022</td>
  <td>My little lashes</td>
  <td>Développeur web</td>
  <td>Mise en place d'un site vitrine avec Bootstrap pour une entreprise spécialisée dans la beauté du visage.</td>
</tr>
  <tr>
    <td class="center">Mars 2021 - Sept 2021</td>
    <td>Marelli & Fils</td>
    <td>Chargé d'Affaires Professionnels</td>
    <td>Gestion d'équipe, établissement de devis de chantier, accompagnement sur l'optimisation des projets.</td>
  </tr>
  <tr>
    <td class="center">2019 - 2020</td>
    <td>Kelly Services · Intérimaire</td>
    <td>Manutentionnaire</td>
    <td>Rien de très intéressant à dire là-dessus...</td>
  </tr>
  <tr>
    <td class="center">2013 - 2018</td>
    <td>KFC</td>
    <td>Responsable de service</td>
    <td>Ouverture ou fermeture du restaurant. Gestion post-Rush : comptage des caisses, gestions des stocks, HACCP.</td>
  </tr>`,

    "skills": `{<br>
    &nbsp;&nbsp;<span class='sk'><span class='home2'>Au fil de ma formation, j'ai dû m'essayer à différents langages de développement que je maîtrise aujourd'hui.</span><br><br>
    &nbsp;&nbsp;&nbsp;Je peux facilement écrire du code dans les langages suivants :<br><br>
    &nbsp;&nbsp;&nbsp;<span class='home4'><span class='bold'>HTML<br>&nbsp;&nbsp;&nbsp;CSS<br>&nbsp;&nbsp;&nbsp;JavaScript<br>&nbsp;&nbsp;&nbsp;Node.JS</span></span><br><br>
    &nbsp;&nbsp;&nbsp;J'ai de l'expérience avec les frameworks suivants :<br><br>
    &nbsp;&nbsp;&nbsp;<span class='home4'><span class='bold'>React.JS<br>&nbsp;&nbsp;&nbsp;ExpressJS<br>&nbsp;&nbsp;&nbsp;Bootstrap<br>&nbsp;&nbsp;&nbsp;Tailwind</span></span><br><br>
    &nbsp;&nbsp;&nbsp;Ainsi qu'à certains systèmes de gestion de bases de données :<br><br>
    &nbsp;&nbsp;&nbsp;<span class='home4'><span class='bold'>MySQL<br>&nbsp;&nbsp;&nbsp;FireBase</span></span><br><br>
    &nbsp;&nbsp;&nbsp;Les outils que j'ulise souvent :<br><br>
    &nbsp;&nbsp;&nbsp;<span class='home4'><span class='bold'>Git<br>&nbsp;&nbsp;&nbsp;GitHub<br>&nbsp;&nbsp;&nbsp;Visual Studio Code<br>&nbsp;&nbsp;&nbsp;Figma</span></span><br><br>
    &nbsp;&nbsp;&nbsp;Je travaille souvent sous le système d'exploitation <span class='home4'>Linux.</span></span><br>
  }`,

    "education": `{<br>
    &nbsp;&nbsp;&nbsp;<span class='home2'>J'ai fait mes études de developpeur au sein de la <span class='bold'><a class='alink' target='_blank' href='https://3wacademy.fr/'>3WAcademy</a>.</span></span><br><br>
    &nbsp;&nbsp;&nbsp;<span class='home4'>Formation développeur d'applications.</span><br>&nbsp;&nbsp;&nbsp;Année : <span class='home3'>2023</span><br><br>
    &nbsp;&nbsp;&nbsp;<span class='home4'>Formation développeur full-stack.</span><br>&nbsp;&nbsp;&nbsp;Année : <span class='home3'>2022<br></span><br>
    &nbsp;&nbsp;&nbsp;<span class='home4'>Diplôme développeur full-stack Junior.</span><br>&nbsp;&nbsp;&nbsp;Année <span class='home3'>:2023</span><br>
  }`,

    "cv": `Le téléchargement du CV va commencer.`,

    "redirectLinkedin": `Vous allez être redirigé vers Linkedin.`,

    "redirectGithub": `Vous allez être redirigé vers Github.`,

    "hobby": `{<br>
    &nbsp;&nbsp;&nbsp;<span class='home1'>"Sport"</span> : "Hockey"<br>
    &nbsp;&nbsp;&nbsp;<span class='home1'>"Programmation"</span> : "JS, Node"<br>
    &nbsp;&nbsp;&nbsp;<span class='home1'>"Gaming"</span> : "FPS"<br>
    &nbsp;&nbsp;&nbsp;<span class='home1'>"Autre"</span> : "Design, blockchaine"<br>
  }`,

    "project": `<table class="result">
  <tr>
    <th>index</th>
    <th>Nom</th>
    <th>Tech</th>
    <th class="description">Description</th>
    <th>En equipe?</th>
    <th>Github</th>
  </tr>
  <tr>
    <td class="center">1</td>
    <td class="center">mylittlelashes</td>
    <td class="center">HTML CSS JS PHP Hostinger</td>
    <td>Mise en place d'un site vitrine avec Bootstrap pour une entreprise spécialisée dans la beauté du visage.</td>
    <td class="center">Non</td>
    <td class="center"><a href="https://github.com/declick/mylittlelashes" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">2</td>
    <td class="center">HackGit</td>
    <td class="center">PYTHON</td>
    <td>L'objectif était de remplir une année de contributions sur GitHub. Ce Hack le fait!</td>
    <td class="center">Non</td>
    <td class="center"><a href="https://github.com/declick/HackGit" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">3</td>
    <td class="center">Cryptique Hash</td>
    <td class="center">HTML CSS JS Google-play</td>
    <td>Une application qui chiffre du texte brut et déchiffre le texte chiffré. Code difficile à casser en Brut Force en SHA512</td>
    <td class="center">Non</td>
    <td class="center"><a href="https://play.google.com/store/apps/details?id=com.declick.cryptiquehash" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">4</td>
    <td class="center">Portfolio Node</td>
    <td class="center">HTML CSS JS NODE</td>
    <td>Le portfolio utilise Axios pour aller récupérer les dépôts GitHub afin de les afficher en exemple sur la page d'accueil, ainsi que dans leur intégralité dans la section "Projets" grâce à l'API GitHub.</td>
    <td class="center">Non</td>
    <td class="center"><a href="https://github.com/declick/PortfolioNode" target="blank">Lien</a></td>
  </tr> 
  <tr>
  <td class="center">5</td>
  <td class="center">Projet Final</td>
  <td class="center">HTML CSS JS REACT NODE SQL</td>
  <td>Projets de fin d'étude fait en un mois, site vitrine React/Node avec base de donner.</td>
  <td class="center">Non</td>
  <td class="center"><a href="https://github.com/declick/Projet-Final" target="blank">Lien</a></td>
</tr> 
  <tr>
    <td class="center">6</td>
    <td class="center">Quizz App</td>
    <td class="center">HTML CSS JS</td>
    <td>Vous devez retrouver des mots de différentes longueurs en fonction des catégories, heureusement vous avez de l'aide.</td>
    <td class="center">Non</td>
    <td class="center"><a href="https://github.com/declick/Quizz-App" target="blank">Lien</a></td>
  </tr> 
  <tr>
  <td class="center">7</td>
  <td class="center">Portfolio VsCode</td>
  <td class="center">HTML CSS JS</td>
  <td>Présentation de mon portefolio avec un clin d'oeil à VSCode. Intégration de l'autocomplétion, de l'historique des commandes, etc. pour le terminal.</td>
  <td class="center">Non</td>
  <td class="center"><a href="https://github.com/declick/VsCode" target="blank">Lien</a></td>
</tr>
  </table><br>
  <p class="result"><em>Vous pouvez voir le site rattaché au projet en utilisant la commande</em> <code>projets[index].website</code><em>, index étant le numéro associé au projet.</em></p>`,

    "notfound": `<span class="notfoundlanguage"><br><br>Tapez la commande <code>help</code> pour afficher la liste des commandes disponibles.</p></span>`,

    "website": `<p class="result websiteresult">Vous allez être redirigé vers le site web du projet.</p>`,

    "ls1": `
    <div>a propos</div>
    <div>experiences</div>
    <div>skills</div>
    <div>education</div>
    <div>cv</div>
    <div>linkedin</div>
    <div>github</div>
    <div>help</div>
    <div>passions</div>
    <div>projets</div>
    <div>clear</div>
    <div>projets[1].website</div>
    <div>projets[2].website</div>
    <div>projets[3].website</div>
    <div>projets[4].website</div>
    <div>projets[5].website</div>
    <div>projets[6].website</div>
    <div>projets[7].website</div>`,

    "ls2": `
    <div>a propos</div>
    <div>experiences</div>
    <div>skills</div>
    <div>education</div>
    <div>cv</div>
    <div>linkedin</div>
    <div>github</div>
    <div>passions</div>
    <div>projets</div>
    <div>clear</div>
    <div>projets[1].website</div>
    <div>projets[2].website</div>
    <div>projets[3].website</div>
    <div>projets[4].website</div>
    <div>projets[5].website</div>
    <div>projets[6].website</div>
    <div>projets[7].website</div>`,

  }
}

let welcome = document.getElementById("welcome");
let popupcontent = document.getElementsByClassName("popupinfo")[0];
let french = document.getElementById("french");
let english = document.getElementById("english");
let language;

window.addEventListener("load", setLanguage());

function setLanguage() {
  if (localStorage.getItem("language") === null) {
    localStorage.setItem('language', "english");
  }
  language = localStorage.getItem("language");
  welcome.innerHTML = data[language].welcome;
  document.querySelectorAll(".helpresult").forEach(element => {
    element.innerHTML = data[language].help
  });
  document.querySelectorAll(".aboutmeresult").forEach(element => {
    element.innerHTML = data[language].aboutme
  });
  document.querySelectorAll(".experienceresult").forEach(element => {
    element.innerHTML = data[language].experience
  });
  document.querySelectorAll(".skillsresult").forEach(element => {
    element.innerHTML = data[language].skills
  });
  document.querySelectorAll(".educationresult").forEach(element => {
    element.innerHTML = data[language].education
  });
  document.querySelectorAll(".cvresult").forEach(element => {
    element.innerHTML = data[language].cv
  });
  document.querySelectorAll(".redirectresultLinkedin").forEach(element => {
    element.innerHTML = data[language].redirectLinkedin
  });
  document.querySelectorAll(".redirectresultGithub").forEach(element => {
    element.innerHTML = data[language].redirectGithub
  });
  document.querySelectorAll(".hobbyresult").forEach(element => {
    element.innerHTML = data[language].hobby
  });
  document.querySelectorAll(".resultproject").forEach(element => {
    element.innerHTML = data[language].project
  });
  document.querySelectorAll(".notfoundlanguage").forEach(element => {
    element.innerHTML = data[language].notfound
  });
  document.querySelectorAll(".notfoundmenu").forEach(element => {
    element.innerHTML = data[language].notfoundmenu
  });
  document.querySelectorAll(".websiteresult").forEach(element => {
    element.innerHTML = data[language].website
  });
  document.querySelectorAll(".lsresult1").forEach(element => {
    element.innerHTML = data[language].ls1
  });
  document.querySelectorAll(".lsresult2").forEach(element => {
    element.innerHTML = data[language].ls2
  });
  document.querySelectorAll(".listsecretresult").forEach(element => {
    element.innerHTML = data[language].listsecretresult
  });

}


french.addEventListener("click", () => {
  language = "french";
  localStorage.setItem('language', language);
  setLanguage();
});

english.addEventListener("click", () => {
  language = "english";
  localStorage.setItem('language', language);
  setLanguage();
});
