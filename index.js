
var totalSale = document.getElementById('totalSalesAmount');
var tendered = document.getElementById('tenderedAmount');

function roundToDecimal(num,dec) {
      var rounded = (Math.round(num * Math.pow(10,dec)) / Math.pow(10,dec)).toFixed(dec);
      return rounded;
}
var button = document.getElementById('button');
button.onclick = function() {
	var saleValue = totalSale.value;
	var tenderValue = tendered.value;
	var difference = roundToDecimal(tenderValue - saleValue, 2);
	var message = 'The customer should receive ' + difference + ' in change.';
	var result = document.getElementById('output');
	result.innerHTML = message;

	var changeDifference = 100 * difference;
	var dollarFifty = parseInt(changeDifference / 5000);
	var fiftyReturned = document.getElementById('fiftiesValue');
	fiftyReturned.innerHTML = dollarFifty;
	var dollarTwenty = parseInt((changeDifference - dollarFifty * 5000) / 2000);
	var twentyReturned = document.getElementById('twentiesValue');
	twentyReturned.innerHTML = dollarTwenty;
	var dollarTen = parseInt((changeDifference - dollarFifty * 5000 - dollarTwenty * 2000) / 1000);
	var tenReturned = document.getElementById('tensValue');
	tenReturned.innerHTML = dollarTen;
	var dollarFive = parseInt((changeDifference - dollarFifty * 5000 - dollarTwenty * 2000 - dollarTen *1000) / 500);
	var fiveReturned = document.getElementById('fivesValue');
	fiveReturned.innerHTML = dollarFive;
	var dollarOnes = parseInt((changeDifference - dollarFifty * 5000 - dollarTwenty * 2000 - dollarTen * 1000 - dollarFive * 500) / 100);
	var oneReturned = document.getElementById('onesValue');
	oneReturned.innerHTML = dollarOnes;
	var dollars = parseInt(changeDifference / 100);
	var quarters = parseInt((changeDifference - dollars * 100) / 25);
	var quarterReturned = document.getElementById('quartersValue');
	quarterReturned.innerHTML = quarters;
	var dimes = parseInt(Math.ceil(100*(changeDifference - dollars * 100 - quarters * 25) / 10)/100);
	var dimeReturned = document.getElementById('dimesValue');
	dimeReturned.innerHTML = dimes;
	var nickels = parseInt(Math.ceil(100*(changeDifference - dollars * 100 - quarters * 25 - dimes * 10) / 5)/100);
	var nickelReturned = document.getElementById('nickelsValue');
	nickelReturned.innerHTML = nickels;
	var pennies = parseInt(Math.ceil(100*(changeDifference - dollars * 100 - quarters * 25 - dimes * 10 - nickels * 5)/100));
	var pennyReturned = document.getElementById('penniesValue');
	pennyReturned.innerHTML = pennies;
	// The original message below:
	// var changeMessage = 'Give the customer ' + dollarFifty + ' fifty dollar notes, '
	// + dollarTwenty + ' twenty dollar notes, ' + dollarTen + ' ten dollar notes, '
	// + dollarFive + ' five dollar notes, ' + dollarOnes + ' one dollar notes, ' + quarters +
	// ' quarters, ' + dimes + ' dimes, ' + nickels + ' nickels and ' + pennies +
	// ' pennies.'
	// var changeResult = document.getElementById('output2');
	// changeResult.innerHTML = changeMessage;

}









