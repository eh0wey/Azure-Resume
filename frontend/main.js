window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const funtionApiUrl = 'https://getresumecounter1.azurewebsites.net/api/GetResumeCounter?code=5OaaiwaCIQfViEaHNClnDya9FKlX57G256XNv1TWXrriOV9P/zAmUw==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(localFunctionApi).then(response => {
        return response.json();
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
} 