const getAPIData = require('../server/sentimentalAPI.js')

describe("Testing submit functionality", () => {
    test("Testing the sentimentalAPI function", () =>{
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve("test")
        }))
        return getAPIData(123, ["This is a test", false]).then(data => {expect(data.toBeUndefined)})
    });
});

//manual mock for fetch was borrowed from https://www.leighhalliday.com/mock-fetch-jest