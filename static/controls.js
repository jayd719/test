const containerControls = createDivElement([
  "container",
  ,
  "mx-auto",
  "flex",
  "gap-4",
  "py-10",
]);
document.body.appendChild(containerControls);
console.log(containerControls);
const buttons = [
  {
    text: "Bubble Sort",
    function: () => bubbleSort(nodesContainer),
  },
  { text: "Alert", function: () => alert(" ") },
  {
    text: "Rest",
    function: () => addNodesToMainContainer(nodesContainer, numberOfNodes),
  },
];

// Loop through buttons array and create elements
buttons.forEach(({ text, link, function: onClick }) => {
  const buttonElement = createButtonElement(
    ["text-xl", "btn", "btn-warning", "rounded-lg"],
    text
  );
  buttonElement.addEventListener("click", onClick);
  containerControls.appendChild(buttonElement);
});
containerControls.lastChild.classList.add("btn-error");
