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
  const isAllSame = data => {
    for (let k = 0; k < data.length; k += 1) {
      if (data[k] === '.') {
        return false;
      }
    }

    return data.every(col => data[0] === col);
  };

  const checkForRow = () => {
    for (let i = 0; i < gridArray.length; i += 1) {
      if (isAllSame(gridArray[i])) return true;
    }

    return false;
  };

  const checkForCol = () => {
    const getColMember = rowIdx => {
      const colData = [];
      for (let i = 0; i < gridArray.length; i += 1) {
        colData.push(gridArray[i][rowIdx]);
      }

      return colData;
    };

    for (let i = 0; i < gridArray[0].length; i += 1) {
      if (isAllSame(getColMember(i))) return true;
    }
    return false;
  };

  const checkForDiagonal = () => {
    const diagonal1 = [];
    const diagonal2 = [];
    for (let i = 0; i < gridArray.length; i += 1) {
      diagonal1.push(gridArray[i][i]);
      diagonal2.push(gridArray[i][gridArray[i].length - i - 1]);
    }

    return isAllSame(diagonal1) || isAllSame(diagonal2);
  };

  return checkForRow() || checkForCol() || checkForDiagonal();
};

export default {
  getGridInArray,
  checkForWin
};
