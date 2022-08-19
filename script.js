let persons = [
    {
        "firstname": "Johnny",
        "lastname": "Depp",
        "phoneNumber": "987654321"
    },
    {
        "firstname": "Thomas",
        "lastname": "Müller",
        "phoneNumber": "123456789"
    }
];

async function init() {
    loadPersons();
    renderPersons();
}

function loadPersons() {
    let personsAsText = localStorage.getItem('persons');
    if(personsAsText) {
        persons = JSON.parse(personsAsText);
    }
}

function renderPersons() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < persons.length; i++) {        
        content.innerHTML +=  createTemplatePersonCard(i);
    }
}

function createTemplatePersonCard(personIndex) {
    const person = persons[personIndex];
    return `
    <div id="person-card">
        <div id="person-card-top">
            <img onclick="edit(${personIndex})" class="edit" src="img/edit.png" alt="">
            <button onclick="deleteContact(${personIndex})">X</button>
        </div>
        <div id="card-data"
            <b>Firstname: </b> ${person.firstname} <br>
            <b>Lastname: </b> ${person.lastname} <br>
            <b>Phone-Number: </b> ${person.phoneNumber} <br>
        </div>
    </div>
    
    `;
}

function showNewUserDialog() {
    document.getElementById('newUser').classList.remove('d-none');
}

function closeNewUserDialog() {
    document.getElementById('newUser').classList.add('allBlur');
    document.getElementById('newUser').classList.add('d-none');
}

function closeNewUserDialogEdit() {
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

function deleteContact(i) {
    persons.splice(i, 1);
    render();
    save();
}



