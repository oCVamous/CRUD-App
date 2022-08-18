let persons = [];

async function init() {
    let resp = await fetch('./persons.json');
    persons = await resp.json();
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
        
        content.innerHTML +=  templateContent(firstname, lastname, phoneNumber, i);
    }
}

function templateContent(firstname, lastname, phoneNumber) {
    return `
    <div id="person-card">
        <b>Firstname: </b> ${firstname} <br>
        <b>Lastname: </b> ${lastname} <br>
        <b>Phone-Number: </b> ${phoneNumber} <br>
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
    document.getElementById('newUser').classList.add('d-none');
}

function addUser() {
    let firstname = document.getElementById('newFirstName').value;
    let lastname = document.getElementById('newFirstName').value;
    let phoneNumber = document.getElementById('newFirstName').value;

    persons.push({
        "firstname": firstname.value,
        "lastname": lastname.value,
        "phoneNumber": phoneNumber.value
    });
}

