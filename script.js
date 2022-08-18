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

function addUser() {
    templateNewUser();
}

function templateNewUser() {
    document.getElementById('newUser').classList.remove('d-none');
    let newUser = document.getElementById('newUser');
    newUser.innerHTML +=
    `   <div id="firstname-box">
            <input class="input" placeholder="Firstame" id="newFirstName" type="text">
        </div>
        
        <div id="lastname-box">
            <input class="input" placeholder="Lastname" id="newLastName type="text">
        </div>
        
        <div id="phoneNumber-box">
            <input class="input" placeholder="Phone-Number" id="newPhoneNumber" type="text">
        </div>
        
        <button class="input" >Add</button>

        <div id="close-box">
            <img onclick="addUser()" class="icon" src="img/cancel.png" alt="">
        </div>
    `;
}

