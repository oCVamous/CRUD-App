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
        <b>Vorname: </b> ${firstname} <br>
        <b>Nachname: </b> ${lastname} <br>
        <b>Telefonnummer: </b> ${phoneNumber} <br>
    </div>

    `;

}

