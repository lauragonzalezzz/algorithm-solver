describe ('algorithmSolver', function (){


  it('should be a function', function() {
    expect(algorithmSolver).to.be.a('function');
  });

  it('should return a number', function() {
    expect(algorithmSolver()).to.be.a('number');
  });

  it('should return the sum of square roots', function() {
    var result = algorithmSolver(4);
    expect(result).to.equal(4.15);
    var result2 = algorithmSolver(5);
    expect(result).to.equal(6.15);
    var result3 = algorithmSolver(19);
    expect(result).to.equal(52.83);

  });


});