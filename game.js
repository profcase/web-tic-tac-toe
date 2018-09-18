
/**
 * Simple tic-tac-toe game example. 
 */
const game = (function () {

  const cellElements = [
    document.getElementById('upper-left'),
    document.getElementById('upper-mid'),
    document.getElementById('upper-right'),
    document.getElementById('center-left'),
    document.getElementById('center-mid'),
    document.getElementById('center-right'),
    document.getElementById('lower-left'),
    document.getElementById('lower-mid'),
    document.getElementById('lower-right')
  ];

  for (let i = 0; i < cellElements.length; i++) {
    cellElements[i].addEventListener('click', async function () {

      // add player's X
      const isValidMove = await addX(cellElements[i]);

      if (isValidMove) {

        // choose computer's O
        const j = await findBestMove(cellElements);

        // pause, then add computer's O
        await new Promise((resolve) => setTimeout(() => resolve(), 2000));
        await addO(cellElements[j]);
      }

    });
  }

  async function findBestMove(arr) {
    for (let n = 0; n < arr.length; n++) {
      if (arr[n].childElementCount === 0) {
        return n;
      }
    }
  }

  async function addX(cellElement) {
    if (cellElement.childElementCount === 1) { return false; }
    const headingElement = document.createElement("h1");
    const textNode = document.createTextNode("X");
    headingElement.appendChild(textNode);
    cellElement.appendChild(headingElement);
    return true;
  }

  async function addO(cellElement) {
    if (cellElement.childElementCount === 1) { return; }
    const headingElement = document.createElement("h1");
    const textNode = document.createTextNode("O");
    headingElement.appendChild(textNode);
    cellElement.appendChild(headingElement);
  }

})();