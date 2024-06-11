
function github() {
    var getinp = document.getElementById('inp');
    fetch(`https://api.github.com/users/${getinp.value}`)
    .then(function (data) {
        return data.json();
    })
    .then(function (data) {
        var getdiv = document.getElementById('show');
        getdiv.innerHTML += `
        <div class="col-md-2 mb-2">
            <div class="card">
                <img src="${data.avatar_url}" class="card-img-top" width="10%">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text"><strong>Bio:</strong>${data.bio ? data.bio : 'No bio available'}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Followers:</strong> ${data.followers}</li>
                    <li class="list-group-item"><strong>Following:</strong> ${data.following}</li>
                </ul>
                <div class="card-body">
                    <a target="_blank" href="${data.html_url}">View Profile</a>
                </div>
            </div>
        </div>`;
        getinp.value = '';
    })
    .catch(function (data) {
        console.log(data);
    });
  }
