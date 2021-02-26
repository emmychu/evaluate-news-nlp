import {handleSubmit} from "../client/js/formHandler"

describe("Testing submit functionality", () => {
    test("Testing the handleSubmit() function", () =>{
        document.body.innerHTML =`<div><input id="text"/><input id="submission"/></div>`
        // const text = document.getElementById("text").value = "Hello this is a test, I hope it works."
        window.alert = jest.fn()
        const res = handleSubmit({ preventDefault: () => {} });
        expect(res).toBeUndefined
        window.alert.mockClear();
    });
});

//to pass preventDefault error, used solution from: https://knowledge.udacity.com/questions/325789