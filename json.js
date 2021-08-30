// function loadUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => displyUsers(data));
// }






function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displyUsers(data));
}

function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data));
}

function displyUsers(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `name ${user.name} email : ${user.email}`;
        ul.appendChild(li);

    }

}