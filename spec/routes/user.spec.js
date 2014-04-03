var path = require('path');
var httpMocks = require('node-mocks-http');

GLOBAL.mongoose = require('mongoose');
GLOBAL.Schema = mongoose.Schema;
GLOBAL.ObjectId = mongoose.Types.ObjectId;
GLOBAL.currentDir = __dirname;

var userSchema = require(path.normalize("..//..//app//api//models//user"));
var userRoute = require(path.normalize("..//..//app//api//routes//user"));

var request  = httpMocks.createRequest({
	method: 'POST',
	url: '/user/42',
	params: { id: 42 }
});
var response = httpMocks.createResponse();

describe("user route", function () {
	it("should create a new route", function () {
		var user = userRoute.addUser(request, response);

		expect(product).toBe(6);
	});
});
