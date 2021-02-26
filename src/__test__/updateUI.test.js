import {uiUpdate} from "../client/js/updateUI"

describe("Testing UI update functionality", () => {
    test("Testing the updateUI() function", () =>{
        document.body.innerHTML =`<div id ="results-section"><div id ="results"></div></div>`
        const input = [{
            agreement: "AGREEMENT",
            confidence: "CONFIDENT",
            subjectivity: "OBJECTIVE",
            irony: "NONIRONIC"
        }, "This is a test"]
        const output = [`<h3>Submission:</h3> "This is a test" <br>
        <h3>Agreement:</h3> AGREEMENT <br>
        <h3>Confidence:</h3> CONFIDENT <br>
        <h3>Subjectivity:</h3> OBJECTIVE<br>
        <h3>Irony:</h3> NONIRONIC`]
        console.log(document.getElementById("results").innerHTML)
        expect(uiUpdate(input[0],input[1])).toBeUndefined
    })
})
