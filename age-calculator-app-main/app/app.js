

function calculateAge() {
    const today = new Date();
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value-1;
    const year = document.getElementById('year').value;
    const birthDate = new Date(year, month, day)

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();
    
    console.log(ageDays)
    if (ageDays<0){
        ageMonths--;
        const lastMonth = new Date(today.getFullYear, today.getMonth, 0);
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
    console.log(day);
}