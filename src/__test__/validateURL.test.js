import {validURL} from "../client/js/validateURL"

describe("Testing url validation functionality", () => {
    test("Testing the validURL() function", () =>{
        let url = "https://www.bbc.com/news/world-middle-east-56194624"
        expect(validURL(url)).toBe("valid")
    });
});