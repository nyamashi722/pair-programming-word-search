const transpose = function (matrix) {
  const newMatrix = [];
  const numOfColumns = matrix[0].length;
  const numOfRows = matrix.length;
  for (let x = 0; x < numOfColumns; x++) {
    newMatrix.push([]);
  }

  for (let i = 0; i < numOfRows; i++) {
    for (let j = 0; j < numOfColumns; j++) {
      newMatrix[j].push(matrix[i][j]);
    }
  }

  return newMatrix;
};

const wordSearch = (letters, word) => {
  if (letters.length < 1 || word.length < 1) {
    return;
  }

  const verticalJoin = transpose(letters).map(ls => ls.join(""))
  const horizontalJoin = letters.map(ls => ls.join(""))
  for (let l of verticalJoin) {
    if (l.search(word) >= 0) {
      return true;
    }
  }

  for (let l of horizontalJoin) {
    if (l.search(word) >= 0) {
      return true;
    }
  }

  // backwards

  const reversedLetters = transpose(letters)

  for (let row of reversedLetters) {
    row.reverse();
  }

  for (let row of letters) {
    row.reverse();
  }

  const reversedHorizontalLetters = letters.map(ls => ls.join(""));
  const reversedVerticalLetters = reversedLetters.map(ls => ls.join(""));

  for (let l of reversedHorizontalLetters) {
    if (l.search(word) >= 0) {
      return true;
    }
  }

  for (let l of reversedVerticalLetters) {
    if (l.search(word) >= 0) {
      return true;
    }
  }
  return false
}

module.exports = wordSearch