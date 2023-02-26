describe('testing calculateMonthlyPayment', function(){

  it('should calculate the monthly rate correctly', function () {
    // ...
    const values = {amount: 65000, years:8, rate: 2}
    expect(calculateMonthlyPayment(values)).toEqual('733.26');
  });


  it("should return a result with 2 decimal places", function() {
    // ...
    const values = {amount: 33333, years:3, rate: 3}
    expect(calculateMonthlyPayment(values)).toEqual('969.36');
  });

  it("should check that years is greater than zero", function(){
    const values = {amount: 33333, years:0, rate: 3}
    expect(function(){calculateMonthlyPayment(values)}).toThrow(new Error("Years must be greater than 0."));

  });
}
);
/// etc
