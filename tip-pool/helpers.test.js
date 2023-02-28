describe("Helpers test", function(){
    beforeEach(function () {
        billAmtInput.value = 100.00;
        tipAmtInput.value = 1;

        submitPaymentInfo();
    })
    
    //'tipAmt', 'billAmt', 'tipPercent'
    it('should sum all values of the specified type', function(){
        expect(sumPaymentTotal('tipAmt')).toBe(1.00);
        expect(sumPaymentTotal('billAmt')).toBe(100);
        expect(sumPaymentTotal('tipPercent')).toBe(1);
    });

    it('should determine the percentage of the tip with calculateTipPercent', function(){
        expect(calculateTipPercent(100, 10)).toBe(10);
    });

    it('should append a td to a given tr with appendTd', function(){
        let testTr = document.createElement('tr');
        appendTd(testTr, "some value");

        expect(testTr.firstChild.innerHTML).toBe("some value");
    });

    afterEach(function(){
        billAmtInput.value = "";
        tipAmtInput.value = "";

        summaryTds[0].innerHTML = "";
        summaryTds[1].innerHTML = "";
        summaryTds[2].innerHTML = "";

        paymentTbody.innerHTML = "";
        serverTbody.innerHTML = "";
        paymentId = 0;

        allPayments = {};
    });
});