function compareNodes(A, B) {
    if (parseInt(A.textContent) > parseInt(B.textContent)) {
        return true;
      }
  return false;
}

function bubbleSort(nodesContainer) {
  let nodes = nodesContainer.childNodes;
  for (i = 0; i < nodes.length; i++) {
    for (j = i; j < nodes.length; j++) {
      if (compareNodes(nodes[i], nodes[j])) {
        let temp = nodes[i].textContent;
        nodes[i].textContent = nodes[j].textContent;
        nodes[j].textContent = temp;
      }
    }
  }
}


