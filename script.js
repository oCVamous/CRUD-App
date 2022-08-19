let persons = [];

async function init() {
    let resp = await fetch('./persons.json');
    persons = await resp.json();
    load();
    render();
    
}

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        const firstname = person['firstname'];
        const lastname = person['lastname'];
        const phoneNumber = person['phoneNumber'];
        
        content.innerHTML +=  templateCreateCard(firstname, lastname, phoneNumber, i);
    }
}

function templateCreateCard(firstname, lastname, phoneNumber, i) {
    return `
    <div id="person-card">
        <div id="person-card-top">
            <img onclick="edit(${i})" class="edit" src="img/edit.png" alt="">
            <button onclick="deleteContact(${i})">X</button>
        </div>
        <div id="card-data"
            <b>Firstname: </b> ${firstname} <br>
            <b>Lastname: </b> ${lastname} <br>
            <b>Phone-Number: </b> ${phoneNumber} <br>
        </div>
    </div>
    
    `;
}

function show() {
    openNewUser();
}

function openNewUser() {
    document.getElementById('newUser').classList.remove('d-none');
}

function closeNewUser() {
    document.getElementById('newUser').classList.add('allBlur');
    document.getElementById('newUser').classList.add('d-none');
}

function edit(i) {
    let trashFolderModal = document.getElementById('allBlur');
    let editor = document.getElementById(`editor`);
    editor.classList.remove('d-none');
    trashFolderModal.classList.remove('d-none');
}

function hideAllBlur() {
    document.getElementById('allBlur').classList.add('d-none');
    document.getElementById('editor').classList.add('d-none');
}

function addUser() {
    let firstname = document.getElementById('newFirstName-add').value;
    let lastname = document.getElementById('newLastName-add').value;
    let phoneNumber = document.getElementById('newPhoneNumber-add').value;

    persons.push({
        "firstname": firstname,
        "lastname": lastname,
        "phoneNumber": phoneNumber
    });
    render();
    save();
}

function addUserEdit() {
    let firstname = document.getElementById('newFirstName-edit').value;
    let lastname = document.getElementById('newLastName-edit').value;
    let phoneNumber = document.getElementById('newPhoneNumber-edit').value;

    persons.push({
        "firstname": firstname,
        "lastname": lastname,
        "phoneNumber": phoneNumber
    });
    render();
    save();
    hideAllBlur();
}

function save() {
    let personsAsText = JSON.stringify(persons); //Stringyify ---> Umwandlung in Text
    localStorage.setItem('persons', personsAsText);
}

function load() {
    let personsAsText = localStorage.getItem('persons');
    if(personsAsText) {
        persons = JSON.parse(personsAsText);
    }
    
}

function deleteContact(i) {
    persons.splice(i, 1);
    render();
    save();
}



