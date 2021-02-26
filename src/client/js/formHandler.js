import { validURL } from "./validateURL";

function handleSubmit(event) {
    event.preventDefault()
    let submitText = document.getElementById('submission').value
    let url = false;
    let dataInfo = [submitText, url]
    if(submitText.length === 0){
        alert("Please insert an article or text. Thanks!")
    }else{
        if(document.getElementById("text").checked || document.getElementById("url").checked)
            console.log("::: Form Submitted :::")
            if(document.getElementById("text").checked){
                Client.postData('http://localhost:8081/submission', dataInfo)
                .then((data) => {
                    Client.uiUpdate(data,submitText)
                })
            }else if(document.getElementById("url").checked){
                url = true;
                dataInfo = [submitText, url]
                let response = validURL(submitText)
                if(response === "valid"){
                    Client.postData('http://localhost:8081/submission', dataInfo)
                    .then((data) => {
                        Client.uiUpdate(data,submitText)
                    })
                }else{
                    alert("Please insert a valid link!")
                }
        }else{
            alert("Please indicate whether you are submitting text or an article!")
        }
    }
}

export { handleSubmit }