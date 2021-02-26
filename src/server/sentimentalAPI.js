const fetch = require("node-fetch");

const getAPIData = async(api, submission) => {
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${api}&of=json&lang=en`
    if(submission[1] !== true){
        let text = submission[0]
        let textUrl = `&txt=${text}`
        let response = await fetch( url + textUrl,{
            method: 'POST',
            headers:{'Content-Type': 'application/json'}
        })
        try{
            let data = await response.json()
            console.log(data);
            return(data);
        }catch(error){
            console.log("error", error);
        }
    }else{
        let article = submission[0]
        let articleUrl = `&url=${article}`
        let response = await fetch( url + articleUrl,{
            method: 'POST',
            headers:{'Content-Type': 'application/json'}
        });
        try{
            let data = await response.json()
            console.log(data);
            return(data);
        }catch(error){
            console.log("error", error);
        }
    }
}

module.exports = getAPIData
