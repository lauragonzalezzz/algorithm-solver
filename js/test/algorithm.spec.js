describe ('algorithmSolver', function (){

  it('should be a function', function() {
    expect(algorithmSolver).to.be.a('function');
  });

  it('should return a number', function() {
    expect(algorithmSolver()).to.be.a('number');
  });


});