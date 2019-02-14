var expect = require("expect");

var { generateMessage, generateLocationMessage } = require("./message");

describe("generateMessage", () => {
  it("should generate correct message object", () => {
    var from = "Jane";
    var text = "Some message";
    var message = generateMessage(from, text);

    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(typeof message.createdAt).toBe("number");
  });
});

describe("generateLinkMessage", () => {
  it("should generate correct location object", () => {
    var from = "Admin";
    var latitude = "15";
    var longitude = "19";
    var message = generateLocationMessage(from, latitude, longitude);
    var url = "https://www.google.com/maps?q=15,19";

    expect(message.from).toBe(from);
    expect(message.url).toBe(url);
    expect(typeof message.createdAt).toBe("number");
  });
});
