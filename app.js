function calculateAkanName() {
    const dobInput = document.getElementById('dob').value;
    const genderInput = document.getElementById('gender').value;

    const dayOfWeek = getDayOfWeek(dobInput);
    const akanName = getAkanName(genderInput, dayOfWeek);

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>Your Akan name is: <strong>${akanName}</strong></p>`;
}

function getDayOfWeek(dateString) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}

function getAkanName(gender, dayOfWeek) {
    // Akan names based on gender and day of the week
    const maleNames = {
        Sunday: 'Kwasi',
        Monday: 'Kwadwo',
        Tuesday: 'Kwabena',
        Wednesday: 'Kwaku',
        Thursday: 'Yaw',
        Friday: 'Kofi',
        Saturday: 'Kwame',
    };

    const femaleNames = {
        Sunday: 'Akosua',
        Monday: 'Adwoa',
        Tuesday: 'Abenaa',
        Wednesday: 'Akua',
        Thursday: 'Yaa',
        Friday: 'Afia',
        Saturday: 'Ama',
    };

    return gender === 'male' ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
}
