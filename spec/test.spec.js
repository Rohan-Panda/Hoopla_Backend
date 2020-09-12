const validator = require("../src/utilities/validator")
let req = require('request')
const errorlogger = require('../src/utilities/errorlogger');
const reqlogger = require('../src/utilities/requestlogger')
const fs = require('fs')
const wait = () => {
	return (setTimeout(() => {
		return new Promise(resolve => resolve())
	}), 20000);
}

describe("testing of user data", () => {
	beforeEach(() => {
		data = {
			uName: "Abhi",
			uEmail: "abhi1@gmail.com",
			uPass: "aaBcc$13cchjk",
			uPhone: "9645247916",
			address: "vasartgad,thamarj,chennai",
			uDOB: "10/07/1998"
		}

	})
	it("testing", () => {
		data.uName = "Abhi1"

		expect(function () { validator.userData(data) }).toThrow(new Error("name should contain only alphabets and spaces, name should not start and end with a space"))
	})
	it("testing", () => {
		data.uEmail = "abhi1@gmail.xysbaj",
			expect(function () { validator.userData(data) }).toThrow(new Error("Email id format is wrong"))
	})

	it("testing", () => {
		data.uPass = "aach12",
			expect(function () { validator.userData(data) }).toThrow(new Error("Password must have minimum 7 characters and maximum 20 characters and should contain  uppercase, lowercase,digits and special characters"))
	})

	it("testing", () => {
		data.uPhone = "9645246",
			expect(function () { validator.userData(data) }).toThrow(new Error("Invalid phoneNo"))
	})


	it("testing", () => {
		data.address = "vasan"
		expect(function () { validator.userData(data) }).toThrow(new Error("address must be minimum of ten characters"))

	})
	it("testing", () => {
		data.uDOB = "10/07/2021"
		expect(function () { validator.userData(data) }).toThrow(new Error("date of birth must be less than today"))

	})
})

describe("testing of user data", () => {
	beforeEach(() => {
		data = {

			uEmail: "abhi1@gmail.com",
			uPass: "aaBcc$13cchjk",

		}
	})

	it("testing", () => {
		data.uEmail = "abhi1@gmail.xysbaj",
			expect(function () { validator.validateEmailid(data) }).toThrow(new Error("Email id format is wrong"))
	})

	it("testing", () => {
		data.uPass = "aach12",
			expect(function () { validator.validatePassword(data) }).toThrow(new Error("Password must have minimum 7 characters and maximum 20 characters and should contain  uppercase, lowercase,digits and special characters"))
	})


})

describe('Testing Errorlogger', () => {
	let obj = { "errorlogger": errorlogger }
	let next = () => { }
	beforeEach(() => {
		res = {
			status: undefined,
			json: undefined,
			status: function (status) { this.status = status },
			json: function (json) { this.json = json }
		}
	})
	it('Response status set to 500 by default for Error', () => {
		let err = new Error("ErrorLogger test");

		try {
			obj.errorlogger(err, req, res, next)
		} catch (e) { }
		finally {
			expect(res.status).toEqual(500);
		}
	})


	it('Response status is set using Error status', () => {
		let err = new Error("ErrorLogger test");
		err.status = 404
		try {
			obj.errorlogger(err, req, res, next)
		} catch (e) { }
		finally {
			expect(res.status).toEqual(404);
		}
	})

	it('Response Should Contain Error Message', () => {
		let err = new Error("ErrorLogger test");
		try {
			obj.errorlogger(err, req, res, next)
		} catch (e) { }
		finally {
			expect(res.json.message).toEqual(err.message);
		}
	})
})

describe("Testing RequestLogger", () => {
	let obj = { "Requestlogger": reqlogger }
	let nextObj;
	let res = {}
	beforeEach(() => {
		nextObj = { next() { } }
		spyOn(nextObj, 'next')
		req.url = '/testing'
		req.method = 'get'
		fdata1 = '',
			fdata2 = ''


	})
	it('next should be called', () => {
		try {
			obj.Requestlogger(req, res, nextObj.next);
		}
		finally {
			expect(nextObj.next).toHaveBeenCalled();
		}
	})
	it('Request should be logged in file', () => {
		try {
			fdata1 = fs.readFileSync('../RequestLogger.txt');
			//console.log(fdata1.length)
			obj.Requestlogger(req, res, nextObj.next);
			wait()
		}
		catch (e) { }
		finally {
			wait();
			wait();
			fdata2 = fs.readFileSync('RequestLogger.txt');
			expect(fdata2.length + 1).toBeGreaterThan(fdata1.length);
		}
	})
});