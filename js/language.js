const data = {
  "english":
  {

    
    "welcome" : "Welcome to my portfolio !" + "</br>" + 
    " <mark>&nbsp; *  History restored </mark>"+ "</br>" +
    "guest@mirje.dev:$ ~(c) MIRJE. All rights reserved 2023." + "</br></br>" +
    "To display the available commands type <code>help</code>." + "</br>" +
    "To validate each command press <em>Enter</em>, you can use the <em>Tabulation</em> key to help you complete a command.",
 
    "help" : `<li><code>about me</code> : Display information about me</li>
    <li><code>experiences</code> : Displays the list of my experiences</li>
    <li><code>get cv</code> : Download my CV</li>
    <li><code>get linkedin</code> : Link to my Linkedin</li>
    <li><code>get github</code> : Link to my Github</li>
    <li><code>passions</code> : Displays the list of my hobbies</li>
    <li><code>projects</code> : Displays the list of my personal projects</li>
    <li><code>clear</code> : Clean the terminal</li>
    <li><em>You can use the TAB key to complete a command line</em></li>
    <li><em>You can find the old commands with the up and down arrows</em></li>`,

    "aboutme" : `{<br>
      &nbsp;&nbsp;&nbsp;"id" : "Quentin MINZIERE",<br>
      &nbsp;&nbsp;&nbsp;"formation" : "600h+ in 6 months - Full-Stack Developer - Javascript",<br>
      &nbsp;&nbsp;&nbsp;"language" : "HTML, CSS, JS, Node, Git",<br>
      &nbsp;&nbsp;&nbsp;"framework" : "React, Express",<br>
      &nbsp;&nbsp;&nbsp;"tools" : "GitHub, Netlify, Figma",<br>
      &nbsp;&nbsp;&nbsp;"softSkills": "Agile Method, Teamwork",<br>
      &nbsp;&nbsp;&nbsp;"city" : "Nantes/Paris, France"<br>
    }`,

    "experience" : `<tr>
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

  "cv" : `The resume upload will begin.`,

  "redirectLinkedin" : `You will be redirected to Linkedin.`,

  "redirectGithub" : `You will be redirected to Github.`,

  "hobby" : `{<br>
    &nbsp;&nbsp;&nbsp;"Sport" : "Hockey"<br>
    &nbsp;&nbsp;&nbsp;"Programmation" : "JS, Node"<br>
    &nbsp;&nbsp;&nbsp;"Gaming" : "FPS"<br>
    &nbsp;&nbsp;&nbsp;"Other" : "Design, blockchaine"<br>
  }`,

  "project" : `<table class="result">
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
    <td class="center">Catshop</td>
    <td class="center">Rails Ruby Git HTML CSS JS AJAX Heroku</td>
    <td>Cat Photo Selling Marketplace</td>
    <td class="center">Yes</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/CatShop" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">2</td>
    <td class="center">Kata Temple</td>
    <td class="center">HTML CSS JS Heroku</td>
    <td>30-day challenge to improve in technical test with Kata Temple. Attempt to complete temple sensei katas from level 8kyu to 4kyu in 30 days - Ruby Edition</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/Kata-Temple" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">3</td>
    <td class="center">ScoreIT</td>
    <td class="center">Rails Ruby Git HTML CSS JS AJAX Heroku</td>
    <td>The objective of ScoreIT is to offer a tool for creating credibility for start-up projects aimed at raising funds from investors or financial institutions. We offer a fully online platform allowing startup founders to obtain a rating on their project, thus giving it a credibility score in order to reassure future potential investors.</td>
    <td class="center">Yes</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/ScoreIT" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">4</td>
    <td class="center">Monolith Arena</td>
    <td class="center">HTML CSS JS</td>
    <td>48h to create a 2d game on the theme of a battle arena using Javascript classes</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/Monolith-Arena" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">5</td>
    <td class="center">My Dark Theme.JS</td>
    <td class="center">HTML CSS JS</td>
    <td>Dark mode generator with customization of dark mode colors and possibility to copy the code to add it directly to your site. To make it work you have to vary the colors in CSS.</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/MyDarkTheme.JS" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">6</td>
    <td class="center">EmojiFace</td>
    <td class="center">HTML CSS JS</td>
    <td>60 seconds to reproduce as many emoji as possible with your face! Use of webcam and face detection thanks to AI!</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/EmojiFace" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">7</td>
    <td class="center">Portfolio Terminal</td>
    <td class="center">HTML CSS JS</td>
    <td>Presentation of my portfolio as a terminal. Integration of autocomplete, command history, etc. The latter can be used as a real terminal.</td>
    <td class="center">No</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/Portfolio-Terminal" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">8</td>
    <td class="center">YouLearn</td>
    <td class="center">React JS SCSS</td>
    <td>Turns any YouTube video into an e-learning platform with the ability to view chapters in the video, take notes with associated timestamps, etc.
    - Under development to integrate a Rails API backend to record information.</td>
    <td class="center">No</td>
    <td class="center"><a href="mailto:reygner0224@gmail.com?subject=This repository is pravate&body=Quentin MINZIERE> this repository is private tell me why you want to have access to it." target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">9</td>
    <td class="center">FindHouse</td>
    <td class="center">React JS CSS Rails API</td>
    <td>Creation of a real estate sales platform with a React JS frontend and a Rails API backend.</td>
    <td class="center">Yes</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/FindHouse" target="blank">Link</a></td>
  </tr>
  </table><br>
  <p class="result"><em>You can see the site attached to the project using the command</em> <code>projects[index].website</code><em>, index being the number associated with the project.</em></p>`,

  "notfound" : `<span class="notfoundlanguage"><br><br>Type the command <code>help</code> to display the list of available commands.</p></span>`,

  "website" : `<p class="result websiteresult">You will be redirected to the project website.</p>`,

  "ls1" : `
    <div>about me</div>
    <div>experiences</div>
    <div>get CV</div>
    <div>get linkedin</div>
    <div>get github</div>
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

  "ls2" : `
    <div>about me</div>
    <div>experiences</div>
    <div>get CV</div>
    <div>get linkedin</div>
    <div>get github</div>
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

  },


  "french":
  {
    "welcome" : "Bienvenue sur mon Portfolio !"  + "</br>" +
    " <mark>&nbsp; *  History restored </mark>"+ "</br>" +
    "guest@mirje.dev:$ ~(c) MIRJE. All rights reserved 2023." + "</br></br>" +
    "Pour afficher les commandes disponibles tapez <code>help</code>." + "</br>" +
    "Pour valider chaque commande appuyez sur <em>Entrer</em>, utiliser la touche <em>Tabulation</em> pour compléter une commande.",
    
    "help" : `<li><code>a propos</code> : Affiche les informations me concernant</li>
    <li><code>experiences</code> : Affiche la liste de mes expériences</li>
    <li><code>get cv</code> : Télécharge mon CV</li>
    <li><code>get linkedin</code> : Lien vers mon Linkedin</li>
    <li><code>get github</code> : Lien vers mon Github</li>
    <li><code>passions</code> : Affiche la liste de mes passes temps</li>
    <li><code>projets</code> : Affiche la liste de mes projets personnels</li>
    <li><code>clear</code> : Nettoie le terminal</li>
    <li><em>Vous pouvez utiliser la touche TAB afin de compléter une ligne de commande</em></li>
    <li><em>Vous pouvez retrouver les anciennes commandes avec les flèches haut et bas</em></li>`,

    "aboutme" : `{<br>
      &nbsp;&nbsp;&nbsp;"id" : "Quentin MINZIERE",<br>
      &nbsp;&nbsp;&nbsp;"formation" : "600h+ en 6 mois - Développeur Full-Stack - Javascript",<br>
      &nbsp;&nbsp;&nbsp;"language" : "HTML, CSS, JS, Node, Git",<br>
      &nbsp;&nbsp;&nbsp;"framework" : "React, Express",<br>
      &nbsp;&nbsp;&nbsp;"outils" : "GitHub, Netlify, Figma",<br>
      &nbsp;&nbsp;&nbsp;"softSkills" : "Methode Agile, Teamwork",<br>
      &nbsp;&nbsp;&nbsp;"city" : "Nantes/Paris, France"<br>
    }`,

    "experience" : `<tr>
    <th>Date</th>
    <th>Entreprise</th>
    <th>Poste</th>
    <th class="description">Description</th>
  </tr>
  <td class="center">Nov 2022 - Dec 2022</td>
  <td>My little lashes</td>
  <td>Développeur web</td>
  <td>Mise en place d'un site vitrine avec bootstrap, JS (JavaScript), et PHP.</td>
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

  "cv" : `Le téléchargement du CV va commencer.`,

  "redirectLinkedin" : `Vous allez être redirigé vers Linkedin.`,

  "redirectGithub" : `Vous allez être redirigé vers Github.`,

  "hobby" : `{<br>
    &nbsp;&nbsp;&nbsp;"Sport" : "Hockey"<br>
    &nbsp;&nbsp;&nbsp;"Programmation" : "JS, Node"<br>
    &nbsp;&nbsp;&nbsp;"Gaming" : "FPS"<br>
    &nbsp;&nbsp;&nbsp;"Autre" : "Design, blockchaine"<br>
  }`,

  "project" : `<table class="result">
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
    <td class="center">Catshop</td>
    <td class="center">Rails Ruby Git HTML CSS JS AJAX Heroku</td>
    <td>Marketplace de vente de photo de chat</td>
    <td class="center">Oui</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/CatShop" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">2</td>
    <td class="center">Kata Temple</td>
    <td class="center">HTML CSS JS Heroku</td>
    <td>Défi de 30 jours pour s'améliorer en test technique avec Kata Temple. Tente de terminer les katas du sensei du temple du niveau 8kyu à 4kyu en 30 jours - Ruby Edition</td>
    <td class="center">Non</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/Kata-Temple" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">3</td>
    <td class="center">ScoreIT</td>
    <td class="center">Rails Ruby Git HTML CSS JS AJAX Heroku</td>
    <td>L’objectif de ScoreIT est de proposer un outil de crédibilisation des projets de startups dont l’optique serait de lever des fonds auprès d’investisseurs ou d’établissements financiers. Nous proposons une plateforme entièrement en ligne permettant aux fondateurs de startups de pouvoir obtenir une notation sur leur projet permettant ainsi de donner un score de crédibilité à ce dernier dans le but de rassurer les futurs potentiels investisseurs.</td>
    <td class="center">Oui</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/ScoreIT" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">4</td>
    <td class="center">Monolith Arena</td>
    <td class="center">HTML CSS JS</td>
    <td>48h pour créer un jeu en 2d sur le thème d'une arène de combat en utilisant les classes de Javascript</td>
    <td class="center">Non</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/Monolith-Arena" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">5</td>
    <td class="center">My Dark Theme.JS</td>
    <td class="center">HTML CSS JS</td>
    <td>Generateur de mode sombre avec personnalisation des couleurs du mode sombre et possibilité de copier le code pour l ajouter directement sur son site. Pour le faire fonctionner il faut variabiliser les couleurs sous CSS.</td>
    <td class="center">Non</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/MyDarkTheme.JS" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">6</td>
    <td class="center">EmojiFace</td>
    <td class="center">HTML CSS JS</td>
    <td>60 secondes pour reproduire un maximum d'emoji avec votre visage ! Utilisation de la webcam et de la détection de visage grâce à l IA !</td>
    <td class="center">Non</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/EmojiFace" target="blank">Lien</a></td>
  </tr> 
  <tr>
    <td class="center">7</td>
    <td class="center">Portfolio Terminal</td>
    <td class="center">HTML CSS JS</td>
    <td>Présentation de mon portefolio sous forme de terminal. Intégration de l'autocomplétion, de l'historique des commandes, etc. Ce dernier peut s'utiliser comme un vrai terminal.</td>
    <td class="center">Non</td>
    <td class="center"><a href="https://github.com/guillaume-rygn/Portfolio-Terminal" target="blank">Lien</a></td>
  </tr>
  <tr>
    <td class="center">8</td>
    <td class="center">YouLearn</td>
    <td class="center">React JS</td>
    <td>Transforme n'importe quelle vidéo YouTube en une plateforme de e-learning avec la possibilité de voir les chapitres de la video, prendre des notes avec des timestamps associés, etc.
    - En cours de développement afin d'intégrer un backend Rails API pour enregistrer les informations.</td>
    <td class="center">Non</td>
    <td class="center"><a href="mailto:reygner0224@gmail.com?subject=Repository privée&body=Quentin MINZIERE> ce repository est privée dites a propos pourquoi vous souhaitez y avoir accès." target="blank">Lien</a></td>
  </tr>
  <tr>
  <td class="center">9</td>
  <td class="center">FindHouse</td>
  <td class="center">React JS CSS Rails API</td>
  <td>Création d'une plateforme de vente de bien immobilier avec un frontend React JS et un backend Rails API.</td>
  <td class="center">Oui</td>
  <td class="center"><a href="https://github.com/guillaume-rygn/FindHouse" target="blank">Link</a></td>
</tr>
  </table><br>
  <p class="result"><em>Vous pouvez voir le site rattaché au projet en utilisant la commande</em> <code>projets[index].website</code><em>, index étant le numéro associé au projet.</em></p>`,

  "notfound" : `<span class="notfoundlanguage"><br><br>Tapez la commande <code>help</code> pour afficher la liste des commandes disponibles.</p></span>`,

  "website" : `<p class="result websiteresult">Vous allez être redirigé vers le site web du projet.</p>`,

  "ls1" : `
    <div>a propos</div>
    <div>experiences</div>
    <div>get cv</div>
    <div>get linkedin</div>
    <div>get github</div>
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

  "ls2" : `
    <div>a propos</div>
    <div>experiences</div>
    <div>get cv</div>
    <div>get linkedin</div>
    <div>get github</div>
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

function setLanguage(){
  if(localStorage.getItem("language") === null){
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
  document.querySelectorAll(".experienceresult").forEach(element =>{
    element.innerHTML = data[language].experience
  });
  document.querySelectorAll(".cvresult").forEach(element =>{
    element.innerHTML = data[language].cv
  });
  document.querySelectorAll(".redirectresultLinkedin").forEach(element =>{
    element.innerHTML = data[language].redirectLinkedin
  });
  document.querySelectorAll(".redirectresultGithub").forEach(element =>{
    element.innerHTML = data[language].redirectGithub
  });
  document.querySelectorAll(".hobbyresult").forEach(element =>{
    element.innerHTML = data[language].hobby
  });
  document.querySelectorAll(".resultproject").forEach(element =>{
    element.innerHTML = data[language].project
  });
  document.querySelectorAll(".notfoundlanguage").forEach(element =>{
    element.innerHTML = data[language].notfound
  });
  document.querySelectorAll(".notfoundmenu").forEach(element =>{
    element.innerHTML = data[language].notfoundmenu
  });
  document.querySelectorAll(".websiteresult").forEach(element =>{
    element.innerHTML = data[language].website
  });
  document.querySelectorAll(".lsresult1").forEach(element =>{
    element.innerHTML = data[language].ls1
  });
  document.querySelectorAll(".lsresult2").forEach(element =>{
    element.innerHTML = data[language].ls2
  });
  document.querySelectorAll(".listsecretresult").forEach(element =>{
    element.innerHTML = data[language].listsecretresult
  });
  
}


french.addEventListener("click", function(){
  language = "french";
  localStorage.setItem('language', language);
  setLanguage();
});

english.addEventListener("click", function(){
  language = "english";
  localStorage.setItem('language', language);
  setLanguage();
});
