// ----- change language script -----
const langButtons = document.querySelectorAll('.lang-button');
const invitationTitle = document.getElementById('invitation-title');
const invitationText = document.getElementById('invitation-text');
const dateLabel = document.getElementById('date-label');
const date = document.getElementById('date');
const timeLabel = document.getElementById('time-label');
const time = document.getElementById('time');
const locationLabel = document.getElementById('location-label');
const locationName = document.getElementById('location-name');
const addressLabel = document.getElementById('address-label');
const address = document.getElementById('address');
const dressLabel = document.getElementById('dress-label');
const rsvpButton = document.getElementById('rsvp-button');

function setLanguage(language) {
    if (language === 'en') {
        invitationTitle.textContent = "You're Invited to a Bowling Event!";
        invitationText.textContent = "Come join us for a fun-filled evening of bowling.";
        dateLabel.textContent = "Date:";
        date.textContent = "Saturday, October 15th, 2023";
        timeLabel.textContent = "Time:";
        time.textContent = "7:00 PM - 10:00 PM";
        locationLabel.textContent = "Location:";
        locationName.textContent = "ABC Bowling Alley";
        addressLabel.textContent = "Address:";
        address.textContent = "123 Main Street, Cityville";
        dressLabel.textContent = "Dress comfortably and bring your competitive spirit!";
        rsvpButton.textContent = "RSVP";
    } else if (language === 'sv') {
        invitationTitle.textContent = "Du är inbjuden till en bowlingevenemang!";
        invitationText.textContent = "Kom och delta i en kväll med rolig bowling.";
        dateLabel.textContent = "Datum:";
        date.textContent = "Lördag den 15 oktober 2023";
        timeLabel.textContent = "Tid:";
        time.textContent = "19:00 - 22:00";
        locationLabel.textContent = "Plats:";
        locationName.textContent = "ABC Bowling Alley";
        addressLabel.textContent = "Adress:";
        address.textContent = "123 Main Street, Cityville";
        dressLabel.textContent = "Klä dig bekvämt och ta med din tävlingsanda!";
        rsvpButton.textContent = "Anmäl dig";
    }
}

// Add event listeners to language buttons to switch between English and Swedish
langButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const language = button.getAttribute('data-lang');
        document.documentElement.lang = language;
        setLanguage(language);
    });
});
// ----- end of changing language script ------
