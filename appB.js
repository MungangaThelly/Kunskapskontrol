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




/*  Key Points
Event Listener: Listens for clicks to add a contact.
Validation: Checks that inputs are filled and the phone number contains only digits.
Creating Contact: Constructs the contact entry and appends it to the list.

Här är en förbättrad version av min kontaktlista-applikation som inkluderar de nya kraven. 
Jag har lagt till funktioner för validering, felmeddelanden och en "Radera lista"-knapp.


The validateInputs function checks both the name and phone number fields. It ensures the name field is not empty and that the phone number consists only of digits.
The error messages are updated to provide clear feedback to the user if the validation fails, emphasizing that both fields must be filled and that the phone number must only contain numbers.
This integration will enhance the user experience by preventing invalid input and ensuring that only valid contacts are added to the list.

Förklaring av nya funktioner
Validering: validateInputs-funktionen kontrollerar att båda textfälten är ifyllda innan en kontakt läggs till eller sparas.
Felmeddelanden: Felmeddelanden visas i en div under kontaktfältet istället för med alert.
Radera lista: clearContactList-funktionen raderar alla kontakter i listan.
Knapp för att radera lista: En ny knapp "Radera lista" har lagts till, 
som anropar clearContactList-funktionen. Med en bekräftelseprompt att visas när användaren försöker radera hela kontaktlistan. 
Om användaren väljer "OK" kommer listan att raderas; om de väljer "Avbryt" kommer inget att hända. 
Detta gör applikationen mer användarvänlig och minskar risken för oavsiktlig radering av kontakter.
*/