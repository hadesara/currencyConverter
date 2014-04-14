var path = require('path');
var httpMocks = require('node-mocks-http');

GLOBAL.mongoose = require('mongoose');
GLOBAL.Schema = mongoose.Schema;
GLOBAL.ObjectId = mongoose.Types.ObjectId;
GLOBAL.currentDir = __dirname;

var transactionSchema = require(path.normalize("..//..//app//api//models//transaction"));
var transactionRoute = require(path.normalize("..//..//app//api//routes//transaction"));

describe("transaction route", function () {
		it("should create a new transaction", function () {
			var data = { TransactionDate: new Date(),
					    ProviderName: "Paypal",
					    Type: "Online",    PaymentStatus: "Completed",
					    Amount: 10.99, currency: "USD"}
			var request  = httpMocks.createRequest({
			method: 'POST',
			url: '/transaction',
			data: data
		});
		var response = httpMocks.createResponse();
		transactionRoute.addTransaction(request, response);
	});
	// it("should create a new request", function () {
	// 		var request  = httpMocks.createRequest({
	// 		method: 'POST',
	// 		url: '/transaction/42',
	// 		params: { id: 42 }
	// 	});
	// 	var response = httpMocks.createResponse();
	// 	transactionRoute.addTransaction(request, response);
	// });
});
