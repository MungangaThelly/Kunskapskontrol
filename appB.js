document.getElementById('add-contact').addEventListener('click', function() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const errorMessage = document.getElementById('error-message');

    if (!validateInputs(nameInput.value, phoneInput.value)) {
        errorMessage.textContent = 'Får ej skapa tom konktakt! Båda fälten måste fyllas i och telephonnumret får endast innehålla siffror!';
        return;
    } else {
        errorMessage.textContent = ''; // Rensa felmeddelandet
    }

    const newContact = {
        name: nameInput.value,
        phone: phoneInput.value
    };

    addContactToList(newContact); // Add contact

    // Töm fälten
    nameInput.value = '';
    phoneInput.value = '';
});

document.getElementById('clear-list').addEventListener('click', function() {
    if (confirm('Du är på väg att radera hela den här kontaktlistan, är du säker på den här åtgärden?')) {
        clearContactList();
    }
});

function validateInputs(name, phone) {
    const phoneRegex = /^[0-9]+$/; // Regex for digits only
    return name.trim() !== '' && phoneRegex.test(phone.trim()); // Check validity
}

function createContactElement(contact) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <input type="text" value="${contact.name}" disabled />
        <input type="text" value="${contact.phone}" disabled />
        <button onclick="editContact(this)">Ändra</button>
        <button onclick="deleteContact(this)">Radera</button>
    `;
    return listItem; // Return the list item
}

function addContactToList(contact) {
    const contactsList = document.getElementById('contacts');
    contactsList.appendChild(createContactElement(contact)); // Use the new function
}

function editContact(button) {
    const inputs = button.parentElement.getElementsByTagName('input');
    const isDisabled = inputs[0].disabled;

    if (isDisabled) {
        button.textContent = 'Spara';
        for (let input of inputs) {
            input.disabled = false; // Gör fälten redigerbara
        }
    } else {
        if (validateInputs(inputs[0].value, inputs[1].value)) {
            for (let input of inputs) {
                input.disabled = true; // Lås fälten
            }
            button.textContent = 'Ändra'; // Återställ knapptexten
        } else {
            const errorMessage = document.getElementById('error-message');
            errorMessage.textContent = 'Båda fälten måste fyllas i och telefonnumret får endast innehålla siffror!';
        }
    }
}

function deleteContact(button) {
    const listItem = button.parentElement;
    listItem.remove();
}

function clearContactList() { 
    const contactsList = document.getElementById('contacts');
    contactsList.innerHTML = ''; // Radera alla kontakter

}