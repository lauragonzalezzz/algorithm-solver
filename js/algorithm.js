function algorithmSolver(number) {
  var squareRootsArr = [];
  var sumOfSquareRoots = 0;

  for (var i = 1; i < number; i++) {
    var squareNum = Math.sqrt(i);
    squareRootsArr.push(squareNum);
  };

  for (var k = 0; k < squareRootsArr.length; k++) {
    sumOfSquareRoots += squareRootsArr[k];
  };

  sumOfSquareRoots = sumOfSquareRoots.toFixed(2);
  sumOfSquareRoots = Number(sumOfSquareRoots);
  console.log('sumOfSquareRoots',sumOfSquareRoots);

  return sumOfSquareRoots;
};


