document.getElementById('add-contact').addEventListener('click', function() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    
    // Skapa ny kontakt
    const newContact = {
        name: nameInput.value,
        phone: phoneInput.value
    };

    addContactToList(newContact);
    
    // Töm fälten
    nameInput.value = '';
    phoneInput.value = '';
});

function addContactToList(contact) {
    const contactsList = document.getElementById('contacts');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <input type="text" value="${contact.name}" disabled />
        <input type="text" value="${contact.phone}" disabled />
        <button onclick="editContact(this)">Ändra</button>
        <button onclick="deleteContact(this)">Radera</button>
    `;
    contactsList.appendChild(listItem);
}

function editContact(button) {
    const inputs = button.parentElement.getElementsByTagName('input');
    const isDisabled = inputs[0].disabled;

    for (let input of inputs) {
        input.disabled = !isDisabled;
    }
    
    button.textContent = isDisabled ? 'Spara' : 'Ändra';
}

function deleteContact(button) {
    const listItem = button.parentElement;
    listItem.remove();
}

/* Sammanfattning
Denna struktur och funktionalitet ger oss en grundläggande kontaktlista-applikation med de krav du angav. 
Vi kan sedan bygga vidare på den genom att implementera mer avancerad funktionalitet eller design, 
som exempelvis lägga till fel medelandet och bortaggningsknappen osv. */