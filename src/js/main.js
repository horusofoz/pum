let sceneSetupPrompt = document.querySelector("#scene-setup-prompt");
let sceneSetupExpectation = document.querySelector("#scene-setup-expectation");
let sceneCatalyst = document.querySelector("#scene-designer-catalyst");
let sceneChallenge = document.querySelector("#scene-designer-challenge");
let sceneCircumstance = document.querySelector("#scene-designer-circumstance");
let sceneComplication = document.querySelector("#scene-designer-complication");
let sceneDiscovery = document.querySelector("#scene-designer-discovery");
let sceneRisk = document.querySelector("#scene-designer-risk");

let oracleYesOrNoEven = document.querySelector("#oracle-yesorno-even");
let oracleYesOrNoLikely = document.querySelector("#oracle-yesorno-likely");
let oracleYesOrNoUnlikely = document.querySelector("#oracle-yesorno-unlikely");

let oracleWhat = document.querySelector("#oracle-what");
let oracleWho = document.querySelector("#oracle-who");
let oracleIntent = document.querySelector("#oracle-intent");
let oracleActivity = document.querySelector("#oracle-activity");
let oracleReason = document.querySelector("#oracle-reason");

let oracleDescribeArea = document.querySelector("#oracle-describe-area");
let oracleDescribeObject = document.querySelector("#oracle-describe-object");
let oracleDescribeSomeone = document.querySelector("#oracle-describe-someone");

let oracleKindOfAbility = document.querySelector("#oracle-kindof-ability");
let oracleKindOfDanger = document.querySelector("#oracle-kindof-danger");
let oracleKindOfEnemy = document.querySelector("#oracle-kindof-enemy");
let oracleKindOfItem = document.querySelector("#oracle-kindof-item");
let oracleKindOfPeople = document.querySelector("#oracle-kindof-people");

let activePage = "";

let btnRoll = document.querySelector(".btn-roll");
btnRoll.addEventListener("click", () => {
  if (activePage == "scene") {
    getSceneAnswers();
  } else {
    getOracleAnswers();
  }
});

let navItemScene = document.querySelector("#nav-item-scene");
navItemScene.addEventListener("click", () => {
  setActivePage("scene");
  setActiveNavItem("scene");
});

let navItemOracle = document.querySelector("#nav-item-oracle");
navItemOracle.addEventListener("click", () => {
  setActivePage("oracle");
  setActiveNavItem("oracle");
});

let navItemAbout = document.querySelector("#nav-item-about");
navItemAbout.addEventListener("click", () => {
  setActivePage("about");
  setActiveNavItem("about");
});

function getAnswer(element) {
  return element[Math.floor(Math.random() * element.length)];
}

function getSceneAnswers() {
  sceneSetupExpectation.textContent = getAnswer(pum.scene.setup.expectation);
  sceneSetupPrompt.textContent = getAnswer(pum.scene.setup.prompt);
  sceneCatalyst.textContent = getAnswer(pum.scene.designer.catalyst);
  sceneChallenge.textContent = getAnswer(pum.scene.designer.challenge);
  sceneCircumstance.textContent = getAnswer(pum.scene.designer.circumstance);
  sceneComplication.textContent =
    getAnswer(pum.scene.designer.subject)
    + ", " + getAnswer(pum.scene.designer.complication);
  sceneDiscovery.textContent = getAnswer(pum.scene.designer.discovery);
  sceneRisk.textContent = getAnswer(pum.scene.designer.risk);
}

function getOracleAnswers() {
  oracleYesOrNoEven.textContent =
    getAnswer(pum.oracle.yesorno.even)
    + getAnswer(pum.oracle.yesorno.modifier);

  oracleYesOrNoLikely.textContent =
    getAnswer(pum.oracle.yesorno.likely)
    + getAnswer(pum.oracle.yesorno.modifier);

  oracleYesOrNoUnlikely.textContent =
    getAnswer(pum.oracle.yesorno.unlikely)
    + getAnswer(pum.oracle.yesorno.modifier);

  oracleWhat.textContent = getAnswer(pum.oracle.what.type)
    + ", " + getAnswer(pum.oracle.what.subject)
    + ", " + getAnswer(pum.oracle.what.event);

  oracleWho.textContent = getAnswer(pum.oracle.who.subject)
    + " " + getAnswer(pum.oracle.who.type);

  oracleIntent.textContent = getAnswer(pum.oracle.intent.they)
    + " " + getAnswer(pum.oracle.intent.subject);

  oracleActivity.textContent = getAnswer(pum.oracle.intent.they)
    + " " + getAnswer(pum.oracle.intent.subject);

  oracleReason.textContent = getAnswer(pum.oracle.reason.action)
    + " " + getAnswer(pum.oracle.reason.motive)

  oracleDescribeArea.textContent = getAnswer(pum.oracle.describe.adverb)
    + " " + getAnswer(pum.oracle.describe.area).toLowerCase();
  oracleDescribeObject.textContent = getAnswer(pum.oracle.describe.adverb)
    + " " + getAnswer(pum.oracle.describe.object).toLowerCase();
  oracleDescribeSomeone.textContent = getAnswer(pum.oracle.describe.adverb)
    + " " + getAnswer(pum.oracle.describe.someone).toLowerCase();

  oracleKindOfAbility.textContent = getAnswer(pum.oracle.kind_of.ability);
  oracleKindOfDanger.textContent = getAnswer(pum.oracle.kind_of.danger);
  oracleKindOfEnemy.textContent = getAnswer(pum.oracle.kind_of.enemy);
  oracleKindOfItem.textContent = getAnswer(pum.oracle.kind_of.item);
  oracleKindOfPeople.textContent = getAnswer(pum.oracle.kind_of.people);
}

function setActiveNavItem(item) {
  let navItems = document.querySelectorAll(".nav-item");
  for (let i = 0; i < navItems.length; i++) {
    if (navItems[i].getAttribute("id").includes(item)) {
      navItems[i].classList.add("nav-item-active");
    } else {
      navItems[i].classList.remove("nav-item-active");
    }
  }
}

function setActivePage(page) {
  activePage = page;
  let pages = document.querySelectorAll(".page");
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].getAttribute("id").includes(page)) {
      pages[i].classList.remove("hidden");
    } else {
      pages[i].classList.add("hidden");
    }
  }

  if (page == "about") {
    btnRoll.classList.add("hidden");
  } else {
    btnRoll.classList.remove("hidden");
  }

}

function setServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/learn/pum-dev/service.js", { scope: "/learn/pum-dev/" })
      .then(res => console.log("Service worker registered"))
      .catch(err => console.log("Service worker not registered", err))
  }
}

function start() {
  getSceneAnswers();
  getOracleAnswers();
  setActivePage("scene");
  setActiveNavItem("scene");
  setServiceWorker();
}

start();