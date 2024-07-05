function calculateAge() {
    document.getElementById('day-error').textContent = '';
    document.getElementById('month-error').textContent = '';
    document.getElementById('year-error').textContent = '';

    document.getElementById('day').classList.remove('input-error');
    document.getElementById('month').classList.remove('input-error');
    document.getElementById('year').classList.remove('input-error');
    document.getElementById('day-label').classList.remove('label-error');
    document.getElementById('month-label').classList.remove('label-error');
    document.getElementById('year-label').classList.remove('label-error');

    const today = new Date();
    const day = parseInt(document.getElementById('day').value, 10);
    const month = parseInt(document.getElementById('month').value, 10) - 1;
    const year = parseInt(document.getElementById('year').value, 10);


    let valid = true;

   
    if (isNaN(day) || day < 1 || day > 31) {
        document.getElementById('day-error').textContent = 'Must be a valid day';
        document.getElementById('day').classList.add('input-error');
        document.getElementById('day-label').classList.add('label-error');
        valid = false;
    }

   
    if (isNaN(month) || month < 0 || month > 11) {
        document.getElementById('month-error').textContent = 'Must be a valid month';
        document.getElementById('month').classList.add('input-error');
        document.getElementById('month-label').classList.add('label-error');
        valid = false;
    }

    
    if (isNaN(year) || year > today.getFullYear()) {
        document.getElementById('year-error').textContent = 'Must be in the past';
        document.getElementById('year').classList.add('input-error');
        document.getElementById('year-label').classList.add('label-error');
        valid = false;
    }

    if (!valid) {
        return;
    }

    const birthDate = new Date(year, month, day);

   
    if (birthDate.getDate() != day || birthDate.getMonth() != month || birthDate.getFullYear() != year) {
        document.getElementById('day-error').textContent = 'Must be a valid date';
        document.getElementById('day').classList.add('input-error');
        document.getElementById('month').classList.add('input-error');
        document.getElementById('year').classList.add('input-error');
        document.getElementById('day-label').classList.add('label-error');
        document.getElementById('month-label').classList.add('label-error');
        document.getElementById('year-label').classList.add('label-error');
        return;
    }


    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();
    
    if (ageDays<0){
        ageMonths--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += lastMonth.getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('years').textContent = ageYears;
    document.getElementById('months').textContent = ageMonths;
    document.getElementById('days').textContent = ageDays;
    console.log('Years: ', ageYears, 'Months: ', ageMonths, 'Days: ',ageDays);
}