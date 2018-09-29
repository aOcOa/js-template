const { describe, it, before, after, done } = require("mocha");
const { expect } = require("chai");
const { JSDOM } = require("jsdom");
import { doesNotReject } from "assert";
const dom = new JSDOM();
global.document = dom.document;

var chai = require("chai");
chai.use(require("chai-dom"));

const rootDom = new JSDOM(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>TEST</title>
  </head>
  <body>
  </body>
</html>`);

document = rootDom.window.document;

describe("counter", () => {
	before(() => {
  
	});

	it("dosomething", () => {
	});
 
});
