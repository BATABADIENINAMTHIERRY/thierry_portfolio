// Validation du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Veuillez remplir tous les champs.');
        event.preventDefault();
    } else {
        alert('Message envoyé avec succès !');
    }
});