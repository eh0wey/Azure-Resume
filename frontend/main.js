window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const funtionApiUrl = 'https://getresumecounter1.azurewebsites.net/api/GetResumeCounter?code=iDNtnAsdaI3vIfBHHjXllMrOUtK0kcwCHjFtomZHzMWA98snhyB0vQ==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json();
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
} 