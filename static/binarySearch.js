/**
 * Creates a span element with specified classes and text content.
 * @param {string[]} classNames - The list of class names to be applied to the span element.
 * @param {string} textContent - The text content of the span element.
 * @returns {HTMLElement} The created span element.
 */
function createSpanElement(classNames, textContent) {
  const span = document.createElement("span");
  span.classList.add(...classNames);
  span.textContent = textContent;
  return span;
}

/**
 * Creates a div element with specified classes.
 * @param {string[]} classes - The list of classes to be applied to the div element.
 * @returns {HTMLElement} The created div element.
 */
function createDivElement(classes) {
  const div = document.createElement("div");
  div.classList.add(...classes);
  return div;
}

function createButtonElement(classses, text) {
  const a = document.createElement("button");
  a.classList.add(...classses);
  a.innerText = text;
  return a;
}

function createATagElement(classses, link, text) {
  const a = document.createElement("a");
  a.classList.add(...classses);
  a.href = link;
  a.innerText = text;
  return a;
}

function createNode(textContent) {
  let node = createDivElement(["btn", "btn-primary", "rounded-lg"]);
  node.textContent = textContent;
  return node;
}

/**
 * Generates random number
 * @param {int} upperLimit - upper bound of the number.
 * @returns {int} random number.
 */

function randomInterger(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}

function addNodesToMainContainer(mainContainer, nodes) {
  mainContainer.innerText=""
  for (i = 0; i < nodes; i++) {
    mainContainer.appendChild(createNode(randomInterger(nodes)));
  }
}

let numberOfNodes = 96;
const nodesContainer = createDivElement([
  "container",
  "mx-auto",
  "grid",
  "grid-cols-12",
  "items-center",
  "gap-2",
]);
document.body.appendChild(nodesContainer);
addNodesToMainContainer(nodesContainer, numberOfNodes);

// setInterval(() => {
//   nodesContainer.childNodes.forEach((element) => {
//     const  number = randomInterger(numberOfNodes)
//     element.textContent= number
//     element.style.opacity=`${number*10}%`
//   });
// }, 1000);
