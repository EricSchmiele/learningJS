var listElement = document.querySelector('#repos ul');
var inputElement = document.querySelector('#repos input');
var buttonElement = document.querySelector('#repos button');
var messageElement = document.querySelector('#axios_message');

function updateMessage(message) {
    if(message) {
        var messageText = document.createTextNode(message);
        messageElement.innerHTML = '';
        messageElement.appendChild(messageText);
        messageElement.style.visibility = 'visible';
    } else {
        messageElement.style.visibility = 'hidden';
    }
}

function renderRepos(repos) {
    listElement.innerHTML = '';

    for (repo of repos) {
        var repoElement = document.createElement('li');
        var repoText = document.createTextNode(repo);

        repoElement.appendChild(repoText);
        listElement.appendChild(repoElement);
    }
}

function searchRepos() {
    updateMessage('Loading...');

    var userName = inputElement.value;
    inputElement.value = '';

    var repos = [];
    
    /**axios
     * it is a wrapper around the XMLHttpRequest
     * (so, it's a promise as well)
     */
    
    axios.get('https://api.github.com/users/' + userName + '/repos')
        .then(function(response) {
            updateMessage(null);
            response.data.forEach(repo => {
                repos.push(repo.name);
            });
            renderRepos(repos);
        })
        .catch(function(error) {
            updateMessage('User name not found');
            console.warn(error);
            renderRepos(repos);
        });

}

updateMessage(null);
buttonElement.onclick = searchRepos;
