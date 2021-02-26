function uiUpdate(data,submissionText){
    document.getElementById('results-section').style.display = "block";
    document.getElementById('results').innerHTML = `<h3>Submission:</h3> "${submissionText}"<br>
        <h3>Agreement:</h3> ${data['agreement']}<br>
        <h3>Confidence:</h3> ${data['confidence']} <br>
        <h3>Subjectivity:</h3> ${data['subjectivity']}<br>
        <h3>Irony:</h3> ${data['irony']}`
}
export{ uiUpdate }
