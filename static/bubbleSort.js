function compareNodes(A, B) {
  if (parseInt(A.textContent) > parseInt(B.textContent)) {
    s.incrementShift();
    return true;
  }
  return false;
}

function bubbleSort(nodesContainer) {
  s.reset();
  let nodes = nodesContainer.childNodes;
  for (i = 0; i < nodes.length; i++) {
    for (j = i; j < nodes.length; j++) {
      s.incrementComp();
      if (compareNodes(nodes[i], nodes[j])) {
        let temp = nodes[i].textContent;
        nodes[i].textContent = nodes[j].textContent;
        nodes[j].textContent = temp;
      }
    }
  }
}

function bubbleSortWithSwapped(nodesContainer) {
  s.reset();
  let nodes = nodesContainer.childNodes;
  for (i = 0; i < nodes.length; i++) {
    let swapped = false;
    for (j = i; j < nodes.length; j++) {
      s.incrementComp();
      console.log(compareNodes(nodes[i], nodes[j]))
      if (compareNodes(nodes[i], nodes[j])) {
        let temp = nodes[i].textContent;
        nodes[i].textContent = nodes[j].textContent;
        nodes[j].textContent = temp;
        swapped = true;
        console.log('s')
      }
      // If no swaps occurred, the array is already sorted
      if (! swapped) {
        break;
      }
    }
  }
}
