const getGridInArray = (row = 0, col = 0) => {
  const grid = [];
  for (let i = 0; i < row; i += 1) {
    const gridRow = [];
    for (let j = 0; j < col; j += 1) {
      gridRow.push('.');
    }

    grid.push(gridRow);
  }

  return grid;
};

const checkForWin = gridArray => {
  const checkForRow = () => {
    for (let i = 0; i < gridArray.length; i += 1) {
      const row = [];
      for (let j = 0; j < gridArray[i].length; i += 1) {
        //   row.push()
      }
    }
  };
};

export default {
  getGridInArray,
  checkForWin
};
