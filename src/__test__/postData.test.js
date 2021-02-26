import {postData} from "../client/js/postData"
import 'regenerator-runtime/runtime'

describe("Testing if data being sent to server", () => {
    test("Testing the postData() function", () =>{
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve("test")
        }))
        return postData('/test', {}).then(data => {expect(data).toBeUndefined})
    });
})

//manual mock for fetch was borrowed from https://www.leighhalliday.com/mock-fetch-jest